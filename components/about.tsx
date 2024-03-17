"use client";

import React from "react";


export default function About() {
    return (
        <section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="aboutPage"
        >
            <h2>About me</h2> <br />
            <p className="mb-3">
                <span className="font-bold">Welcome to Nivaro,</span> a platform based in Ashburn, VA. We specialize in <span className="font-bold">educating students about AI</span>. Currently, we are <span className="font-bold">leading the way in AI education</span>, teaching with practical examples and real-world applications. We are always <span className="font-bold">open for enrollment</span>.
            </p>

            <p>
                Outside of teaching AI, we are <span className="font-bold">passionate about technology</span> and <span className="font-bold">innovation</span>. We've been recognized at state and national levels for our contribution to AI education.
            </p>
        </section>
    );
}