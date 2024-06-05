import React from "react";
import ModalRiwayatPenyakit from "../../../component/modal/ModalRiwayatPenyakit";

const getTopicById = async (_id: string): Promise<PatientData> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

export default async function DetailRiwayatPenyakit(props: any) {
  const { params } = props;

  let patientData: PatientData | null = null;

  try {
    patientData = await getTopicById(params._id);
  } catch (error: any) {
    console.error(error.message);
    return <div>Error loading patient data.</div>;
  }

  if (!patientData) {
    return <div>No patient data found.</div>;
  }

  const { _id, riwayatPenyakit } = patientData;

  return (
    <div className="mt-28">
      <ModalRiwayatPenyakit _id={_id} riwayatPenyakit={riwayatPenyakit} />
    </div>
  );
}
