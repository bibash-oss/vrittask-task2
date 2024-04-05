import React from "react";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-4">
      <div className="w-24 md:w-28 lg:w-48">
        <img src={Logo} alt="" className="w-full" />
      </div>
      <div className="flex gap-8">
        <ul className="gap-8 hidden lg:flex items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-primary-color" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/jobs"}
            className={({ isActive }) => (isActive ? "text-primary-color" : "")}
          >
            Jobs
          </NavLink>
          <NavLink
            to={"/companies"}
            className={({ isActive }) => (isActive ? "text-primary-color" : "")}
          >
            Companies
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "text-primary-color" : "")}
          >
            About us
          </NavLink>
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
