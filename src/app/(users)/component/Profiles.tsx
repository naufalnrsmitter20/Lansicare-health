"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Imageprofile from "@/public/userdefault.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gammbarAsma from "@/public/gambar_Asma.jpg";
import Footer from "../component/Footer";
import Link from "next/link";
import { TertiaryButton } from "./buttons/Button";

enum PasienStatus {
  rawatInap = "Rawat Inap",
  rawatJalan = "Rawat Jalan",
}

type Patient = {
  _id: number;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  fullname: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  Alamat: string;
  RT: number;
  RW: number;
  KelurahanDesa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
  updatedAt: string;
  tanggalCheckup: string;
  rumah_sakit: string;
  nama_dokter: string;
  spesialis: string;
  penyakit: string;
};

export default function Profiles() {
  const { data: session, status } = useSession();
  const [IsVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const router = useRouter();

  console.log(session);
  console.log(status);
  if (session === null) {
    router.push("/signin");
  }
  const HandleToggle = () => {
    setIsVisible(!IsVisible);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (session) {
        try {
          const response = await fetch(`/api/topics/`);
          const data = await response.json();
          const patients = data.patients || [];
          const loggedInUser = patients.find(
            (patient: any) => patient.email === session.user?.email,
          );
          setPatient(loggedInUser || null);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    fetchProfile();
  }, [session, router]);

  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <div className="flex items-center justify-center">
            <p className="text-xl font-semibold text-black">Loading...</p>
          </div>
        </>
      ) : (
        <section>
          <div className="w-screen overflow-hidden scroll-smooth bg-base-50 lg:overflow-auto">
            <>
              <div className="h-full pt-16 lg:pt-32">
                <div className="flex max-w-sm flex-1 flex-col justify-center align-middle font-inter lg:max-w-full lg:px-8">
                  <div className="mx-auto inline-flex h-auto place-items-center items-center justify-center lg:py-[17px] ">
                    <div className="relative h-auto">
                      <div className="relative w-screen rounded-[10px] bg-slate-50 pb-8 shadow lg:w-full">
                        <div className="absolute left-0 top-0 h-[336px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-gradient-to-r from-blue-200 to-cyan-700" />
                        <div className="absolute left-[47.48px] top-[37.05px] inline-flex w-[1370px] items-center justify-start gap-[23px] pr-3 pt-4">
                          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                            <div className="self-stretch text-4xl font-bold leading-normal text-black lg:text-5xl">
                              Profile
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-10 top-[168.13px] inline-flex h-[313px] w-[300px]  items-center gap-[60px] lg:left-[47.48px] lg:justify-center">
                          <Image
                            src={Imageprofile}
                            className="h-[150px] w-[150px] rounded-[150px] border-4 border-slate-50 lg:h-[300px] lg:w-[300px]"
                            alt="Image profile"
                          />
                        </div>
                        <div className=" relative w-[1346.55px] pl-[47.48px] pt-[450px] lg:pt-[500px]">
                          <div className="flex justify-between">
                            <div>
                              {!patient ? (
                                <div className="mb-4 text-[32px] font-semibold leading-10 tracking-wider text-black">
                                  User
                                </div>
                              ) : (
                                <div className="mb-4 truncate text-[32px] font-semibold leading-10 tracking-wider text-black">
                                  {patient.fullname}
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <div className="grid max-w-sm grid-cols-2">
                              {patient ? (
                                <TertiaryButton
                                  onClick={() =>
                                    router.push(
                                      `/profile/detail/${patient._id}`,
                                    )
                                  }
                                  type="button"
                                >
                                  Edit Profile
                                </TertiaryButton>
                              ) : (
                                <></>
                              )}

                              <TertiaryButton
                                type="button"
                                onClick={HandleToggle}
                              >
                                See Details
                              </TertiaryButton>
                            </div>
                            {patient ? (
                              <>
                                <div className="mt-10 grid max-w-sm gap-6 pr-7 md:grid-cols-1 lg:max-w-5xl lg:pr-0 ">
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Email :
                                    </label>
                                    <div
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    >
                                      {patient.email}
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      ID Pasien:
                                    </label>
                                    <div
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    >
                                      {patient.nfcId}
                                    </div>
                                  </div>
                                  {IsVisible && (
                                    <div className="grid gap-6 lg:grid-cols-2 ">
                                      <div>
                                        <label
                                          htmlFor="nama"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          NIK :
                                        </label>
                                        <div
                                          id="NIK"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.NIK}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="TTL"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          TTL :
                                        </label>
                                        <div
                                          id="TTL"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.TTL}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="jk"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Jenis Kelamin :
                                        </label>
                                        <div
                                          id="jk"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.JenisKelamin}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="status"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Status{" "}
                                        </label>
                                        <div
                                          id="status"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.pasienStatus}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="alamat"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Alamat
                                        </label>
                                        <div
                                          id="alamat"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.Alamat}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="rt"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          RT
                                        </label>
                                        <div
                                          id="rt"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.RT}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="rw"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          RW
                                        </label>
                                        <div
                                          id="rw"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.RW}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="kelurahan_desa"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Kelurahan/Desa
                                        </label>
                                        <div
                                          id="kelurahan_desa"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.KelurahanDesa}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="kecamatan"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Kecamatan
                                        </label>
                                        <div
                                          id="kecamatan"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.Kecamatan}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="agama"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Agama
                                        </label>
                                        <div
                                          id="agama"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.Agama}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="pekerjaan"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Pekerjaan
                                        </label>
                                        <div
                                          id="pekerjaan"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.Pekerjaan}
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="kewarganegaraan"
                                          className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                        >
                                          Kewarganegaraan
                                        </label>
                                        <div
                                          id="kewarganegaraan"
                                          className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        >
                                          {patient.Kewarganegaraan}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {patient ? (
                        <>
                          <div className="mt-10 w-screen max-w-full rounded-[10px] border bg-primary-1000 shadow-md lg:w-full">
                            <h3 className=" px-12 pb-4 pt-5 font-inter text-2xl font-medium text-black">
                              Riwayat Penyakit
                            </h3>
                            <div className="mt-4 px-12 pb-5">
                              {patient.riwayatPenyakit &&
                              patient.riwayatPenyakit.length !== 0 ? (
                                <div className=" max-w-[240px] rounded-[10px] border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                                  <a href="#">
                                    <Image
                                      className="rounded-t-lg"
                                      src={gammbarAsma}
                                      width={"300"}
                                      height={"200"}
                                      alt=""
                                    />
                                  </a>
                                  <div className="p-5">
                                    <a href="#">
                                      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-white">
                                        {patient.riwayatPenyakit}
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              ) : (
                                <h3 className="font-inter text-xl font-normal text-black">
                                  Anda Tidak Memiliki Riwayat Penyakit
                                </h3>
                              )}
                            </div>
                          </div>
                        </>
                      ) : null}

                      <div className="mb-10 mt-10 w-screen max-w-full gap-6 rounded-md bg-primary-1000 px-12 pb-5 shadow-md md:grid-cols-1 lg:w-full">
                        <h3 className=" pb-4 pt-5 font-inter text-2xl font-medium text-black">
                          Riwayat Check Up
                        </h3>
                        <div className="lg:grid ">
                          {patient && (
                            <>
                              {patient.nama_dokter &&
                              patient.nama_dokter.length !== 0 ? (
                                <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                                    {patient?.tanggalCheckup}
                                  </h5>
                                  <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <strong>Rumah Sakit : </strong>
                                    {patient?.rumah_sakit}
                                    <br />
                                    <strong>Spesialis : </strong>
                                    {patient?.spesialis}
                                    <br />
                                    <strong>Dokter : </strong>
                                    {patient?.nama_dokter}
                                  </p>
                                  <p className="mt-3 text-sm">
                                    <strong>Time : </strong>
                                    {patient?.tanggalCheckup}
                                  </p>
                                </div>
                              ) : (
                                <h3 className="font-inter text-xl font-normal text-black">
                                  Anda Belum Pernah Checkup Kesehatan
                                </h3>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
}
