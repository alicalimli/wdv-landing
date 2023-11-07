"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";

interface SwipePreviewsProps {}

const SwipePreviews = ({}: SwipePreviewsProps) => {
  return (
    <div className="w-[40%] max-w-2xl">
      <Swiper
        effect={"cards"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="relative w-full aspect-square">
            <video preload="" loop muted autoPlay>
              <source src="/responsive-grid.mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="relative w-full aspect-square">
            <video preload="" loop muted autoPlay>
              <source src="/object-dynamically.mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="relative w-full aspect-square">
            <video preload="" loop muted autoPlay>
              <source src="/fluid-type.mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="relative w-full aspect-square">
            <Image
              src="/html-accept.png"
              fill
              className="object-contain"
              alt="visual demonstrating flex and flex wrap property in CSS"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="relative w-full aspect-square">
            <Image
              src="/is-selector.png"
              fill
              className="object-contain"
              alt="visual demonstrating flex and flex wrap property in CSS"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="relative w-full aspect-square">
            <Image
              src="/object-destructuring.png"
              fill
              className="object-contain"
              alt="visual demonstrating flex and flex wrap property in CSS"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipePreviews;
