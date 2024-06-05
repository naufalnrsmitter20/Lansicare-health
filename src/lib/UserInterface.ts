interface DataAdmin {
  _id?: string;
  fullname?: string;
  email?: string;
  nama_dokter?: string;
  status_dokter?: "online" | "offline";
  JenisKelamin?: "Laki-Laki" | "Perempuan" | undefined;
  spesialis?: string;
  role?: "pasien" | "dokter" | "superadmin";
}

interface PatientData extends DataAdmin {
  _id: string;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: "Rawat-inap" | "Rawat-jalan";
  fullname: string;
  NIK: number;
  TTL: string;
  JenisKelamin: "Laki-Laki" | "Perempuan" | undefined;
  Alamat: string;
  RT: number;
  RW: number;
  KelurahanDesa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  role: "pasien" | "dokter" | "superadmin";
  tanggalCheckup: string;
  rumah_sakit: string;
  nama_dokter: string;
  spesialis: string;
  penyakit: string;
  updatedAt: string;
}
