"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

// import { useSectionInView } from "@/lib/hooks";


export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src="/nivarotechnologies_logo.jpg"
              alt="Nivaro"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
        </div>
      </div>

      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Welcome to Nivaro,</span> a{" "}
        <span className="font-bold">Tech Company </span> teaching{" "}
        <span className="font-bold">AI</span>
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="/pages/aboutPage"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        
        >
          Visit Our Website{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}