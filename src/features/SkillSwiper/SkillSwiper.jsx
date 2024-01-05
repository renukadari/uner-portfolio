import React from "react";
import "./SkillSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import HTML from "../../assets/Images/Png/html.png";
import CSS from "../../assets/Images/Png/css-logo.png";
import JS from "../../assets/Images/Png/JavaScript.png";
import BOOTSTRAP from "../../assets/Images/Png/bootstrap.png";
import REACTJS from "../../assets/Images/Png/react-logo-1.png";
import REACTBOOTSTRAP from "../../assets/Images/Png/react-bootstrap.png";
import REDUX from "../../assets/Images/Png/Redux.png";
import GIT from "../../assets/Images/Png/git.png";
import GITHUB from "../../assets/Images/Png/github.png";
import NETLIFY from "../../assets/Images/Png/netlify-logo.png";
import FIGMA from "../../assets/Images/Png/figma.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const SkillSwiper = () => {
  return (
    <div className="container skill-swiper-div">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={HTML} alt="" className="skill-swiper-logo" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={CSS} alt="" className="skill-swiper-logo" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={JS} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BOOTSTRAP} alt="" className="skill-swiper-logo" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={REACTJS} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={REACTBOOTSTRAP} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={REDUX} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GIT} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GITHUB} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NETLIFY} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FIGMA} alt="" className="skill-swiper-logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillSwiper;
