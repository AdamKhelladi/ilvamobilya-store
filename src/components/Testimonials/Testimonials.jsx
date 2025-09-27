import "./Testimonials.css";
import Image1 from "../../assets/testimonials/img-6.jpg";
import Image2 from "../../assets/testimonials/img-2.jpg";
import Image3 from "../../assets/testimonials/img-3.jpg";
import Image4 from "../../assets/testimonials/img-4.jpg";
import Image5 from "../../assets/testimonials/img-5.jpg";
import Image6 from "../../assets/testimonials/img-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials-title">
        <h1>Client Satisfaction</h1>
        <p className="first-p">What our customers say about us</p>
        <p className="second-p">
          We take pride in delivering high-quality products and services that
          bring comfort and style to our clients. Every piece is carefully
          designed with attention to detail.
        </p>
        <p className="second-p">
          The kind words from our customers inspire us to keep improving and
          providing an exceptional experience for everyone we serve.
        </p>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={Image1} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Testimonials image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="Testimonials image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
