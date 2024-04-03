"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import hospitals from "@/public/rumahsakits.jpeg";
import lansia from "@/public/lansia.jpg";
import checkUp from "@/public/pexels-pixabay-40568.jpg";
interface BackgroundImageProps {
  imageURL: string;
}
export default function Carousel({ imageURL }: any) {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <div className="relative mx-auto w-[450px] rounded-[10px] pt-[130px] lg:w-[1366.48px]">
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex h-10 list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="relative w-full overflow-hidden rounded-[10px] shadow-md after:clear-both after:block after:content-['']">
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
                className="absolute -z-20 w-screen bg-center bg-no-repeat"
                alt="background Image"
              />
              <div className="max-w-sm px-4 py-5 text-start lg:max-w-screen-xl lg:py-[58px]">
                <h1 className="my-5 ml-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:ml-48 lg:text-6xl">
                  Welcome User{" "}
                </h1>
                <p className="mb-4 text-ellipsis px-10 text-[8.25px] font-normal text-gray-300 lg:mb-8 lg:px-48 lg:text-lg">
                  Selamat datang, user! Website ini dirancang khusus untuk
                  membantu Anda dalam melakukan registrasi check-up kesehatan,
                  selain itu website ini juga bisa membantu Anda melihat riwayat
                  check-up kesehatan. Dapatkan akses informasi kesehatan Anda
                  dengan mudah dan cepat. Kami berkomitmen untuk menyediakan
                  layanan yang dapat meningkatkan kesehatan dan kesejahteraan
                  lansia.
                  <span className=" hidden md:inline">
                    Jangan ragu untuk mulai registrasi dan jadwalkan check-up
                    Anda sekarang!
                  </span>
                </p>
                <div className="mb-10 ml-10 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 lg:ml-48">
                  <Link
                    href={"checkup"}
                    className=" inline-flex w-40 items-center justify-center rounded-lg bg-darkBlue px-4 py-2 text-center text-xs font-medium text-white hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 md:text-sm lg:w-auto lg:px-5 lg:py-3 lg:text-base"
                  >
                    Daftar Check Up
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
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
                className="absolute -z-20 w-screen bg-center bg-no-repeat object-right-top"
                alt="background Image"
              />
              <div className=" max-w-sm px-4 py-5 text-end lg:max-w-screen-xl lg:py-20">
                <h1 className="my-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:mr-10 lg:text-6xl">
                  LansiCare{" "}
                </h1>
                <p className="mb-4 ml-8 text-end text-[8.25px] font-normal text-gray-300 lg:ml-24 lg:mr-10 lg:text-lg">
                  Website ini membantu Anda dalam melakukan registrasi check-up
                  secara online. Anda bisa melakukan registrasi check-up dengan
                  memilih dokter yang sesuai. Selanjutnya akan keluar nomor
                  antrean dan waktu untuk pemeriksaan. Selain itu, website ini
                  juga membantu Anda untuk mengecek riwayat pemeriksaan Anda.
                  Anda tidak perlu lagi mengantre dengan kurun waktu yang lama
                  di klinik karena bisa mengantre secara online.
                  <span className="hidden lg:inline">
                    Tunggu apa lagi? Jadwalkan check-up kesehatan Anda sekarang
                    juga!
                  </span>
                </p>
                <div className="mb-10 ml-10 flex flex-row justify-end  space-y-0 lg:mr-10 lg:space-y-4">
                  <Link
                    href={"about"}
                    className="inline-flex w-40 items-center justify-center rounded-lg bg-darkBlue px-4 py-2 text-center text-xs font-medium text-primary-50 hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 lg:w-auto lg:px-5 lg:py-3 lg:text-sm"
                  >
                    Explore more
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-[188px]"></div> */}
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
                className="absolute -z-20 w-screen bg-center bg-no-repeat bg-blend-multiply"
                alt="background Image"
              />
              <div
                className="mx-auto max-w-screen-xl px-4 py-1 text-center lg:py-20"
                // style={{ backgroundImage: `url('${imageURL}')` }}
              >
                <h1 className="my-[98px] py-3 text-2xl font-extrabold leading-none tracking-tight text-slate-200  md:text-4xl lg:py-0 lg:text-6xl">
                  Ayo jadwalkan check-up kesehatan Anda sekarang juga!
                </h1>

                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  {/* <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-darkBlue px-5 py-3 text-center text-base font-medium text-white hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  >
                    Explore more
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </main>
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
