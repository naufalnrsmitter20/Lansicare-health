import ModalUsers from "@/src/app/(users)/component/modal/ModalUsers";
import ModalEditProfile from "@/src/app/(users)/component/ModalEditProfile";

const getTopicById = async (_id: string): Promise<PatientData> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

export default async function addDetailsProfile(props: any) {
  const { params } = props;

  let patientdata: PatientData | null = null;

  try {
    patientdata = await getTopicById(params._id);
  } catch (error: any) {
    console.error(error.message);
    return <div>Error loading patient data.</div>;
  }

  if (!patientdata) {
    return <div>No patient data found.</div>;
  }

  const {
    _id,
    pasienStatus,
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
    fullname,
  } = patientdata;

  return (
    <>
      <ModalEditProfile>
        <ModalUsers
          _id={_id}
          fullname={fullname}
          pasienStatus={pasienStatus}
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
        />
      </ModalEditProfile>
    </>
  );
}
