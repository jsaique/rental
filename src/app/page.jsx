import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel />
    </main>
  );
}
