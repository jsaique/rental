"use client";

import { house1, house2, house3, house4, house5, house6 } from "@/assets/img";
import GalleryData from "./GalleryData";

export default function Gallery() {
  return (
    <section className="max-w-[1240px] mx-auto text-center py-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <GalleryData houseImg={house1} />
        <GalleryData houseImg={house2} />
        <GalleryData houseImg={house3} />
        <GalleryData houseImg={house4} />
        <GalleryData houseImg={house5} />
        <GalleryData houseImg={house6} />
      </div>
    </section>
  );
}
