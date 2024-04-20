"use client";

import { Label, Select, Spinner, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SpinnerProops from "../utilities/Spinner";
import Toaster from "../utilities/Toaster";
import { HiCheck } from "react-icons/hi";
import { LoadingButton, PrimaryButton } from "../utilities/Buttons";
import { Modal } from "flowbite-react";

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
  tanggalCheckup,
  rumah_sakit,
  nama_dokter,
  spesialis,
  penyakit,
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
  tanggalCheckup: string;
  rumah_sakit: string;
  nama_dokter: string;
  spesialis: string;
  penyakit: string;
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
  const [newRole, setNewRole] = useState(role ?? ("admin" || "user"));

  const [newTanggalCheckup, setNewTanggalCheckup] = useState(
    tanggalCheckup ?? "",
  );
  const [newRumahSakit, setNewRumahSakit] = useState(rumah_sakit ?? "");
  const [newNamaDokter, setNewNamaDokter] = useState(nama_dokter ?? "");
  const [newSpesialis, setNewSpesialis] = useState(spesialis ?? "");
  const [newPenyakit, setNewPenyakit] = useState(penyakit ?? "");

  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState(true);

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
          newTanggalCheckup,
          newRumahSakit,
          newNamaDokter,
          newSpesialis,
          newPenyakit,
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
  function onCloseModal() {
    setModal(false);
  }

  return (
    <>
      <section className="w-ful container mx-10 mt-7 block max-w-7xl">
        {role === "user" && (
          <>
            <div className="mb-10">
              <PrimaryButton
                onClick={() => setModal(true)}
                className="max-w-56"
                type="button"
              >
                CheckUp Pasien
              </PrimaryButton>
              <Modal show={modal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      CheckUp Pasien
                    </h3>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="Tanggal" value="Tanggal" />
                      </div>
                      <TextInput
                        id="Tanggal"
                        name="Tanggal"
                        type="date"
                        value={newTanggalCheckup}
                        onChange={(e) => setNewTanggalCheckup(e.target.value)}
                        placeholder="Tanggal CheckUp"
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="rumahsakit" value="Rumah Sakit" />
                      </div>
                      <TextInput
                        id="rumahsakit"
                        name="rumahsakit"
                        type="text"
                        value={newRumahSakit}
                        onChange={(e) => setNewRumahSakit(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="dokter" value="Nama Dokter" />
                      </div>
                      <TextInput
                        id="dokter"
                        name="dokter"
                        type="text"
                        value={newNamaDokter}
                        onChange={(e) => setNewNamaDokter(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="spesialis" value="Spesialis" />
                      </div>
                      <TextInput
                        id="spesialis"
                        name="spesialis"
                        type="text"
                        value={newSpesialis}
                        onChange={(e) => setNewSpesialis(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="penyakit" value="Penyakit" />
                      </div>
                      <TextInput
                        id="penyakit"
                        name="penyakit"
                        type="text"
                        value={newPenyakit}
                        onChange={(e) => setNewPenyakit(e.target.value)}
                      />
                    </div>

                    <div className="w-full">
                      {!isMutating ? (
                        <>
                          {!isVisible ? (
                            <PrimaryButton type="submit">
                              <p>Submit</p>
                            </PrimaryButton>
                          ) : (
                            <PrimaryButton type="button" onClick={onCloseModal}>
                              <p>Kembali</p>
                            </PrimaryButton>
                          )}
                        </>
                      ) : (
                        <LoadingButton type="button" className="w-full">
                          <Spinner
                            theme={SpinnerProops.spinner}
                            color="white"
                          />
                          <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">
                            Loading...
                          </p>
                        </LoadingButton>
                      )}
                    </div>
                    {isVisible && (
                      <Toaster
                        type={<HiCheck className="h-5 w-5" />}
                        message="Data Berhasil Diperbarui"
                      />
                    )}
                  </form>
                </Modal.Body>
              </Modal>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="NFCID"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NFC ID
                  </label>
                  <TextInput
                    type="number"
                    id="NFCID"
                    onChange={(e) => setNewNfcId(parseInt(e.target.value))}
                    value={newNfcId}
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
                  <TextInput
                    type="text"
                    id="fullname"
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newFullname}
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
                  <TextInput
                    type="number"
                    id="NIK"
                    onChange={(e) => setNewNIK(parseInt(e.target.value))}
                    value={newNIK}
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
                  <TextInput
                    type="text"
                    id="TTL"
                    onChange={(e) => setNewTTL(e.target.value)}
                    value={newTTL}
                    placeholder="Tempat Tanggal Lahir"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    email
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    value={newEmail}
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
                  <TextInput
                    type="text"
                    id="alamat"
                    onChange={(e) => setNewAlamat(e.target.value)}
                    value={newAlamat}
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
                  <TextInput
                    type="text"
                    id="riwayatPenyakit"
                    onChange={(e) => setNewRiwayatPenyakit(e.target.value)}
                    value={newRiwayatPenyakit}
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
                  <TextInput
                    type="number"
                    id="rt"
                    onChange={(e) => setNewRT(parseInt(e.target.value))}
                    value={newRT}
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
                  <TextInput
                    type="text"
                    id="jenisKelamin"
                    onChange={(e) => setNewJenisKelamin(e.target.value)}
                    value={newJenisKelamin}
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
                  <TextInput
                    type="number"
                    id="rw"
                    onChange={(e) => setNewRW(parseInt(e.target.value))}
                    value={newRW}
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
                  <TextInput
                    type="text"
                    id="agama"
                    onChange={(e) => setNewAgama(e.target.value)}
                    value={newAgama}
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
                  <TextInput
                    type="text"
                    id="kelurahan_desa"
                    onChange={(e) => setNewKelurahan_desa(e.target.value)}
                    value={newKelurahanDesa}
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
                  <TextInput
                    type="text"
                    id="kewarganegaraan"
                    onChange={(e) => setNewKewarganegaraan(e.target.value)}
                    value={newKewarganegaraan}
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
                  <TextInput
                    type="text"
                    id="kecamatan"
                    onChange={(e) => setNewKecamatan(e.target.value)}
                    value={newKecamatan}
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
                  <TextInput
                    type="text"
                    id="pekerjaan"
                    onChange={(e) => setNewPekerjaan(e.target.value)}
                    value={newPekerjaan}
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
                  <TextInput
                    type="text"
                    id="status"
                    onChange={(e) => setNewStatus(e.target.value)}
                    value={newPasienStatus}
                    placeholder="Rawat Inap / Rawat Jalan"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block w-full text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <Select
                    className="bg-white"
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Select>
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
          </>
        )}

        {role === "admin" && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullname"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama
                  </label>
                  <TextInput
                    type="text"
                    id="fullname"
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newFullname}
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
                  <TextInput
                    type="email"
                    id="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    value={newEmail}
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block w-full text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <Select
                    className="bg-white"
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Select>
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
          </>
        )}
      </section>
    </>
  );
}
