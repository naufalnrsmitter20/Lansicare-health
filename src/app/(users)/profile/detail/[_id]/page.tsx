import { getData } from "@/services/profiles";
import ModalUsers from "../../../component/modal/ModalUsers";

interface Patient {
  nfcId: number;
  _id: string;
  riwayatPenyakit: string;
  pasienStatus: string;
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
  email: string;
  fullname: string;
}

const getTopicById = async (_id: string): Promise<Patient> => {
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

  let patientData: Patient | null = null;

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
    nfcId,
    _id,
    riwayatPenyakit,
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
    email,
    fullname,
  } = patientData;

  return (
    <div className="mt-28">
      <ModalUsers
        nfcId={nfcId}
        _id={_id}
        email={email}
        fullname={fullname}
        riwayatPenyakit={riwayatPenyakit}
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
