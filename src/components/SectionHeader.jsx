import React from "react";
import SecondaryBtn from "./SecondaryBtn";
import { FaArrowRight } from "react-icons/fa";
export default function SectionHeader({ title }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <SecondaryBtn btnName={"See More"} icon={<FaArrowRight />} />
    </div>
  );
}
