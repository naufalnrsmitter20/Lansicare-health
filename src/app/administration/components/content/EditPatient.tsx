"use client";

import { Button, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SpinnerProops from "../utilities/Spinner";
import Toaster from "../utilities/Toaster";
import { HiCheck } from "react-icons/hi";
import { LoadingButton, PrimaryButton } from "../utilities/Buttons";

export default function EditPatient({
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
  role,
}: {
  _id?: string;
  nfcId?: number;
  email?: string;
  riwayatPenyakit?: string;
  pasienStatus?: string;
  fullname?: string;
  NIK?: number;
  TTL?: string;
  JenisKelamin?: string;
  Alamat?: string;
  RT?: number;
  RW?: number;
  KelurahanDesa?: string;
  Kecamatan?: string;
  Agama?: string;
  Pekerjaan?: string;
  Kewarganegaraan?: string;
  role?: string;
}): React.ReactElement {
  const [newNfcId, setNewNfcId] = useState(nfcId ?? "");
  const [newFullname, setNewNama] = useState(fullname ?? "");
  const [newTTL, setNewTTL] = useState(TTL ?? "");
  const [newAlamat, setNewAlamat] = useState(Alamat ?? "");
  const [newRT, setNewRT] = useState(RT ?? "");
  const [newRW, setNewRW] = useState(RW ?? "");
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin ?? "");
  const [newKelurahanDesa, setNewKelurahan_desa] = useState(
    KelurahanDesa ?? "",
  );
  const [newKecamatan, setNewKecamatan] = useState(Kecamatan ?? "");
  const [newNIK, setNewNIK] = useState(NIK ?? "");
  const [newEmail, setNewEmail] = useState(email ?? "");
  const [newRiwayatPenyakit, setNewRiwayatPenyakit] = useState(
    riwayatPenyakit ?? "",
  );
  const [newPasienStatus, setNewStatus] = useState(pasienStatus ?? "");
  const [newAgama, setNewAgama] = useState(Agama ?? "");
  const [newKewarganegaraan, setNewKewarganegaraan] = useState(
    Kewarganegaraan ?? "",
  );
  const [newPekerjaan, setNewPekerjaan] = useState(Pekerjaan ?? "");
  const [newRole, setNewRole] = useState(role ?? "");
  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);

    try {
      const res = await fetch(`/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newNfcId,
          newFullname,
          newTTL,
          newAlamat,
          newRT,
          newRW,
          newJenisKelamin,
          newKelurahanDesa,
          newKecamatan,
          newNIK,
          newEmail,
          newRiwayatPenyakit,
          newPasienStatus,
          newAgama,
          newKewarganegaraan,
          newPekerjaan,
          newRole,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Patient");
      }
      console.log(await res.json());
      setIsVisible(true);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
    setIsMutating(false);
  };

  return (
    <>
      <section className="w-ful container mx-10 mt-7 block max-w-7xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="NFCID"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                NFC ID
              </label>
              <input
                type="number"
                id="NFCID"
                onChange={(e) => setNewNfcId(parseInt(e.target.value))}
                value={newNfcId}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Nfc ID (Card Readers)"
              />
            </div>
            <div>
              <label
                htmlFor="fullname"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama
              </label>
              <input
                type="text"
                id="fullname"
                onChange={(e) => setNewNama(e.target.value)}
                value={newFullname}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Nama Lengkap"
              />
            </div>
            <div>
              <label
                htmlFor="NIK"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                NIK
              </label>
              <input
                type="number"
                id="NIK"
                onChange={(e) => setNewNIK(parseInt(e.target.value))}
                value={newNIK}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="16 digit"
              />
            </div>
            <div>
              <label
                htmlFor="TTL"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                TTL
              </label>
              <input
                type="date"
                id="TTL"
                onChange={(e) => setNewTTL(e.target.value)}
                value={newTTL}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Nama Lengkap"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                onChange={(e) => setNewAlamat(e.target.value)}
                value={newAlamat}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Alamat Lengkap"
              />
            </div>
            <div>
              <label
                htmlFor="riwayatPenyakit"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Riwayat Penyakit
              </label>
              <input
                type="text"
                id="riwayatPenyakit"
                onChange={(e) => setNewRiwayatPenyakit(e.target.value)}
                value={newRiwayatPenyakit}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Riwayat Penyakit"
              />
            </div>
            <div>
              <label
                htmlFor="rt"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                RT
              </label>
              <input
                type="number"
                id="rt"
                onChange={(e) => setNewRT(parseInt(e.target.value))}
                value={newRT}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="RT"
              />
            </div>
            <div>
              <label
                htmlFor="jenisKelamin"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Jenis Kelamin
              </label>
              <input
                type="text"
                id="jenisKelamin"
                onChange={(e) => setNewJenisKelamin(e.target.value)}
                value={newJenisKelamin}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Jenis Kelamin"
              />
            </div>

            <div>
              <label
                htmlFor="rw"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                RW
              </label>
              <input
                type="number"
                id="rw"
                onChange={(e) => setNewRW(parseInt(e.target.value))}
                value={newRW}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="RW"
              />
            </div>
            <div>
              <label
                htmlFor="agama"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Agama
              </label>
              <input
                type="text"
                id="agama"
                onChange={(e) => setNewAgama(e.target.value)}
                value={newAgama}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Agama"
              />
            </div>
            <div>
              <label
                htmlFor="kelurahan_desa"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kelurahan/Desa
              </label>
              <input
                type="text"
                id="kelurahan_desa"
                onChange={(e) => setNewKelurahan_desa(e.target.value)}
                value={newKelurahanDesa}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Kelurahan/Desa"
              />
            </div>
            <div>
              <label
                htmlFor="kewarganegaraan"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kewarganegaraan
              </label>
              <input
                type="text"
                id="kewarganegaraan"
                onChange={(e) => setNewKewarganegaraan(e.target.value)}
                value={newKewarganegaraan}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Indonesia"
              />
            </div>
            <div>
              <label
                htmlFor="kecamatan"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Kecamatan
              </label>
              <input
                type="text"
                id="kecamatan"
                onChange={(e) => setNewKecamatan(e.target.value)}
                value={newKecamatan}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Kecamatan"
              />
            </div>
            <div>
              <label
                htmlFor="pekerjaan"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Pekerjaan
              </label>
              <input
                type="text"
                id="pekerjaan"
                onChange={(e) => setNewPekerjaan(e.target.value)}
                value={newPekerjaan}
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Pekerjaan"
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <input
                type="text"
                id="status"
                onChange={(e) => setNewStatus(e.target.value)}
                value={newPasienStatus}
                placeholder="Rawat Inap / Rawat Jalan"
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                onChange={(e) => setNewRole(e.target.value)}
                value={newRole}
                placeholder="user / admin"
                className="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-sky-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div></div>
            <div>
              {!isMutating ? (
                <>
                  {!isVisible ? (
                    <PrimaryButton type="submit">
                      <p>Edit</p>
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      type="button"
                      href="/administration/dataPage"
                    >
                      <p>Kembali Ke Halaman Data</p>
                    </PrimaryButton>
                  )}
                </>
              ) : (
                <LoadingButton type="button" className="w-full">
                  <Spinner theme={SpinnerProops.spinner} color="white" />
                  <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">
                    Loading...
                  </p>
                </LoadingButton>
              )}
            </div>
          </div>
        </form>
        {isVisible && (
          <Toaster
            type={<HiCheck className="h-5 w-5" />}
            message="Data Berhasil Diperbarui"
          />
        )}
      </section>
    </>
  );
}
