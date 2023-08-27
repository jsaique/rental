import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";
import { CarouselData } from "@/components/carousel/CarouselData";

export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main>
      <Carousel slides={CarouselData} />
    </main>
  );
}
