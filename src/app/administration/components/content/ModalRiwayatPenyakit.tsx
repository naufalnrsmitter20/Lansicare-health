"use client";
import DeleteIcon from "@/src/app/(users)/component/svg/DeleteIcon";
import { Modal, Spinner, TextInput } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  LoadingButton,
  PrimaryButton,
  SuccessButton,
} from "../utilities/Buttons";
import SpinnerProops from "../utilities/Spinner";
import Toaster from "../utilities/Toaster";

import { FaTelegramPlane } from "react-icons/fa";

export default function ModalRiwayatPenyakit({
  _id,
  riwayatPenyakit,
}: {
  _id: string;
  riwayatPenyakit: string[];
}) {
  const { data: session } = useSession();
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const router = useRouter();
  const [newRiwayatPenyakit, setNewRiwayatPenyakit] = useState<string[]>([
    ...riwayatPenyakit,
  ]);

  const [modal, setModal] = useState(true);
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
          newRiwayatPenyakit,
        }),
      });

      if (!res.ok) {
        throw new Error("Gagal Menambahkan Riwayat Penyakit");
      }
      console.log(await res.json());
      setIsMutating(false);
      setIsVisible(true);
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

  const handleRiwayatChange = (index: number, value: string) => {
    const newRiwayat = [...newRiwayatPenyakit];
    newRiwayat[index] = value;
    setNewRiwayatPenyakit(newRiwayat);
  };

  const handleAddRiwayat = () => {
    setNewRiwayatPenyakit([...newRiwayatPenyakit, ""]);
  };

  const handleRemoveRiwayat = (index: number) => {
    const newRiwayat = newRiwayatPenyakit.filter((_, i) => i !== index);
    setNewRiwayatPenyakit(newRiwayat);
  };
  function onCloseModal() {
    router.back();
  }
  return (
    <Modal show={modal} size="lg" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="RiwayatPenyakit"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Riwayat Penyakit
              </label>
              {newRiwayatPenyakit.map((riwayat, index) => (
                <div key={index} className="my-2 flex">
                  <TextInput
                    type="text"
                    value={riwayat}
                    id={`RiwayatPenyakit-${index}`}
                    onChange={(e) => handleRiwayatChange(index, e.target.value)}
                    placeholder="Riwayat Penyakit"
                    className="w-full"
                  />
                  <button
                    type="button"
                    className="ml-4"
                    onClick={() => handleRemoveRiwayat(index)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              ))}
              <SuccessButton
                type="button"
                onClick={handleAddRiwayat}
                className="mb-10 mt-6"
              >
                Tambah
              </SuccessButton>
            </div>
          </div>
          <div className="flex">
            {!isMutating ? (
              <PrimaryButton className="my-4 w-full" type="submit">
                Edit
              </PrimaryButton>
            ) : (
              <>
                <LoadingButton className="my-4 w-full" type="button">
                  <Spinner theme={SpinnerProops.spinner} color="white" />
                  <p className="ml-3 pt-0.5">Updating...</p>
                </LoadingButton>
              </>
            )}
            <button
              type="button"
              id="closedItem"
              onClick={() => onCloseModal()}
              className="mx-3 my-4 ms-3 w-full rounded-lg  border border-gray-500 bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-600"
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
      </Modal.Body>
    </Modal>
  );
}
