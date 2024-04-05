import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import JobOpenings from "../components/JobOpenings";
import CompanyLogo from "../components/CompanyLogo";
import TopCompanies from "../components/TopCompanies";
import CustomerReview from "../components/CustomerReview";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <JobOpenings />
      <CompanyLogo />
      <TopCompanies />
      <CustomerReview />
      <Cta />
    </>
  );
}
