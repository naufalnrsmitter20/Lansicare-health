"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Registered from "@/public/Registered.png";
import InProgress from "@/public/InProgress.png";
import Verify from "@/public/Verify.png";
import Done from "@/public/Done.png";
import { DangerButton, SuccessButton } from "../utilities/Buttons";
import RemovePatient from "./RemovePatient";
import { useSession } from "next-auth/react";

type Users = {
  _id: number;
  nfcId: number;
  status_dokter: "online" | "offline";
  fullname: string;
  pasienStatus: "Rawat-inap" | "Rawat-jalan";
  role: "pasien" | "dokter" | "superadmin";
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
export default function MainDashboard() {
  const [admindoctor, setAdminDoctor] = useState<Users[]>([]);
  const [superadmin, setSuperadmin] = useState<Users[]>([]);
  const [patients, setPatients] = useState<Users[]>([]);
  const [rawatInap, setRawatInap] = useState<Number>(0);
  const [rawatJalan, setRawatJalan] = useState<Number>(0);
  const { data: session } = useSession();
  const [users, setUsers] = useState<Users | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const allAdmin = data.patients || [];
        const userAdmin = allAdmin.filter(
          (admins: any) => admins.role === "dokter",
        );
        setAdminDoctor(userAdmin);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const allSuperAdmin = data.patients || [];
        const userSuperAdmin = allSuperAdmin.filter(
          (admins: any) => admins.role === "superadmin",
        );
        setSuperadmin(userSuperAdmin);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const allPatients = data.patients || [];
        const userPatients = allPatients.filter(
          (user: any) => user.role === "pasien",
        );
        setPatients(userPatients);

        const inap = allPatients.filter(
          (user: any) =>
            user.role === "pasien" && user.pasienStatus === "Rawat-inap",
        );

        const jalan = allPatients.filter(
          (user: any) =>
            user.role === "pasien" && user.pasienStatus === "Rawat-jalan",
        );

        setRawatInap(inap.length);
        setRawatJalan(jalan.length);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };
    fetchData();
  });

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
          setUsers(loggedInUser || null);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    fetchProfile();
  }, [session]);
  return (
    <>
      <section className=" ml-10 font-inter">
        {/* <section className=" inset-6 mx-10 mt-7 grid w-full max-w-7xl grid-cols-4 gap-4 rounded-lg bg-white p-6 shadow-md shadow-slate-300 hover:bg-gray-100">
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100 ">
            <Image
              src={TotalView}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              723
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Total View
            </h1>
          </div>
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100">
            <Image
              src={TotalUser}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              78
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Total Users
            </h1>
          </div>
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100">
            <Image
              src={Male}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              102
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Male
            </h1>
          </div>
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100">
            <Image
              src={Female}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              301
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Female
            </h1>
          </div>
        </section> */}
        <section className="mt-14">
          <div className=" container">
            <h3 className=" mb-5  font-inter text-2xl font-bold">
              Ringkasan Data
            </h3>
          </div>
          <section className=" inset-6  grid w-full max-w-7xl grid-cols-4 gap-4">
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-orange-400 p-3 shadow-sm ring-4 ring-orange-300">
              <div className="block">
                {patients && (
                  <p className="text-5xl font-medium tracking-wide text-gray-800">
                    {patients.length}
                  </p>
                )}
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Total Pasien
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={Registered}
                  alt="TotalPatient"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-red-400 p-3 shadow-sm ring-4 ring-red-300">
              <div className="block">
                {admindoctor && (
                  <p className="text-5xl font-medium tracking-wide text-gray-800">
                    {admindoctor.length}
                  </p>
                )}

                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Total Dokter
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={InProgress}
                  alt="TotalAdmin"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-indigo-400 p-3 shadow-sm ring-4 ring-indigo-300">
              <div className="block">
                {patients && (
                  <p className="text-5xl font-medium tracking-wide text-gray-800">
                    {rawatInap.toFixed()}
                  </p>
                )}
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Rawat Inap
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image src={Verify} alt="RawatInap" width={50} height={50} />
              </div>
            </div>
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-green-400 p-3 shadow-sm ring-4 ring-green-300">
              <div className="block">
                {patients && (
                  <p className="text-5xl font-medium tracking-wide text-gray-800">
                    {rawatJalan.toFixed()}
                  </p>
                )}

                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Rawat Jalan
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={Done}
                  alt="RawatJalan"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            </div>
          </section>
          <hr className="w-full" />
        </section>
        <section className="mt-10">
          <div className="mb-8 mt-8 max-w-7xl">
            <h3 className="mb-5 font-inter text-2xl font-bold">Data Dokter</h3>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr className=" border-4 border-white bg-mainBlue text-center text-white">
                    <th scope="col" className="border-4 border-white px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="border-4 border-white px-6 py-3">
                      Admin ID
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admindoctor.map((data, index) => (
                    <tr
                      key={data._id}
                      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <td
                        scope="row"
                        className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-medium text-gray-900 dark:text-white"
                      >
                        {index + 1}
                      </td>
                      <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                        {data._id}
                      </td>
                      <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                        {data.fullname}
                      </td>
                      <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                        {data.status_dokter}
                      </td>
                      <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                        {data.role}
                      </td>
                      {users?.role === "superadmin" ? (
                        <td className="flex justify-center border-b-4 border-white bg-sky-200 px-6 py-2">
                          <SuccessButton
                            type="button"
                            href={`/administration/editPasien/${data._id}`}
                          >
                            View
                          </SuccessButton>
                          <RemovePatient _id={data._id} />
                        </td>
                      ) : (
                        <td className="flex justify-center border-b-4 border-white bg-sky-200 px-6 py-2">
                          <SuccessButton
                            type="button"
                            onClick={() =>
                              alert(
                                "You not have permission to edit & view this data",
                              )
                            }
                            disabled={true}
                          >
                            Edit & View
                          </SuccessButton>
                          <DangerButton
                            type="button"
                            disabled={true}
                            onClick={() =>
                              alert(
                                "You not have permission to delete this data",
                              )
                            }
                          >
                            Delete
                          </DangerButton>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {users?.role === "superadmin" && (
          <section className="mt-10">
            <div className="mb-8 mt-8 max-w-7xl">
              <h3 className="mb-5 font-inter text-2xl font-bold">
                Data Superadmin
              </h3>
              <div className="relative overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr className=" border-4 border-white bg-mainBlue text-center text-white">
                      <th
                        scope="col"
                        className="border-4 border-white px-6 py-3"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="border-4 border-white px-6 py-3"
                      >
                        Superadmin ID
                      </th>
                      <th
                        scope="col"
                        className="border-4 border-white px-6 py-3"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-4 border-white px-6 py-3"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="border-4 border-white px-6 py-3"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {superadmin.map((data, index) => (
                      <tr
                        key={data._id}
                        className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <td
                          scope="row"
                          className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-medium text-gray-900 dark:text-white"
                        >
                          {index + 1}
                        </td>
                        <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                          {data._id}
                        </td>
                        <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                          {data.fullname}
                        </td>
                        <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                          {data.status_dokter}
                        </td>
                        <td className="border-4 border-white bg-sky-200 px-6 py-4 text-center text-xs font-semibold">
                          {data.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
