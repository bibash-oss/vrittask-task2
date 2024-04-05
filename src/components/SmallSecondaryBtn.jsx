import React from "react";

export default function SmallSecondaryBtn({ jobs }) {
  return (
    <button className="py-2 px-4 bg-primary-color-light text-primary-color border border-primary-color rounded-3xl">
      {`${jobs} jobs available`}
    </button>
  );
}
