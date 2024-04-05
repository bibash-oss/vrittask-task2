import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import ReviewCard from "./ReviewCard";

export default function CustomerReview() {
  return (
    <section className="py-16 bg-background-primary mt-24">
      <div className="container">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-semibold">
            What Our Client Say about{" "}
            <span className="text-primary-color">Pacific Hunt</span>
          </h2>
          <div className="flex items-center text-2xl gap-4">
            <div className="text-3xl border-2 border-text-primary rounded-full">
              <IoIosArrowRoundBack />
            </div>
            <p>2/14</p>
            <div className="text-3xl border-2 border-text-primary rounded-full">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
        <div className="mt-14 flex gap-8 ">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}
