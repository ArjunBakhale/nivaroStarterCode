'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  // Add more links to your navbar here
  const links = [
    { name: 'Intro', path: '/' },
    { name: 'Example', path: '/examplePage' },
    // The name is what shows up on the navbar
    //The path is the path to the page you want to link to
    //the path is always the name of the folder of the page you want to link to
  ];

  return (
    <header className="z-[999] relative">
      <motion.div

      //Edit sm:w-[20rem] to change the width of the navbar :)
        className="fixed top-0 left-1/2 h-[4rem] sm:w-[10rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.path}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}