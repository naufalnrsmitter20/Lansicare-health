"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RemovePatient from "./RemovePatient";
import InputSearch from "../utilities/InputSearch";
import CopyClipboard from "../utilities/CopyClipboard";
import { Button } from "flowbite-react";
import ButtonProops from "../utilities/Buttons";

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
  _Alamat: string;
  RT: number;
  RW: number;
  Kelurahan_Desa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
  updatedAt: string;
  role: string;
};

export const getData = async () => {
  try {
    const res = await fetch(`/api/topics/`, {
      cache: "no-store",
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return data;
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function TableData() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const patients = data.patients || [];
        setPatients(patients);
        setFilteredPatients(patients);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = patients.filter(
      (patient) =>
        patient.nfcId?.toString().includes(searchInput) ||
        patient.fullname?.toString().includes(searchInput),
    );
    setFilteredPatients(filtered);
  }, [searchInput, patients]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const textCopy = "https://lansicare-health.vercel.app/profile";
  return (
    <>
      <section className="container mx-10 mt-7 block w-full max-w-7xl">
        <div className="max-w-2xl">
          <InputSearch
            searchInput={searchInput}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
        <div className="mt-10 flex justify-end">
          <div className="flex justify-end rounded-md border-2 border-mainBlue bg-sky-200 px-3 py-3 hover:ring-2 hover:ring-blue-200">
            <p className=" mr-14 text-xs font-medium">{textCopy}</p>
            <CopyClipboard text={textCopy} />
          </div>
        </div>
        <div className="mb-8 mt-8 max-w-7xl">
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr className=" border-4 border-white bg-mainBlue text-center text-white">
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    User ID
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Terakhir Diubah
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((Data, index) => (
                  <tr
                    key={Data._id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td
                      scope="row"
                      className="border-4 border-white bg-sky-200 px-6 py-2 text-center text-xs font-medium text-gray-900 dark:text-white"
                    >
                      {index + 1}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-2 text-xs">
                      {Data.nfcId}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-2 text-xs font-semibold">
                      {Data.fullname}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-2 text-center text-xs">
                      {Data.pasienStatus}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-2 text-center text-xs">
                      {Data.role}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-2 text-center text-xs">
                      {Data.updatedAt}
                    </td>

                    <td className="flex justify-center border-b-4 border-white bg-sky-200 px-6 py-2">
                      <Button
                        href={`/administration/editPasien/${Data._id}`}
                        theme={ButtonProops.button}
                        color="success"
                      >
                        Edit & View
                      </Button>
                      <RemovePatient _id={Data._id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
