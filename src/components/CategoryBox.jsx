import React from "react";
export default function CategoryBox({ title, position, icon }) {
  return (
    <div className="border border-outline rounded-md p-6 flex gap-4 items-center">
      <div className="h-16 w-16 bg-primary-color-light text-primary-color text-2xl flex justify-center items-center rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm">{`${position} Open postion`}</p>
      </div>
    </div>
  );
}
