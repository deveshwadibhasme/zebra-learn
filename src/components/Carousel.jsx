import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Carousel = ({ slides }) => {
  return (
    <motion.div
      initial={{ y: 30 , opacity:0.2}}
      animate={{ y: 0 , opacity:1}}
      transition= {{duration:1}}
      className="w-full max-w-6xl mx-auto p-4 min-h-50 flex-center rounded-lg"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        {slides.length > 0 &&
          slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full rounded-lg"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.div>
  );
};

export default Carousel;
