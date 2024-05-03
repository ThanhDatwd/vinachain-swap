import { t } from "i18next";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import restConnector from "@/connectors/AxiosRestConector";
import { convertName } from "@/utils/convertName";
const OSS = require("ali-oss");

const isDev = process.env.NODE_ENV === "development";

export const useGetSessionToken = () => {
  const getSessionToken = async () => {
    try {
      const { data } = await restConnector.get(`/uploads/session-token`);
      return data;
    } catch (error) {
      toast(`${t("somethingWentWrong")}`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return { getSessionToken };
};

export const useGetTempUploadCredentials = () => {
  const { getSessionToken } = useGetSessionToken();

  const getTempUploadCredentials = async () => {
    try {
      const sessionToken = await getSessionToken();
      if (sessionToken.success === "false") {
        throw new Error("No session token");
      }
      const { data } = await restConnector.get(
        `/uploads/temp-upload-credentials`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-session-token": sessionToken.data,
          },
        }
      );
      return data.data;
    } catch (error) {
      toast(`${t("somethingWentWrong")}`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return { getTempUploadCredentials };
};

export const useAliUpload = () => {
  const { getTempUploadCredentials } = useGetTempUploadCredentials();

  const onAliUpload = async (fileImgs: { image: File[]; imageName: string }[], field: string) => {
    try {
      const { AccessKeyId, AccessKeySecret, SecurityToken } =
        await getTempUploadCredentials();
      if (!AccessKeyId || !AccessKeySecret || !SecurityToken) {
        throw new Error("No credentials");
      }
      const client = new OSS({
        accessKeyId: AccessKeyId,
        accessKeySecret: AccessKeySecret,
        cname: true,
        endpoint: `${process.env.NEXT_PUBLIC_STATIC_ALI_OSS_DOMAIN}`,
        stsToken: SecurityToken,
        bucket: `${process.env.NEXT_PUBLIC_STATIC_ALI_OSS_BUCKET}`,
        region: `${process.env.NEXT_PUBLIC_STATIC_ALI_OSS_REGION}`,
      });

      if (Array.isArray(fileImgs)) {
        const files = fileImgs;
        const promises = files.map(async (file) => {
          const fileName = `${field}/${convertName(file.imageName, file.image[0].name)}`;
          const data = await client.put(fileName, file.image[0], {
            headers: {
              "x-oss-object-acl": "private",
            },
          });
          return { ...data, field };
        });
        const result = await Promise.all(promises);
        return result;
      }
    } catch (error) {
      toast(`${t("somethingWentWrong")}`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return { onAliUpload };
};
