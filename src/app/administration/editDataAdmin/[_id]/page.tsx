"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import WelcomeBack from "../../components/WelcomeBack";
import EditDataAdmins from "../../components/content/EditDataAdmin";

interface DataAdmin {
  _id?: string;
  fullname?: string;
  email?: string;
  nama_dokter?: string;
  status_dokter?: "online" | "offline";
  spesialis?: string;
}
const getTopicById = async (_id: any): Promise<DataAdmin> => {
  const res = await fetch(`/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

const EditDataAdmin = ({ params }: { params: { _id: any } }) => {
  const { _id: patientId } = params;
  const [dataAdmin, setDataAdmin] = useState<DataAdmin | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const data = await getTopicById(patientId);
        setDataAdmin(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        setError("Error fetching patient data. Please try again later.");
      }
    };

    fetchPatientData();
  }, [patientId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!dataAdmin) {
    return <div>Loading...</div>;
  }

  const { _id, fullname, email, nama_dokter, status_dokter, spesialis } =
    dataAdmin;

  return (
    <>
      <div>
        <Sidebar />
        <div className="ml-64 mt-6 w-3/4 max-w-full">
          <Headers name="EDIT PROFILE (Dokter)" />
          <div className="absolute right-0 top-0 mx-4 max-w-lg">
            <WelcomeBack />
          </div>
          <EditDataAdmins
            _id={_id}
            fullname={fullname}
            email={email}
            nama_dokter={nama_dokter}
            status_dokter={status_dokter}
            spesialis={spesialis}
          />
        </div>
      </div>
    </>
  );
};

export default EditDataAdmin;
