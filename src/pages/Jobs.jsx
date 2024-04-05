import React from "react";
import Search from "../components/Search";
import JobOpenings from "../components/JobOpenings";
import JobCard from "../components/JobCard";
import { CiBookmark } from "react-icons/ci";

export default function () {
  return (
    <>
      <section className="bg-background-primary py-9">
        <h2 className="container text-2xl">
          Find your dream <span className="text-primary-color">job</span>
        </h2>
      </section>
      <section className="container">
        <Search />
      </section>
      <section className="container my-8 grid grid-cols-5 gap-7">
        <select name="" id="" className="py-4 px-3 border">
          <option value="">Job Type</option>
        </select>
        <select name="" id="" className="py-4 px-3 border">
          <option value="">Salary Range</option>
        </select>
        <select name="" id="" className="py-4 px-3 border">
          <option value="">Category</option>
        </select>
        <select name="" id="" className="py-4 px-3 border">
          <option value="">Experience Level</option>
        </select>
        <select name="" id="" className="py-4 px-3 border">
          <option value="">Work Location</option>
        </select>
      </section>
      <div className="container">
        <hr />
      </div>
      <div className="my-8 container flex justify-between  items-center">
        <div>
          <p className="text-text-secondary">Showing results for</p>
          <p className="font-medium">All available jobs(112)</p>
        </div>
        <div className="border p-3 flex gap-10">
          <p>Sort By:</p>
          <select name="" id="">
            <option value="">Most Relevant</option>
          </select>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <section className="container grid grid-cols-3 gap-x-8 gap-y-6 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
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
        ))}
      </section>
    </>
  );
}
