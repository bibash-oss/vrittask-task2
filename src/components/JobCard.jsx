import React, { Children } from "react";
import Tesla from "../assets/images/Tesla.png";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import SecondaryBtn from "./SecondaryBtn";
import SmallSecondaryBtn from "./SmallSecondaryBtn";

export default function JobCard({ children, btn }) {
  return (
    <div className="border border-outline rounded-md p-6 text-text-primary">
      <div className="flex justify-between items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={Tesla} alt="" />
        </div>
        {btn == "small" ? (
          <SmallSecondaryBtn jobs={60} />
        ) : (
          <SecondaryBtn btnName="Apply Now" />
        )}
      </div>
      <p className="mt-6 font-semibold text-lg">Deep Learning Engineer</p>
      <div className="flex gap-4 text-sm text-text-secondary-light">
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p>Sydney-Australia</p>
        </div>
        <div className="flex items-center gap-2">
          <CiClock2 />
          <p>Expires in 25 Days</p>
        </div>
      </div>
      {children}
    </div>
  );
}
