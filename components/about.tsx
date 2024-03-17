"use client";

import React from "react";


export default function About() {
    return (
        <section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="aboutPage"
        >
            <h2>About me</h2>
            <p className="mb-3">
                <span className="font-bold">Hi, I'm Arjun Bakhale,</span> a <span className="font-bold">programmer</span> based in Ashburn, VA. I specialize in <span className="font-bold">Python, React Native, Computer Vision, Java, and Next.js</span>. Currently, I'm the <span className="font-bold">CIO of Nivaro</span>, managing tech and coding with React.js and Next.js. I'm seeking a <span className="font-bold">summer internship</span>.
            </p>

            <p>
                Outside of coding, I'm a <span className="font-bold">singer</span> and <span className="font-bold">reader</span>. I've performed at Carnegie Hall and won state and national competitions.
            </p>
        </section>
    );
}