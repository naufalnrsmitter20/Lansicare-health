import React from "react";
import ModalEditProfile from "../../../../component/ModalEditProfile";
import ModalRiwayatPenyakit from "../../../../component/modal/ModalRiwayatPenyakit";

const getTopicById = async (_id: string): Promise<PatientData> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

export default async function AddModalRiwayatPenyakit(props: any) {
  const { params } = props;
  let patientdata: PatientData | null = null;

  try {
    patientdata = await getTopicById(params._id);
  } catch (error: any) {
    console.error(error.message);
    return <div>Error loading Riwayat Penyakit.</div>;
  }

  if (!patientdata) {
    return <div>No Riwayat Penyakit found.</div>;
  }

  const { _id, riwayatPenyakit } = patientdata;

  const riwayatPenyakitString = JSON.stringify(riwayatPenyakit);

  return (
    <>
      <ModalEditProfile>
        <ModalRiwayatPenyakit _id={_id} riwayatPenyakit={riwayatPenyakit} />
      </ModalEditProfile>
    </>
  );
}
