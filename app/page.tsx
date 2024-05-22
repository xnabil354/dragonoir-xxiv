"use client";

import { Carousel } from "@mantine/carousel";
import { MyCarousel } from "@/components/MyCarousel";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import Chat from "./Chat";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="bg-hero bg-center bg-cover w-screen h-screen flex flex-col space-y-4 lg:space-y-12 justify-center items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-rose-600 text-center font-sans md:font-serif">
            DRAGONOIR XXIV
          </h1>
          <Link
            className="bg-neutral-800 text-xs md:text-lg text-white py-2 px-3 md:px-6 rounded-lg md:rounded-xl flex justify-center items-center hover:scale-110 transition"
            href="#."
          >
            <FaArrowDown />
            <h1 className="ml-2 md:ml-3">See More</h1>
          </Link>
        </div>
      </div>
      <div className="px-4">
        <div className="max-w-6xl mx-auto my-20 flex flex-col gap-10" id=".">
          <Chat
            name="Faiz Hamdani, Ketua Panitia Angkatan"
            position="left"
            pfp="fais-hamdani"
          >
            Gak terasa ya, akhirnya kita nyampe juga di momen yang udah kita tunggu-tunggu, perpisahan kelas 12. Kayak baru kemarin kita masuk sekolah ini dengan penuh harapan, mimpi, dan tentunya rasa takut-takut excited gimana sih rasanya jadi anak SMA. Sekarang, kita udah di penghujung jalan, siap melangkah ke tahap hidup yang lebih seru lagi.
Selama tiga tahun ini, kita udah ngelewatin banyak banget hal bareng-bareng. Dari tugas numpuk, ujian yang bikin pusing, drama persahabatan, sampai momen-momen seru yang bikin ngakak bareng. Semua itu, baik susah atau seneng, udah jadi bagian dari perjalanan kita yang gak bakal terlupakan.
Kita juga gak bakal bisa sampe sini tanpa dukungan dari guru-guru kita yang sabar banget ngajarin kita, meski kadang kita suka bikin mereka pusing. Terima kasih buat semua ilmu, nasihat, dan semangat yang udah kalian kasih. Kalian adalah pahlawan tanpa tanda jasa yang sesungguhnya.
          </Chat>
          <Chat
            name="Dimas Prastyo, Panitia Angkatan"
            position="right"
            pfp="dimas-prasetyo"
          >
            Pertama-tama, gue mau ngucapin selamat datang dan terima kasih buat kalian semua yang udah hadir di acara perpisahan kita ini. Momen ini emang spesial banget, gak cuma karena kita bakal resmi lulus, tapi juga karena ini adalah saat kita ngumpul bareng untuk terakhir kalinya sebagai siswa SMAN 15 Jakarta.
Sebagai perwakilan panitia, gue pengen ngasih tau kalo persiapan acara ini bukan hal yang gampang. Banyak banget tantangan yang harus kita hadapin, dari nyusun konsep acara, nyari sponsor, sampe ngatur jadwal latihan. Tapi, semua usaha dan kerja keras ini rasanya terbayar lunas pas liat antusiasme dan senyum kalian di sini.
Gue juga pengen ngucapin terima kasih yang sebesar-besarnya buat semua pihak yang udah bantuin kita. Buat guru-guru yang selalu dukung dan kasih arahan, buat orang tua yang selalu support dari belakang layar, dan tentunya buat semua teman-teman panitia yang udah kerja keras tanpa kenal lelah. Tanpa kalian semua, acara ini gak mungkin bisa terlaksana sebaik ini.
          </Chat>
        </div>
        <div className="min-[500px]:max-w-sm md:max-w-3xl mx-auto">
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            OUR MOMENTS
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
      </div>
    </div>
  );
}
