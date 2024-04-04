import React from "react";
import Tesla from "../assets/images/Tesla.png";
import SecondaryBtn from "./SecondaryBtn";
import { CiLocationOn, CiClock2, CiBookmark } from "react-icons/ci";

export default function JobCard() {
  return (
    <div className="border border-outline rounded-md p-6 text-text-primary">
      <div className="flex justify-between">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={Tesla} alt="" />
        </div>
        <SecondaryBtn btnName={"Apply Now"} />
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
      <div className="mt-6 flex gap-3">
        <p>Remote</p>
        <p>Entry Level</p>
        <p>Full Time</p>
      </div>
      <p>Salary:50k-80k AUD</p>
      <hr className="border border-1 mt-8" />
      <div className="flex justify-between mt-5">
        <p className="font-medium">Tesla Inc.</p>
        <CiBookmark className="text-xl" />
      </div>
    </div>
  );
}
