"use client";
import { Spinner, TextInput } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CarouselButton, LoadingButton } from "../buttons/Button";
import SpinnerProops from "../spinners/Spinner";
import Toaster from "@/src/app/administration/components/utilities/Toaster";
import { FaTelegramPlane } from "react-icons/fa";

type Patient = {
  _id: string;
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
};
export default function ModalUsers({
  _id,
  nfcId,
  email,
  riwayatPenyakit,
  pasienStatus,
  fullname,
  NIK,
  TTL,
  JenisKelamin,
  Alamat,
  RT,
  RW,
  KelurahanDesa,
  Kecamatan,
  Agama,
  Pekerjaan,
  Kewarganegaraan,
}: {
  _id: string;
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
  Pekerjaan: string;
  Kewarganegaraan: string;
}) {
  const { data: session } = useSession();
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const router = useRouter();
  // State Edit Profile
  const [newNfcId, setNewNfcId] = useState(nfcId);
  const [newFulllname, setNewFullname] = useState(fullname);
  const [newTTL, setNewTTL] = useState(TTL);
  const [newAlamat, setNewAlamat] = useState(Alamat);
  const [newRT, setNewRT] = useState(RT);
  const [newRW, setNewRW] = useState(RW);
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin);
  const [newKelurahanDesa, setNewKelurahan_desa] = useState(KelurahanDesa);
  const [newKecamatan, setNewKecamatan] = useState(Kecamatan);
  const [newNIK, setNewNIK] = useState(NIK);
  const [newRiwayatPenyakit, setNewRiwayatPenyakit] = useState(riwayatPenyakit);
  const [newPasienStatus, setNewStatus] = useState(pasienStatus);
  const [newAgama, setNewAgama] = useState(Agama);
  const [newKewarganegaraan, setNewKewarganegaraan] = useState(Kewarganegaraan);
  const [newPekerjaan, setNewPekerjaan] = useState(Pekerjaan);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);
    setIsVisible(false);

    try {
      const res = await fetch(`/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newNfcId,
          newFulllname,
          newTTL,
          newAlamat,
          newRT,
          newRW,
          newJenisKelamin,
          newKelurahanDesa,
          newKecamatan,
          newNIK,
          newRiwayatPenyakit,
          newPasienStatus,
          newAgama,
          newKewarganegaraan,
          newPekerjaan,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Patient");
      }
      console.log(await res.json());
      setIsMutating(false);
      setIsVisible(true);
      setTimeout(() => {
        router.refresh();
        router.back();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setIsMutating(true);
      if (session) {
        try {
          const response = await fetch(`/api/topics/`);
          const data = await response.json();
          const patients = data.patients || [];
          const loggedInUser = patients.find(
            (patient: any) => patient.email === session.user?.email,
          );
          setPatient(loggedInUser || null);
          setIsMutating(false);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    fetchProfile();
  }, [session, router]);
  const onClose = () => {
    router.back();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {patient ? (
          <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="fullname"
                className="mb-2 block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama
              </label>
              <TextInput
                id="fullname"
                type="text"
                placeholder="fullnane"
                value={newFulllname}
                onChange={(e) => setNewFullname(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-slate-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {patient.email}
              </div>
            </div>
            <div>
              <label
                htmlFor="NIK"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                NIK
              </label>
              <TextInput
                value={newNIK}
                onChange={(e) => setNewNIK(parseInt(e.target.value))}
                type="number"
                id="NIK"
                placeholder="NIK"
                required
              />
            </div>
            <div>
              <label
                htmlFor="TTL"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                TTL
              </label>
              <TextInput
                value={newTTL}
                onChange={(e) => setNewTTL(e.target.value)}
                type="text"
                id="TTL"
                placeholder="TTL"
                required
              />
            </div>
            <div>
              <label
                htmlFor="jeniskelamin"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Jenis Kelamin
              </label>
              <TextInput
                value={newJenisKelamin}
                onChange={(e) => setNewJenisKelamin(e.target.value)}
                type="text"
                id="jeniskelamin"
                placeholder="Jenis Kelamin"
                required
              />
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Alamat
              </label>
              <TextInput
                value={newAlamat}
                onChange={(e) => setNewAlamat(e.target.value)}
                type="text"
                id="alamat"
                placeholder="Alamat"
                required
              />
            </div>
            <div>
              <label
                htmlFor="RT"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                RT
              </label>
              <TextInput
                value={newRT}
                onChange={(e) => setNewRT(parseInt(e.target.value))}
                type="number"
                id="RT"
                placeholder="RT"
                required
              />
            </div>
            <div>
              <label
                htmlFor="RW"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                RW
              </label>
              <TextInput
                value={newRW}
                onChange={(e) => setNewRW(parseInt(e.target.value))}
                type="number"
                id="RW"
                placeholder="RW"
                required
              />
            </div>
            <div>
              <label
                htmlFor="kelurahandesa"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kelurahan/Desa
              </label>
              <TextInput
                value={newKelurahanDesa}
                onChange={(e) => setNewKelurahan_desa(e.target.value)}
                type="text"
                id="kelurahandesa"
                placeholder="Kelurahan/Desa"
                required
              />
            </div>
            <div>
              <label
                htmlFor="kecamatan"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kecamatan
              </label>
              <TextInput
                type="text"
                id="kecamatan"
                value={newKecamatan}
                onChange={(e) => setNewKecamatan(e.target.value)}
                placeholder="Kecamatan"
                required
              />
            </div>
            <div>
              <label
                htmlFor="agama"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Agama
              </label>
              <TextInput
                type="text"
                id="agama"
                value={newAgama}
                onChange={(e) => setNewAgama(e.target.value)}
                placeholder="agama"
                required
              />
            </div>
            <div>
              <label
                htmlFor="RiwayatPenyakit"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Riwayat Penyakit
              </label>
              <TextInput
                type="text"
                id="RiwayatPenyakit"
                value={newRiwayatPenyakit}
                onChange={(e) => setNewRiwayatPenyakit(e.target.value)}
                placeholder="Riwayat Penyakit"
                required
              />
            </div>
            <div>
              <label
                htmlFor="kewarganegaraan"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kewarganegaraan
              </label>
              <TextInput
                type="text"
                id="kewarganegaraan"
                value={newKewarganegaraan}
                onChange={(e) => setNewKewarganegaraan(e.target.value)}
                placeholder="Kewarganegaraan"
                required
              />
            </div>
            <div>
              <label
                htmlFor="kewarganegaraan"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Pekerjaan
              </label>
              <TextInput
                type="text"
                id="pekerjaan"
                value={newPekerjaan}
                onChange={(e) => setNewPekerjaan(e.target.value)}
                placeholder="pekerjaan"
                required
              />
            </div>
          </div>
        ) : null}
        <div className="flex">
          {!isMutating ? (
            <CarouselButton className="mt-4" type="submit">
              Edit Profile
            </CarouselButton>
          ) : (
            <>
              <LoadingButton className="mt-4" type="button">
                <Spinner theme={SpinnerProops.spinner} color="white" />
                <p className="ml-3 pt-0.5">Updating...</p>
              </LoadingButton>
            </>
          )}
          <button
            type="button"
            id="closedItem"
            onClick={() => onClose()}
            className="mx-3 ms-3 mt-4 rounded-lg  border border-gray-500 bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-600"
          >
            Close
          </button>
        </div>
        {isVisible && (
          <Toaster
            type={<FaTelegramPlane className="h5 w-5" />}
            message="Data Berhasil Diperbarui!"
          />
        )}
      </form>
    </>
  );
}
