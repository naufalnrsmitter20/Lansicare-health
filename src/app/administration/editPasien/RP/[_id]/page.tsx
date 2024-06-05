import React from "react";
import ModalRiwayatPenyakit from "../../../components/content/ModalRiwayatPenyakit";

const getTopicById = async (_id: string): Promise<PatientData> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};
export default async function EditRP({ params }: { params: { _id: string } }) {
  const { _id: patientId } = params;

  let patientData: PatientData | null = null;

  try {
    patientData = await getTopicById(patientId);
  } catch (error: any) {
    console.error(error.message);
    return <div>Error loading patient data.</div>;
  }

  if (!patientData) {
    return <div>No patient data found.</div>;
  }

  const { _id, riwayatPenyakit } = patientData;
  return (
    <div>
      <div className="mt-28">
        <ModalRiwayatPenyakit _id={_id} riwayatPenyakit={riwayatPenyakit} />
      </div>
    </div>
  );
}
