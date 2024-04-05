import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import CtaImg from "../assets/images/cta.png";

export default function Cta() {
  return (
    <section className="container bg-background-secondary mt-40 rounded-lg py-20 relative">
      <div className="text-white px-14 w-1/2">
        <h2 className="text-2xl font-semibold">
          Join <span className="text-primary-color">Pacific Hunt</span> today.
          Connect, Grow, Succeed.
        </h2>
        <p className="mt-8 text-outline">
          Whether you're seeking your next career move or searching for top
          talent, our platform offers the perfect avenue to connect and thrive.
        </p>
        <div className="flex gap-6 mt-12">
          <PrimaryBtn btnName={"Join as jobseeker"} />
          <SecondaryBtn btnName={"Join as employer"} />
        </div>
      </div>
      <div className="absolute bottom-0 w-1/2 right-20">
        <img src={CtaImg} alt="" />
      </div>
    </section>
  );
}
