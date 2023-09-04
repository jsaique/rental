import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";
import { CarouselData } from "@/components/carousel/CarouselData";
import Gallery from "@/components/gallery/Gallery";
import Location from "@/components/location/Location";
import Hero from "@/components/hero/Hero";
import ContactForm from "@/components/contact/contactForm";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Key Largo Vacation Rental"
        message="Vacation! All I ever wanted."
      />
      <Location
        address="Lorem Ipsum lorem ipsum 12345"
        phone="(000) 000-000"
        link="https://www.google.com/maps/place/27+Mutiny+Pl,+Key+Largo,+FL+33037/@25.087082,-80.4548212,15.36z/data=!4m6!3m5!1s0x88d7420bc56963e7:0xf9a4e7b178ed6d50!8m2!3d25.0893161!4d-80.4584439!16s%2Fg%2F11c1j045wp?entry=ttu"
      />
      <Carousel slides={CarouselData} />
      {/* <Gallery /> */}
      <ContactForm />
    </main>
  );
}
