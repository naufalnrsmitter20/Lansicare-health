"use client";
import { Select, Spinner, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Toaster from "../utilities/Toaster";
import { HiCheck } from "react-icons/hi";
import { LoadingButton, PrimaryButton } from "../utilities/Buttons";
import SpinnerProops from "../utilities/Spinner";

export default function EditDataAdmins({
  _id,
  fullname,
  email,
  status_dokter,
  JenisKelamin,
  spesialis,
}: {
  _id?: string;
  fullname?: string;
  email?: string;
  nama_dokter?: string;
  status_dokter?: string;
  JenisKelamin?: string;
  spesialis?: string;
}): React.ReactElement {
  const [newFullname, setNewNama] = useState(fullname ?? "");
  const [newEmail, setNewEmail] = useState(email ?? "");
  const [newStatusDokter, setNewStatusDokter] = useState(status_dokter ?? "");
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin ?? "");
  const [newSpesialis, setNewSpesialis] = useState(spesialis ?? "");

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
          newFullname,
          newEmail,
          newStatusDokter,
          newJenisKelamin,
          newSpesialis,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Profile");
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
      <section className="container mx-10 mt-7 block w-full max-w-7xl">
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
                  htmlFor="statusDokter"
                  className="mb-2 block w-full text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status Dokter
                </label>
                <Select
                  className="bg-white"
                  id="statusDokter"
                  value={newStatusDokter}
                  onChange={(e) => setNewStatusDokter(e.target.value)}
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="jenisKelamin"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Jenis Kelamin
                </label>
                <Select
                  className="bg-white"
                  id="jeniskelamin"
                  value={newJenisKelamin}
                  onChange={(e) => setNewJenisKelamin(e.target.value)}
                >
                  <option value="Belum-teridentifikasi">Pilih</option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="spesialis"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Spesialis
                </label>
                <TextInput
                  type="text"
                  id="spesialis"
                  onChange={(e) => setNewSpesialis(e.target.value)}
                  value={newSpesialis}
                  placeholder="Spesialis"
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
                        href="/administration/profile"
                      >
                        <p>Kembali Ke Halaman Profil</p>
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
      </section>
    </>
  );
}
