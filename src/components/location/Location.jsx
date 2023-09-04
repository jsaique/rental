import { map } from "@/assets/img.js";
import Image from "next/image";
import Link from "next/link";

export default function Location({ address, phone, link }) {
  return (
    <section className="max-w-[1240px] mx-auto text-center mb-20" id="location">
      <p className="text-2xl font-bold pb-4">Location</p>
      <div className="flex justify-evenly flex-col gap-4 lg:flex-row p-4">
        <div>
          <Link href={link} target="0">
            <Image src={map} alt="/" layout="responsive" className="" />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Address: {address}</p>
          <p>Phone Number: {phone}</p>
        </div>
      </div>
    </section>
  );
}
