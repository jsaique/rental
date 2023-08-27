"use client";

import { CarouselData } from "./CarouselData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// export default function Carousel({ slides }) {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className="max-w-[1240px] mx-auto" id="/">
//       <div className="relative flex justify-center p-4">
//         <div>
//           {CarouselData.map((slide, index) => {
//             return (
//               <div
//                 key={index}
//                 className={
//                   index === current
// ? "opacity-[1] ease-in duration-1000"
//                     : "opacity-0"
//                 }
//               >
//                 <FaArrowCircleLeft
//                   onClick={prevSlide}
//                   className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
//                   size={50}
//                 />
//                 {index === current && (
//                   <Image
//                     src={slide.image}
//                     alt="/"
//                     width="1440"
//                     height="600"
//                     objectFit="cover"
//                   />
//                 )}
//                 <FaArrowCircleRight
//                   onClick={nextSlide}
//                   className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
//                   size={50}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const autoSlideInterval = 5000; // Interval in milliseconds for auto-slide

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Function to handle auto-slide
  const autoSlide = () => {
    nextSlide();
  };

  // Set up the auto-slide interval when the component mounts
  useEffect(() => {
    const slideInterval = setInterval(autoSlide, autoSlideInterval);
    return () => {
      clearInterval(slideInterval); // Clear the interval when the component unmounts
    };
  }, [current]); // Re-run the effect whenever the 'current' state changes

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="max-w-[1240px] mx-auto" id="/">
      <div className="relative flex justify-center p-4">
        <div>
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
              >
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt="/"
                    width="1440"
                    height="600"
                    objectFit="cover"
                  />
                )}
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
