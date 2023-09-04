import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function GalleryData({ houseImg }) {
  return (
    <div className="relative">
      <Image
        className="w-full h-full"
        layout="responsive"
        src={houseImg}
        alt="house image"
      />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
}
