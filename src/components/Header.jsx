import React from "react";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-4">
      <div className="w-24 md:w-28 lg:w-48">
        <img src={Logo} alt="" className="w-full" />
      </div>
      <div className="flex gap-8">
        <ul className="gap-8 hidden lg:flex items-center">
          <li>Home</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>About us</li>
        </ul>
        <div className="flex gap-4">
          <PrimaryBtn btnName="Sign up" />
          <SecondaryBtn btnName="Post a Job" />
          <div className="flex items-center lg:hidden">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
