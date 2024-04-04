import React from "react";

export default function PrimaryBtn({ btnName }) {
  return (
    <div className="bg-primary-color py-1 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-5 text-white flex items-center">
      {btnName}
    </div>
  );
}
