import React from "react";

export default function SecondaryBtn({ btnName, icon }) {
  return (
    <button className="border border-primary-color py-1 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-5 text-primary-color flex items-center gap-4">
      {btnName}
      {icon && <span>{icon}</span>}
    </button>
  );
}
