"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Imageprofile from "@/public/userdefault.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "../component/Footer";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./buttons/Button";
import refresh from "@/public/refresh.png";

export default function Profiles() {
  const { data: session, status } = useSession();
  const [IsVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const router = useRouter();

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
              <div className="h-full pt-24 lg:pt-32">
                <div className="flex flex-1 flex-col justify-center align-middle font-inter lg:max-w-full">
                  <div className="place-items-center items-center justify-center">
                    <div className="relative h-auto">
                      <div className="mx-[15px] h-auto rounded-[10px] bg-primary-1000 pb-10 shadow-md lg:mx-[35px]">
                        <div className="left-0 top-0 h-[250px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-gradient-to-r from-blue-200 to-cyan-700 lg:h-[330px]" />
                        <div className="absolute top-[37.05px] mx-[20px] mr-3 mt-4 inline-flex w-[1370px] items-center justify-start gap-[23px] lg:mx-[45px]">
                          <div className="inline-flex shrink grow basis-0 flex-col">
                            <div className="self-stretch text-3xl font-bold leading-normal text-black lg:text-5xl">
                              Profile
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[120px] mx-[20px] inline-flex h-[250px] place-items-center items-center lg:top-[168px] lg:mx-[45px] lg:h-[300px]">
                          <Image
                            src={Imageprofile}
                            className="h-[150px] w-[150px] rounded-[150px] border-4 border-slate-50 lg:h-auto lg:w-[300px]"
                            alt="Image profile"
                          />
                        </div>
                        <div className=" relative mx-[20px] mt-[90px] w-[1346.55px] lg:mx-[45px] lg:mt-[180px]">
                          <div className="flex justify-between">
                            <div>
                              {!patient ? (
                                <div className="mb-4 text-[25px] font-semibold leading-10 tracking-wider text-black lg:text-[32px]">
                                  Loading...
                                </div>
                              ) : (
                                <div className="mb-4 truncate text-[22px] font-semibold leading-10 tracking-wider text-black lg:text-[32px]">
                                  {patient.fullname}
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <div className="grid max-w-[250px] grid-cols-3 lg:max-w-sm">
                              {patient ? (
                                <SecondaryButton
                                  className="mt-4 max-w-[150px] lg:max-w-sm"
                                  onClick={() =>
                                    router.push(
                                      `/profile/detail/${patient._id}`,
                                    )
                                  }
                                  type="button"
                                >
                                  Edit Profile
                                </SecondaryButton>
                              ) : (
                                <></>
                              )}
                              {patient ? (
                                <SecondaryButton
                                  className="mt-4 max-w-[150px] lg:max-w-sm"
                                  type="button"
                                  onClick={HandleToggle}
                                >
                                  See Details
                                </SecondaryButton>
                              ) : (
                                <></>
                              )}
                              <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className="mb-2 me-2 mt-4 w-fit rounded-lg border-2 border-base-100 px-3 text-sm font-semibold text-base-100 transition-all duration-200 hover:bg-base-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                              >
                                <Image
                                  src={refresh}
                                  width={24}
                                  height={24}
                                  alt="refresh"
                                />
                              </button>
                            </div>
                            {patient ? (
                              <>
                                <div className="mt-6 grid max-w-[300px] gap-6 pr-7 md:grid-cols-1 lg:max-w-5xl lg:pr-0 ">
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Email :
                                    </label>
                                    <div
                                      id="email"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    >
                                      {patient?.email &&
                                      patient.email.length > 0 ? (
                                        <>{patient?.email}</>
                                      ) : (
                                        <>
                                          {status === "loading" ? (
                                            <>Loading...</>
                                          ) : (
                                            <p className="text-slate-500">
                                              <i className="tracking-wide">
                                                Data Belum Diisi
                                              </i>
                                            </p>
                                          )}
                                        </>
                                      )}
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
                                      {patient?.nfcId &&
                                      patient.nfcId.toString.length > 0 ? (
                                        <>{patient?.nfcId}</>
                                      ) : (
                                        <>
                                          {status === "loading" ? (
                                            <>Loading...</>
                                          ) : (
                                            <p className="text-slate-500">
                                              <i className="tracking-wide">
                                                Data Belum Diisi
                                              </i>
                                            </p>
                                          )}
                                        </>
                                      )}
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
                                          {patient?.NIK &&
                                          patient.NIK.toString.length > 0 ? (
                                            <>{patient?.NIK}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.TTL && patient.TTL ? (
                                            <>{patient?.TTL}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.JenisKelamin &&
                                          patient.JenisKelamin.length > 0 ? (
                                            <>{patient?.JenisKelamin}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.pasienStatus &&
                                          patient.pasienStatus.length > 0 ? (
                                            <>{patient?.pasienStatus}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.Alamat && patient.Alamat ? (
                                            <>{patient?.Alamat}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.RT &&
                                          patient.RT.toString.length > 0 ? (
                                            <>{patient?.RT}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.RW &&
                                          patient.RW.toString.length > 0 ? (
                                            <>{patient?.RW}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.KelurahanDesa &&
                                          patient.KelurahanDesa.length > 0 ? (
                                            <>{patient?.KelurahanDesa}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.Kecamatan &&
                                          patient.Kecamatan.length > 0 ? (
                                            <>{patient?.Kecamatan}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.Agama &&
                                          patient.Agama.length > 0 ? (
                                            <>{patient?.Agama}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.Pekerjaan &&
                                          patient.Pekerjaan.length > 0 ? (
                                            <>{patient?.Pekerjaan}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                                          {patient?.Kewarganegaraan &&
                                          patient.Kewarganegaraan.length > 0 ? (
                                            <>{patient?.Kewarganegaraan}</>
                                          ) : (
                                            <>
                                              {status === "loading" ? (
                                                <>Loading...</>
                                              ) : (
                                                <p className="text-slate-500">
                                                  <i className="tracking-wide">
                                                    Data Belum Diisi
                                                  </i>
                                                </p>
                                              )}
                                            </>
                                          )}
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
                          <div className="mx-[15px] mb-10 mt-10 h-auto rounded-[10px] bg-primary-1000 pb-10 shadow-md lg:mx-[35px]">
                            <div className="flex justify-between">
                              <h3 className="px-12 pb-4 pt-5 font-inter text-xl font-medium text-black lg:text-2xl">
                                Riwayat Penyakit
                              </h3>
                              <SecondaryButton
                                type="button"
                                className="mr-4 mt-4 h-fit"
                                onClick={() =>
                                  router.push(
                                    `/profile/detailRiwayatPenyakit/${patient._id}`,
                                  )
                                }
                              >
                                Tambah
                              </SecondaryButton>
                            </div>
                            <div className="mt-4 grid grid-cols-1 gap-4 px-12 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                              {Array.isArray(patient.riwayatPenyakit) &&
                              patient.riwayatPenyakit.length !== 0 ? (
                                <>
                                  {patient.riwayatPenyakit.map(
                                    (riwayat, index) => (
                                      <div
                                        key={index}
                                        className="h-auto w-full rounded-[10px] border border-gray-200 bg-primary-1000 px-4 py-2 shadow "
                                      >
                                        <div>
                                          <div>
                                            <p className=" text-base font-medium tracking-tight text-gray-800 dark:text-white">
                                              {index + 1}. {riwayat}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    ),
                                  )}
                                </>
                              ) : (
                                <p>Tidak ada riwayat penyakit</p>
                              )}
                            </div>
                          </div>
                        </>
                      ) : null}

                      {patient && (
                        <div className="mx-[15px] mb-10 mt-10 h-auto rounded-[10px] bg-primary-1000 pb-10 shadow-md lg:mx-[35px]">
                          <h3 className="px-12 pb-4 pt-5 font-inter text-xl font-medium text-black lg:text-2xl">
                            Riwayat Check Up
                          </h3>
                          <div className="px-12 lg:grid">
                            <>
                              {patient.nama_dokter &&
                              patient.nama_dokter.length !== 0 ? (
                                <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow ring-2 ring-darkBlue hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                                <h3 className="text-md px-12 font-inter font-normal text-black lg:text-xl">
                                  Anda Belum Pernah Checkup Kesehatan
                                </h3>
                              )}
                            </>
                          </div>
                        </div>
                      )}
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
