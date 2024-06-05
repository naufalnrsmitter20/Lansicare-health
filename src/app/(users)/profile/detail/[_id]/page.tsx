import ModalUsers from "../../../component/modal/ModalUsers";

const getTopicById = async (_id: string): Promise<PatientData> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

export default async function addDetailProfile(props: any) {
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
  } = patientData;

  return (
    <div className="mt-28">
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
    </div>
  );
}
