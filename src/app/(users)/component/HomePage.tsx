"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import TrackingKesehatan from "@/public/monitoring-kesehatan.jpeg";
import ResepObat from "@/public/obat.jpg";
import CheckUp from "@/public/checkup.jpeg";
import Regist from "@/public/registrasi.jpg";
import Forms from "./Forms";
import Link from "next/link";
import Footer from "./Footer";

export default function Homepage() {
  const features = [
    {
      link: "/profile",
      title: "Track Kesehatan",
      src: TrackingKesehatan,
      alt: "Tracking Kesehatan",
      description: " Lacak Kesehatanmu Disini",
    },
    {
      link: "/profile",
      title: "Resep Obat",
      src: ResepObat,
      alt: "Resep Obat",
      width: 700,
      description: "Lihat Resep Obatmu Disini",
    },
    {
      link: "/signup",
      title: "Registrasi Cepat",
      src: Regist,
      alt: "Registrasi Cepat",
      description: "Sekarang registrasi kesehatan tidak perlu ribet",
    },
    {
      link: "/checkup",
      title: "Check Up Kesehatan",
      src: CheckUp,
      alt: "Check Up Kesehatan",
      description:
        "Cek kesehatanmu dengan sekali tap di klinik/rumah sakit terdekat",
    },
  ];
  return (
    <>
      <section className="scroll-smooths text-base-100">
        <div className="mt-[30px] flex h-full flex-col place-items-center justify-center bg-base-50 align-middle font-inter">
          <div
            id="main"
            className="mx-[15px] h-auto rounded-[10px] bg-primary-1000 pb-10 shadow-md lg:mx-[35px]"
          >
            <div className="mt-[30px] inline-flex h-6 flex-col items-start justify-start px-10">
              <div className="self-stretch text-2xl font-semibold leading-normal text-neutral-800">
                Fitur-fitur
              </div>
            </div>

            <div className="relative">
              <div className="mx-10 mt-5 grid grid-cols-1 content-center gap-4 lg:grid-cols-4">
                {features.map((feature, i) => (
                  <Link
                    key={i}
                    href={feature.link}
                    className="max-h-sm w-fit rounded-lg border border-gray-200 bg-primary-1000 shadow transition-all hover:scale-95 hover:ring-4 hover:ring-mainBlue/20 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div>
                      <Image
                        className="h-[150px] rounded-t-lg object-cover lg:h-[150px]"
                        src={feature.src}
                        alt={feature.alt}
                      />
                    </div>
                    <div className="p-5">
                      <div>
                        <h5 className="mb-2 text-[18px] font-semibold tracking-tight text-base-100 dark:text-white">
                          {feature.title}
                        </h5>
                      </div>
                      <p className="mb-3 text-[14px] font-normal text-base-100 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className=" mb-[30px] mt-[30px] max-w-screen-2xl rounded-[10px] bg-primary-1000 shadow-md lg:w-full lg:pr-[824px]">
            <div className="mt-[30px] inline-flex h-6 flex-col items-start justify-start px-10">
              <div className="self-stretch text-2xl font-semibold leading-normal text-neutral-800">
                Komentar
              </div>
            </div>
            <Forms />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
