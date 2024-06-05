import React from "react";

export default function Layout({
  children,
  modal,
  riwayat,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  riwayat: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
      {riwayat}
    </>
  );
}
