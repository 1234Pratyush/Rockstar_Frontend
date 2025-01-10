import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <>
      <div className="slider-container relative w-[100vw] h-full max-w-full overflow-hidden">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false,
          }}
          loop={true} 
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full max-h-max"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div className="flex md:flex-row items-center w-full">
                <div className="min-w-max h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover h-[80vh]"
                  />
                </div>
                <div className="bg-black text-white md:w-1/4 p-10 grid gap-7 items-center justify-between">
                  <h2 className="text-5xl font-bold">{slide.title}</h2>
                  <p className="text-xl">{slide.subtitle}</p>
                  <button className="border border-white px-1 py-3 rounded hover:bg-yellow-500 hover:text-black transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination min-w-full flex justify-center relative mt-2 "></div>
        </Swiper>
      </div>
    </>
  );
}
