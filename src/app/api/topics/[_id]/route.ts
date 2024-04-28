import { NextRequest, NextResponse } from "next/server";
import connect from "@/src/utils/db";
import User from "@/src/models/userModel";

interface NewUserResponse {
  _id: string;
  fullname: string;
  email: string;
  role: string;
  Agama: string;
  Alamat: string;
  JenisKelamin: string;
  Kecamatan: string;
  KelurahanDesa: string;
  Kewarganegaraan: string;
  NIK: number;
  Pekerjaan: string;
  RT: number;
  RW: number;
  TTL: Date;
  riwayatPenyakit: string;
  StatusPerkawinan: boolean;
  nfcId: number;
  pasienStatus: string;
  tanggalCheckup: string;
  rumah_sakit: string;
  nama_dokter: string;
  status_dokter: string;
  spesialis: string;
  penyakit: string;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { _id: string } },
) {
  const { _id } = params;
  const {
    newNfcId: nfcId,
    newEmail: email,
    newRiwayatPenyakit: riwayatPenyakit,
    newPasienStatus: pasienStatus,
    newFullname: fullname,
    newNIK: NIK,
    newTTL: TTL,
    newJenisKelamin: JenisKelamin,
    newAlamat: Alamat,
    newRT: RT,
    newRW: RW,
    newKelurahanDesa: KelurahanDesa,
    newKecamatan: Kecamatan,
    newAgama: Agama,
    newStatusPerkawinan: StatusPerkawinan,
    newPekerjaan: Pekerjaan,
    newKewarganegaraan: Kewarganegaraan,
    newBerlakuHingga: BerlakuHingga,
    newRole: role,
    newTanggalCheckup: tanggalCheckup,
    newRumahSakit: rumah_sakit,
    newNamaDokter: nama_dokter,
    newStatusDokter: status_dokter,
    newSpesialis: spesialis,
    newPenyakit: penyakit,
  } = await request.json();
  await connect();
  await User.findByIdAndUpdate(
    _id,
    {
      nfcId,
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
      StatusPerkawinan,
      Pekerjaan,
      Kewarganegaraan,
      BerlakuHingga,
      role,
      tanggalCheckup,
      rumah_sakit,
      nama_dokter,
      status_dokter,
      spesialis,
      penyakit,
    },
    { new: true, runValidators: true },
  );
  return NextResponse.json({ message: "Patient updated" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { _id: string } },
) {
  const { _id } = params;
  await connect();
  const pasien = await User.findOne({ _id: _id });
  return NextResponse.json(pasien, { status: 200 });
}
