"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import EditPatient from "../../components/content/EditPatient";
import WelcomeBack from "../../components/WelcomeBack";

interface PatientData {
  _id: string; // Ensure _id is defined as a string
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
  role: string;
}

const getTopicById = async (_id: any): Promise<PatientData> => {
  const res = await fetch(`/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

const EditDataPages = ({ params }: { params: { _id: any } }) => {
  const { _id: patientId } = params;
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const data = await getTopicById(patientId);
        setPatientData(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        setError("Error fetching patient data. Please try again later.");
      }
    };

    fetchPatientData();
  }, [patientId]); // Changed _id to patientId

  if (error) {
    return <div>{error}</div>;
  }

  if (!patientData) {
    return <div>Loading...</div>;
  }

  // Destructure patientData
  const {
    nfcId,
    _id, // Keep this _id variable as is if it's required elsewhere
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
  } = patientData;

  return (
    <>
      <div>
        <Sidebar />
        <div className="ml-64 w-3/4 max-w-full">
          <Headers name="EDIT PATIENT" />
          <div className="absolute right-0 top-0 mx-4 max-w-lg">
            <WelcomeBack />
          </div>
          <EditPatient
            nfcId={nfcId}
            _id={_id}
            email={email}
            riwayatPenyakit={riwayatPenyakit}
            pasienStatus={pasienStatus}
            fullname={fullname}
            NIK={NIK}
            TTL={TTL}
            JenisKelamin={JenisKelamin}
            Alamat={Alamat}
            RT={RT}
            RW={RW}
            KelurahanDesa={KelurahanDesa}
            Kecamatan={Kecamatan}
            Agama={Agama}
            Pekerjaan={Pekerjaan}
            Kewarganegaraan={Kewarganegaraan}
            role={role}
          />
        </div>
      </div>
    </>
  );
};

export default EditDataPages;
