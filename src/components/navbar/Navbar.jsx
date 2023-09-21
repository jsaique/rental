"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("slate-200");

  const navHandler = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#e2e8f0");
        setTextColor("#0e7490");
      } else {
        setColor("transparent");
        setTextColor("#e2e8f0");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300"
    >
      <div className="flex justify-between items-center max-w-[1240px] m-auto p-4 text-slate-200">
        <Link href="/">
          {/* text-cyan-700 */}
          <h1 style={{ color: `${textColor}` }} className="text-2xl font-bold">
            KLVR
          </h1>
        </Link>
        <nav>
          {/* [&_a]:text-cyan-700 */}
          <ul
            style={{ color: `${textColor}` }}
            className="hidden lg:flex gap-12 text-sm "
          >
            <li>
              <Link href="/#home">Home</Link>
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
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#0e7490" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
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
            <li onClick={navHandler}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={navHandler}>
              <Link href="/#location">Location</Link>
            </li>
            <li onClick={navHandler}>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={navHandler}>
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
