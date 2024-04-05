import React from "react";
import Google from "../assets/images/google.png";
import Airbnb from "../assets/images/airbnb.png";
import Clickup from "../assets/images/clickup.png";
import Microsoft from "../assets/images/microsoft.png";
import Zoho from "../assets/images/zoho.png";
export default function CompanyLogo() {
  return (
    <section className="bg-background-primary py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-semibold">
          Join in globally <span className="text-primary-color">renowned</span>{" "}
          companies
        </h2>
        <div className="grid grid-cols-5  gap-16 items-center mt-14">
          <img src={Google} alt="" />
          <img src={Zoho} alt="" />
          <img src={Airbnb} alt="" />
          <img src={Microsoft} alt="" />
          <img src={Clickup} alt="" />
        </div>
      </div>
    </section>
  );
}
