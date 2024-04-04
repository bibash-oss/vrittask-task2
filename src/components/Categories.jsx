import React from "react";
import SectionHeader from "./SectionHeader";
import CategoryBox from "./CategoryBox";
import { FaPenNib } from "react-icons/fa";
import {
  IoCodeSlash,
  IoBagAddOutline,
  IoMegaphoneOutline,
} from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { BsBarChartLineFill } from "react-icons/bs";

export default function Categories() {
  return (
    <section className="container my-24">
      <SectionHeader title="Popular Categories" />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        <CategoryBox
          icon={<FaPenNib />}
          title={"Graphics & Design"}
          position={410}
        />
        <CategoryBox
          icon={<IoCodeSlash />}
          title={"Coding & Programing"}
          position={240}
        />
        <CategoryBox
          icon={<FiDatabase />}
          title={"Data Science"}
          position={120}
        />
        <CategoryBox
          icon={<IoBagAddOutline />}
          title={"Health Care"}
          position={96}
        />
        <CategoryBox
          icon={<IoMegaphoneOutline />}
          title={"Digital Marketing"}
          position={60}
        />
        <CategoryBox
          icon={<BsBarChartLineFill />}
          title={"Account & Finance"}
          position={185}
        />
      </div>
    </section>
  );
}
