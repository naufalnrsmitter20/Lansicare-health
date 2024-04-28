"use client";
import React, { useEffect, useState } from "react";
import doctorProffile from "@/public/userdefault.png";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { LoadingButton, PrimaryButton } from "../utilities/Buttons";
import { useRouter } from "next/navigation";
import SpinnerProops from "../utilities/Spinner";
import { Spinner } from "flowbite-react";

interface DokterProfile {
  _id: string;
  fullname: string;
  email: string;
  status_dokter: "online" | "offline";
  JenisKelamin: "Belum-teridentifikasi" | "Laki-Laki" | "Perempuan";
  spesialis: string;
}
export default function DataAdmin() {
  const { data: session, status } = useSession();
  const [dataAdmin, setDataAdmin] = useState<DokterProfile | null>(null);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchProfile = async () => {
      if (session) {
        try {
          const response = await fetch(`/api/topics/`);
          const data = await response.json();
          const dataAdmin = data.patients || [];
          const loggedInUser = dataAdmin.find(
            (admins: any) => admins.email === session.user?.email,
          );
          setDataAdmin(loggedInUser || null);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    fetchProfile();
  }, [session]);

  const redirectToEdit = () => {
    setIsMutating(true);
    router.push(`/administration/editDataAdmin/${dataAdmin?._id}`);
  };
  return (
    <>
      <section className="container mx-10 mt-7 block w-full max-w-7xl ">
        <main className="grid grid-cols-3">
          <div className="mx-auto">
            <Image src={doctorProffile} alt="Profil Dokter" width={200} />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="id"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                ID Dokter :
              </label>
              <div
                id="id"
                className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {dataAdmin?._id && dataAdmin._id.length > 0 ? (
                  <>{dataAdmin?._id}</>
                ) : (
                  <>
                    {status === "loading" ? (
                      <>Loading...</>
                    ) : (
                      <p className="text-slate-500">
                        <i className="tracking-wide">Data Belum Diisi</i>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="namaDokter"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Nama (Dokter/Admin) :
              </label>
              <div
                id="namaDokter"
                className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {dataAdmin?.fullname && dataAdmin.fullname.length > 0 ? (
                  <>{dataAdmin?.fullname}</>
                ) : (
                  <>
                    {status === "loading" ? (
                      <>Loading...</>
                    ) : (
                      <p className="text-slate-500">
                        <i className="tracking-wide">Data Belum Diisi</i>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
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
                {dataAdmin?.email && dataAdmin.email.length > 0 ? (
                  <>{dataAdmin?.email}</>
                ) : (
                  <>
                    {status === "loading" ? (
                      <>Loading...</>
                    ) : (
                      <p className="text-slate-500">
                        <i className="tracking-wide">Data Belum Diisi</i>
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
                Jenis Kelamin :
              </label>
              <div
                id="status"
                className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {dataAdmin?.JenisKelamin &&
                dataAdmin.JenisKelamin.length > 0 ? (
                  <>{dataAdmin?.JenisKelamin}</>
                ) : (
                  <>
                    {status === "loading" ? (
                      <>Loading...</>
                    ) : (
                      <p className="text-slate-500">
                        <i className="tracking-wide">Data Belum Diisi</i>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="spesialis"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Status :
              </label>
              <div
                id="spesialis"
                className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {dataAdmin?.status_dokter &&
                dataAdmin.status_dokter.length > 0 ? (
                  <>{dataAdmin?.status_dokter}</>
                ) : (
                  <>
                    {status === "loading" ? (
                      <>Loading...</>
                    ) : (
                      <p className="text-slate-500">
                        <i className="tracking-wide">Data Belum Diisi</i>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="spesialis"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
              >
                Spesialis :
              </label>
              <div
                id="spesialis"
                className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {dataAdmin?.spesialis && dataAdmin.spesialis.length > 0 ? (
                  <>{dataAdmin?.spesialis}</>
                ) : (
                  <>
                    {status === "loading" ? (
                      <>Loading...</>
                    ) : (
                      <p className="text-slate-500">
                        <i className="tracking-wide">Data Belum Diisi</i>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            {!isMutating ? (
              <PrimaryButton type="button" onClick={redirectToEdit}>
                Edit Profil
              </PrimaryButton>
            ) : (
              <LoadingButton type="button" className="w-full">
                <Spinner theme={SpinnerProops.spinner} color="white" />
                <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">
                  Loading...
                </p>
              </LoadingButton>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
