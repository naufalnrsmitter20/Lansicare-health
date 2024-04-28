"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import hospitals from "@/public/rumahsakits.jpeg";
import lansia from "@/public/lansia.jpg";
import checkUp from "@/public/pexels-pixabay-40568.jpg";
import { useSession } from "next-auth/react";
import { Button } from "flowbite-react";
import RightArrow from "./svg/RightArrow";
import Prev from "./svg/Prev";
import Next from "./svg/Next";
import { CarouselButton } from "./buttons/Button";

export default function Carousel() {
  const { data: session } = useSession();
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <div className="relative mx-[15px] rounded-[10px] pt-[100px] lg:mx-[35px] lg:pt-[130px]">
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <div className="relative max-h-[250px] w-full overflow-hidden rounded-[10px] shadow-md after:clear-both after:block after:content-[''] lg:max-h-[450px]">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <main
              id="carousel1"
              className="flex h-auto w-full bg-darkBlue2/80 bg-center bg-no-repeat"
            >
              <Image
                src={hospitals}
                className="absolute -z-20 w-screen bg-cover"
                alt="background Image"
              />
              <div className="max-w-sm px-4 py-5 text-start lg:max-w-screen-xl lg:py-[72px]">
                <h1 className="my-3 ml-10 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:my-5 lg:ml-48 lg:text-6xl">
                  Welcome to LansiCare
                </h1>
                <p className="mb-2 text-ellipsis pl-10 text-[12px] font-normal text-gray-300 lg:mb-7 lg:px-48 lg:text-lg">
                  Selamat datang {session ? `${session.user?.name}` : "Guest"}!
                  Website ini dirancang khusus untuk membantu Anda dalam
                  melakukan registrasi check-up kesehatan
                  <span className="hidden md:inline">
                    , selain itu website ini juga bisa membantu Anda melihat
                    riwayat check-up kesehatan. Kami berkomitmen untuk
                    menyediakan layanan yang dapat meningkatkan kesehatan dan
                    kesejahteraan lansia. Jangan ragu untuk mulai registrasi dan
                    jadwalkan check-up Anda sekarang!
                  </span>
                </p>
                <div className="mb-10 ml-10 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 lg:ml-48">
                  <CarouselButton type="button" href="/checkup">
                    Daftar Check Up
                    <RightArrow />
                  </CarouselButton>
                </div>
              </div>
              <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-20"></div>
            </main>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <main
              id="carousel2"
              className="z-50 w-full bg-darkBlue2/80 bg-center bg-no-repeat "
            >
              <Image
                src={lansia}
                className="absolute -z-20 w-screen bg-top"
                alt="background Image"
              />
              <div className=" max-w-sm px-4 py-5 text-end lg:max-w-screen-xl lg:py-20">
                <h1 className="my-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:mr-5 lg:text-6xl">
                  LansiCare{" "}
                </h1>
                <p className="mb-5 ml-8 text-end text-[12px] font-normal text-gray-300 lg:ml-48 lg:mr-5 lg:text-lg">
                  Website ini membantu Anda dalam melakukan registrasi check-up
                  secara online. Anda bisa melakukan registrasi check-up dengan
                  memilih dokter yang sesuai.
                  <span className="hidden lg:inline">
                    Selanjutnya akan keluar nomor antrean dan waktu untuk
                    pemeriksaan. Selain itu, website ini juga membantu Anda
                    untuk mengecek riwayat pemeriksaan Anda. Anda tidak perlu
                    lagi mengantre dengan kurun waktu yang lama di klinik karena
                    bisa mengantre secara online. Tunggu apa lagi? Jadwalkan
                    check-up kesehatan Anda sekarang juga!
                  </span>
                </p>
                <div className="mb-10 ml-10 flex flex-row justify-end space-y-0 lg:mr-10 lg:space-y-4">
                  <CarouselButton type="button" href="/about">
                    Explore more
                    <RightArrow />
                  </CarouselButton>
                </div>
              </div>
            </main>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <main
              id="carousel3"
              className="z-50 w-full bg-darkBlue2/80 bg-center bg-no-repeat bg-blend-multiply "
            >
              <Image
                src={checkUp}
                className="absolute -z-20 w-screen bg-top bg-blend-multiply"
                alt="background Image"
              />
              <div className="mx-auto max-w-screen-xl px-4 py-1 text-center lg:py-[85px]">
                <h1 className="my-[80px] text-3xl font-extrabold leading-none tracking-tight text-slate-200 md:text-4xl lg:text-6xl">
                  Ayo jadwalkan check-up kesehatan Anda sekarang juga!
                </h1>

                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
              </div>
            </main>
          </div>
        </div>

        <Prev />
        <Next />
      </div>
    </div>
  );
}
