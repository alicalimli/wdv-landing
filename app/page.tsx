"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden px-vw-28 mx-auto flex flex-col p-8">
      <nav className="flex items-center">
        <Image
          src="/wdv-logo.png"
          width={200}
          height={200}
          alt="Website Logo"
        />

        <button className="rounded-full p-3 px-8 bg-[#2563EB] hover:bg-[#2563EB]/80 duration-300 ml-auto">
          Join Waitlist
        </button>
      </nav>

      <div className="flex-1 flex flex-col xl:flex-row gap-8 items-center">
        <div className="mt-24 xl:mt-0 xl:pr-[600px] 2xl:pr-[800px]">
          <h1 className="text-6xl font-bold">
            Visuals to level up your frontend skills
          </h1>
          <p className="opacity-80 text-lg max-w-2xl mt-4">
            Browse 50+ visuals that would take your web dev skills to the next
            level
          </p>

          <div className="flex flex-col gap-2 w-full max-w-2xl mt-2">
            <iframe
              src="https://embeds.beehiiv.com/990fd037-3107-4dfb-af18-beb09d4805c3?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              // @ts-ignore
              frameborder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
            ></iframe>

            <p className="opacity-50 text-sm text-start">
              You will get early access and get a special deal once its ready.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[500px] 2xl:w-[700px] xl:absolute xl:right-36">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="relative w-full aspect-square">
                <Image
                  src="/flex-visual.png"
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
                  src="/flex-visual.png"
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
                  src="/flex-visual.png"
                  fill
                  className="object-contain"
                  alt="visual demonstrating flex and flex wrap property in CSS"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div className="relative w-full aspect-square ">
          <Image
            src="/flex-visual.png"
            fill
            className="object-contain"
            alt="visual demonstrating flex and flex wrap property in CSS"
          />
        </div> */}
      </div>
    </main>
  );
}
