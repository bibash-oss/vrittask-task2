import React from "react";
import SectionHeader from "./SectionHeader";
import { FaArrowRight } from "react-icons/fa";
import JobCard from "./JobCard";
import { CiBookmark } from "react-icons/ci";

export default function JobOpenings() {
  return (
    <section className="container mb-16">
      <SectionHeader title={"Top Job Openings"} icon={<FaArrowRight />} />
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        <JobCard>
          <div className="mt-6 flex gap-3">
            <p>Remote</p>
            <p>Entry Level</p>
            <p>Full Time</p>
          </div>
          <p>Salary:50k-80k AUD</p>
          <hr className="border border-1 mt-8" />
          <div className="flex justify-between mt-5">
            <p className="font-medium">Tesla Inc.</p>
            <CiBookmark className="text-xl" />
          </div>
        </JobCard>
        <JobCard>
          <div className="mt-6 flex gap-3">
            <p>Remote</p>
            <p>Entry Level</p>
            <p>Full Time</p>
          </div>
          <p>Salary:50k-80k AUD</p>
          <hr className="border border-1 mt-8" />
          <div className="flex justify-between mt-5">
            <p className="font-medium">Tesla Inc.</p>
            <CiBookmark className="text-xl" />
          </div>
        </JobCard>
        <JobCard>
          <div className="mt-6 flex gap-3">
            <p>Remote</p>
            <p>Entry Level</p>
            <p>Full Time</p>
          </div>
          <p>Salary:50k-80k AUD</p>
          <hr className="border border-1 mt-8" />
          <div className="flex justify-between mt-5">
            <p className="font-medium">Tesla Inc.</p>
            <CiBookmark className="text-xl" />
          </div>
        </JobCard>
        <JobCard>
          <div className="mt-6 flex gap-3">
            <p>Remote</p>
            <p>Entry Level</p>
            <p>Full Time</p>
          </div>
          <p>Salary:50k-80k AUD</p>
          <hr className="border border-1 mt-8" />
          <div className="flex justify-between mt-5">
            <p className="font-medium">Tesla Inc.</p>
            <CiBookmark className="text-xl" />
          </div>
        </JobCard>
        <JobCard>
          <div className="mt-6 flex gap-3">
            <p>Remote</p>
            <p>Entry Level</p>
            <p>Full Time</p>
          </div>
          <p>Salary:50k-80k AUD</p>
          <hr className="border border-1 mt-8" />
          <div className="flex justify-between mt-5">
            <p className="font-medium">Tesla Inc.</p>
            <CiBookmark className="text-xl" />
          </div>
        </JobCard>
        <JobCard>
          <div className="mt-6 flex gap-3">
            <p>Remote</p>
            <p>Entry Level</p>
            <p>Full Time</p>
          </div>
          <p>Salary:50k-80k AUD</p>
          <hr className="border border-1 mt-8" />
          <div className="flex justify-between mt-5">
            <p className="font-medium">Tesla Inc.</p>
            <CiBookmark className="text-xl" />
          </div>
        </JobCard>
      </div>
    </section>
  );
}
