import React from "react";
import SectionHeader from "./SectionHeader";
import JobCard from "./JobCard";

export default function TopCompanies() {
  return (
    <section className="container mt-24">
      <SectionHeader title={"Top Companies"} />
      <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8">
        <JobCard btn="small">
          <div className="mt-6 flex gap-3">
            <p className="border bottom-0 py-1 px-4 rounded-3xl">
              Jop Openings
            </p>
            <p className="border bottom-0 py-1 px-4 rounded-3xl">Fin Tech</p>
          </div>
        </JobCard>
        <JobCard btn="small">
          <div className="mt-6 flex gap-3">
            <p className="border bottom-0 py-1 px-4 rounded-3xl">
              Jop Openings
            </p>
            <p className="border bottom-0 py-1 px-4 rounded-3xl">Fin Tech</p>
          </div>
        </JobCard>
        <JobCard btn="small">
          <div className="mt-6 flex gap-3">
            <p className="border bottom-0 py-1 px-4 rounded-3xl">
              Jop Openings
            </p>
            <p className="border bottom-0 py-1 px-4 rounded-3xl">Fin Tech</p>
          </div>
        </JobCard>
        <JobCard btn="small">
          <div className="mt-6 flex gap-3">
            <p className="border bottom-0 py-1 px-4 rounded-3xl">
              Jop Openings
            </p>
            <p className="border bottom-0 py-1 px-4 rounded-3xl">Fin Tech</p>
          </div>
        </JobCard>
        <JobCard btn="small">
          <div className="mt-6 flex gap-3">
            <p className="border bottom-0 py-1 px-4 rounded-3xl">
              Jop Openings
            </p>
            <p className="border bottom-0 py-1 px-4 rounded-3xl">Fin Tech</p>
          </div>
        </JobCard>
        <JobCard btn="small">
          <div className="mt-6 flex gap-3">
            <p className="border bottom-0 py-1 px-4 rounded-3xl">
              Jop Openings
            </p>
            <p className="border bottom-0 py-1 px-4 rounded-3xl">Fin Tech</p>
          </div>
        </JobCard>
      </div>
    </section>
  );
}
