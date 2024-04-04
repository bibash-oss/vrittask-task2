import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Search() {
  return (
    <div className="p-3 bg-white mt-16">
      <form action="" className="flex justify-between">
        <div className="flex gap-2 basis-4/5 items-center">
          <div className="w-full flex items-center text-text-secondary">
            <FaSearch className="translate-x-9 text-xl" />
            <input
              type="text"
              className="w-full pl-14 py-4 focus:outline-none "
              placeholder="Job tittle, Keyword..."
            />
          </div>
          <div className="bg-text-secondary h-9 w-[1px]"></div>
          <div className=" flex items-center text-text-secondary">
            <FaLocationDot className="translate-x-9 text-xl" />
            <input
              type="text"
              className="pl-14 py-4 focus:outline-none"
              placeholder="Enter location "
            />
          </div>
        </div>
        <PrimaryBtn btnName="Search Job" />
      </form>
    </div>
  );
}
