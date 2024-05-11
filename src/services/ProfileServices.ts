import restConnector from "@/connectors/AxiosRestConector";
import { AxiosInstance } from "axios";

export class ProfileService {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async changePassword(values: {
    oldPassword: string;
    newPassword: string;
  }): Promise<any | null> {
    const { data } = await restConnector.post("/users/change-password", {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
    return data;
  }
}

export const profileService = new ProfileService({ restConnector });
