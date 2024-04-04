import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import JobOpenings from "../components/JobOpenings";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <JobOpenings />
    </>
  );
}
