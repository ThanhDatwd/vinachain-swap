"use client"
import { ArrowBottomIcon } from "@/assets/icons/ArrowDownIcon";
import Link from "next/link";
import { useState } from "react";
import Icon from "../Icon";

interface IQuestionCard {
  title: string;
  content: string;
  path: { d: string; fill: string }[];
}

export const QuestionCard = ({ title, content, path }: IQuestionCard) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={"/coming-soon"}
      className={`flex flex-col gap-5 p-6 rounded-xl border ${
        isHovered ? "border-[#246bee]" : "border-[#e9ecef]"
      } bg-[#f8f9fa]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <Icon d={path} />
        {isHovered && (
          <ArrowBottomIcon
            width={18}
            height={18}
            color="#246bee"
            className="rotate-[215deg]"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 text-[14.5px] text-black">
        <h3 className="text-[#111b36] text-[18.7px]">{title}</h3>
        <span>{content}</span>
      </div>
    </Link>
  );
};
