"use client";

import React, { useState } from "react";
import Lokasi from "./utilities/Lokasi";
import Spesialis from "./utilities/Spesialis";
import PilihanDokter from "./utilities/PilihanDokter";
import JadwalCheckUp from "./utilities/JadwalCheckUp";
import { useRouter } from "next/navigation";
import RumahSakit from "./utilities/RumahSakit";
import { CarouselButton } from "./buttons/Button";

export default function CheckupComp() {
  const router = useRouter();
  const [rumahSakitv, setRumahSakitv] = useState(false);
  const [spesialisv, setSpesialisv] = useState(false);
  const [dokterv, setDokterv] = useState(false);
  const [jadwalkan, setJadwalkan] = useState(false);

  const handleRumahSakit = () => {
    setRumahSakitv(!rumahSakitv);
  };
  const handleSpesialis = () => {
    setSpesialisv(!spesialisv);
  };
  const handleDokter = () => {
    setDokterv(!dokterv);
  };
  const handleJadwal = () => {
    setJadwalkan(!jadwalkan);
  };
  const handleClick = () => {
    alert("Success to Check Up, Please Check Email to see Detail Check Up!");
  };
  return (
    <>
      <main>
        <div className="mx-auto flex h-full flex-col place-items-center justify-center bg-base-50 pb-[30px] pt-[70px] align-middle font-inter">
          <div
            id="checkup"
            className="mx-[35] mt-[40px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md"
          >
            <div className="mt-[33px] flex-col items-start justify-start px-10">
              <div className="w-full self-stretch text-3xl font-bold leading-normal text-neutral-800">
                Checkup Kesehatan
              </div>
            </div>
          </div>
          <div>
            <Lokasi>
              <CarouselButton type="button" onClick={handleRumahSakit}>
                Cari Rumah Sakit
              </CarouselButton>
            </Lokasi>
            {rumahSakitv && (
              <RumahSakit>
                <CarouselButton
                  type="button"
                  onClick={handleSpesialis}
                  className="max-w-sm"
                >
                  Cari Spesialis
                </CarouselButton>
              </RumahSakit>
            )}
            {spesialisv && (
              <Spesialis>
                <CarouselButton
                  type="button"
                  onClick={handleDokter}
                  className="max-w-sm"
                >
                  Cari Dokter
                </CarouselButton>
              </Spesialis>
            )}
            {dokterv && (
              <PilihanDokter>
                <CarouselButton type="button" onClick={handleJadwal}>
                  Jadwalkan
                </CarouselButton>
              </PilihanDokter>
            )}
            {jadwalkan && (
              <JadwalCheckUp>
                <CarouselButton type="button" onClick={handleClick}>
                  Buat Jadwal
                </CarouselButton>
              </JadwalCheckUp>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
