"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import EditPatient from "../../components/content/EditPatient";
import WelcomeBack from "../../components/WelcomeBack";

interface PatientData {
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
  role: string;
  tanggalCheckup: string;
  rumah_sakit: string;
  nama_dokter: string;
  spesialis: string;
  penyakit: string;
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
  }, [patientId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!patientData) {
    return <div>Loading...</div>;
  }

  const {
    nfcId,
    _id,
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
  } = patientData;

  return (
    <>
      <div>
        <Sidebar />
        <div className="ml-64 w-3/4 max-w-full">
          {role === "user" && <Headers name="EDIT PATIENT" />}
          {role === "admin" && <Headers name="EDIT ADMIN" />}
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
            tanggalCheckup={tanggalCheckup}
            rumah_sakit={rumah_sakit}
            nama_dokter={nama_dokter}
            spesialis={spesialis}
            penyakit={penyakit}
          />
        </div>
      </div>
    </>
  );
};

export default EditDataPages;
