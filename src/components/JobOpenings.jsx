import React from "react";
import SectionHeader from "./SectionHeader";
import { FaArrowRight } from "react-icons/fa";
import JobCard from "./JobCard";

export default function JobOpenings() {
  return (
    <section className="container mb-16">
      <SectionHeader title={"Top Job Openings"} icon={<FaArrowRight />} />
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
}
