import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Profile from "../assets/images/profile.jpeg";

export default function ReviewCard() {
  return (
    <div className="py-10 px-8 bg-white">
      <p className="text-neutral-grey-light font-extrabold text-4xl">
        <FaQuoteLeft />
      </p>
      <p className="mt-8 italic text-text-primary">
        This job portal has been instrumental in advancing my career. The
        interface is intuitive, making it easy to navigate through job listings
        and application processes. I've received numerous interview requests and
        job offers through this portal. I highly recommend it to anyone seeking
        new career opportunities.
      </p>
      <div className="flex gap-4 mt-10">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={Profile} alt="" />
        </div>
        <div>
          <p className="text-lg font-semibold">Amanda Bell</p>
          <p className="text-text-primary">Product Designer</p>
        </div>
      </div>
    </div>
  );
}
