import { getStaticURL } from "@/utils/constants";
import Image from "next/image";

export interface IStaffInfo {
  avatar: string;
  name: string;
  position: string;
  desc: string;
}

export const StaffInfoCard = (props: IStaffInfo) => {
  const { avatar, name, position, desc } = props;
  return (
    <div className="flex flex-col items-center px-3 mt-6">
      <div
        className="w-40 h-40 rounded-full bg-cover grayscale"
        style={{
          backgroundImage: `url(${getStaticURL()}/assets/images/${avatar})`,
          backgroundSize: "cover",
        }}
      />
      <div className="flex flex-col text-center text-[14px] text-gray550 py-3">
        <span className="text-[15px] text-black200 mb-1">{name}</span>
        <span>{position}</span>
        <span className="text-xs">{desc}</span>
      </div>
    </div>
  );
};
