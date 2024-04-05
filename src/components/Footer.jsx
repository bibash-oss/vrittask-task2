import React from "react";
import Logo2 from "../assets/images/logo2.png";
import FooterLinkColumn from "./FooterLinkColumn";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="bg-neutral-grey text-text-secondary pt-16 pb-12 mt-28 ">
        <div className="container">
          <div className="flex justify-between mb-16">
            <div className="basis-1/4">
              <div>
                <img src={Logo2} alt="" />
              </div>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci
                ipsum lectus pretium diam. Placerat ipsum volutpat commodo
                sodales.
              </p>
            </div>
            <div className="flex gap-20">
              <FooterLinkColumn
                linkTitle="Job Seekers"
                links={[
                  "Search Jobs",
                  "Explore JObs",
                  "Saved Jobs",
                  "Applied Jobs",
                ]}
              />
              <FooterLinkColumn
                linkTitle="Employers"
                links={[
                  "Register",
                  "Post Jobs",
                  "Applications",
                  "My Job Postings",
                ]}
              />
              <FooterLinkColumn
                linkTitle="Legal"
                links={[
                  "Register",
                  "Cookies Policy",
                  "Privacy Police",
                  "Terms of Services",
                ]}
              />
            </div>
          </div>
          <hr />
          <div className="flex justify-between mt-12">
            <p>Copyright © 2024 Pacific Hunt. All rights reserved.</p>
            <div className="flex gap-6 text-lg">
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
