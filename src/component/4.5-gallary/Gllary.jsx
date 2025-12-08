import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

import { galleryImages } from "./glalari.js";
import { FaUikit } from "react-icons/fa";

export default function Gallaries() {
  return (
    <>
      <h2
        style={{
          color: "var(--title)",
        }}
      >
        <FaUikit /> UI Components
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={2}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
