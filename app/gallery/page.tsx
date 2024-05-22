"use client";

import { Carousel } from "@mantine/carousel";
import { MyCarousel } from "@/components/MyCarousel";
import React from "react";

export default function Gallery() {
  return (
    <div className="mt-40 px-3">
      <h1 className="z-10 text-7xl font-clash-display text-center mb-20">
        Our Moments
      </h1>
      <div className="flex flex-col space-y-20">
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            DRAGONOIR XXIV GATHERING
          </h1>
          <div className="bg-neutral-200/75 border-white border-2 border-opacity-30 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="video"
                src="/assets/videos/gallery/dragonoir-gathering/1/video.mp4"
              />
              <MyCarousel
                variant="video"
                src="/assets/videos/gallery/dragonoir-gathering/1/video_1.mp4"
              />
              <MyCarousel
                variant="video"
                src="/assets/videos/gallery/dragonoir-gathering/1/video_2.mp4"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            Foto Bareng Guru
          </h1>

          <div className="bg-neutral-200/75 border-white border-2 border-opacity-30 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-guru/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-guru/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-guru/3.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-guru/4.jpg"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            Foto Bareng Angkatan
          </h1>

          <div className="bg-neutral-200/75 border-white border-2 border-opacity-30 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/1.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/2.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/3.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/4.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/5.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/6.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/7.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/8.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/9.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/10.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/11.JPG"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/fotbar-angkatan/12.JPG"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            Black & White
          </h1>
          <div className="bg-neutral-200/75 border-white border-2 border-opacity-30 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/black-white/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/black-white/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/black-white/3.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/black-white/4.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/black-white/5.jpg"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            Random Kegiatan
          </h1>

          <div className="bg-neutral-200/75 border-white border-2 border-opacity-30 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/3.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/4.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/5.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/6.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/7.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/8.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/9.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/random-kegiatan/10.jpg"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
