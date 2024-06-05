"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import EditPatient from "../../components/content/EditPatient";
import WelcomeBack from "../../components/WelcomeBack";

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
        <div className="ml-64 mt-6 w-3/4 max-w-full">
          {role === "pasien" && <Headers name="EDIT PASIEN" />}
          {role === "dokter" && <Headers name="EDIT DOKTER" />}
          <div className="absolute right-0 top-0 mx-4 max-w-lg">
            <WelcomeBack />
          </div>
          <EditPatient
            nfcId={nfcId}
            _id={_id}
            email={email}
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
