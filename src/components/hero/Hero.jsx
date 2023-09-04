"use client";

import Link from "next/link";

export default function Hero({ heading, message }) {
  return (
    <section className="flex items-center justify-center h-screen mb-20 bg-fixed bg-center bg-cover hero-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="p-5 text-slate-200 z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <Link className="px-8 py-2 border" href="/#contact">
          Book Now
        </Link>
      </div>
    </section>
  );
}
