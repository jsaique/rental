"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-slate-200">
      <div className="flex justify-between items-center px-10 py-7">
        <Link href="/">
          <h1 className="text-lg text-cyan-700 font-semibold">
            FL Keys Rental
          </h1>
        </Link>
        <nav>
          <ul className="hidden lg:flex gap-12 text-sm [&_a]:text-cyan-700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#location">Location</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile */}
        <div onClick={navHandler} className="block lg:hidden z-10">
          {/* If nav is true set to close false display the hamburger */}
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile drawer */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen [&_a]:text-cyan-700 text-center ease-in duration-300 bg-slate-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen [&_a]:text-cyan-700 text-center ease-in duration-300 bg-slate-300"
          }
        >
          <ul className="[&_a]:text-cyan-700 [&_a]:text-2xl [&_li]:p-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#location">Location</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
