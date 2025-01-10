import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

export default function ImageSlider() {
  const slides = [
    {
      image: "./src/assets/images/Gta5_HomePage.png",
      title: "Grand Theft Auto VI",
      subtitle: "Trailer 1",
      buttonText: "WATCH NOW",
    },
    {
      image: "./src/assets/images/AgentsOfSabotage_HomePage.png",
      title: "Agents of Sabotage",
      subtitle: "Now on PC",
      buttonText: "WATCH NOW",
    },
    {
      image: "./src/assets/images/RDR_HomePage.png",
      title: "Red Dead Redemption",
      subtitle: "Now on PC",
      buttonText: "WATCH NOW",
    },
    {
      image: "./src/assets/images/GTAOnline_HomePage.png",
      title: "GTA Online",
      subtitle: "Play Now",
      buttonText: "WATCH NOW",
    },
  ];

  return (
    <div className="slider-container relative w-[100vw] h-full max-w-full overflow-hidden ">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-h-max "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="flex  md:flex-row items-center w-full">
              {/* Image Section */}
              <div className="min-w-max h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover h-[80vh]"
                />
              </div>
              <div className="bg-black  text-white md:w-1/4 p-10 flex-col items-center justify-between  border-2">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.subtitle}</p>
                <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
