import React from "react";
import HeroImg from "../assets/images/HeroImg.png";
import { FaCheckCircle } from "react-icons/fa";
import Search from "./Search";
export default function Hero() {
  return (
    <section className="bg-background-primary relative">
      <div className="container flex justify-between items-center relative">
        <div className="w-2/4 pt-20 pb-32">
          <div>
            <p className="text-text-primary flex items-center gap-4 mb-4">
              <span className="text-primary-color">
                <FaCheckCircle />
              </span>
              Your Trusted Career Partner
            </p>
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              Unlock Your Dream{" "}
              <span className="text-primary-color">Career</span>
            </h1>
            <p className="text-lg">
              Our platform is dedicated to empowering individuals, connecting
              talent with the right opportunities, and fostering professional
              growth.
            </p>
          </div>
          <Search />
          <p className="mt-6">
            <span className="text-text-primary font-bold">
              Popular Searches:
            </span>{" "}
            Designer, Developer, Programmer, Architect.
          </p>
        </div>

        <div className="mt-14 absolute right-2 bottom-0">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
}
