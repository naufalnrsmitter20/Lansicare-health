import { Button, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CarouselButton, LoadingButton } from "./buttons/Button";
import SpinnerProops from "./spinners/Spinner";
import Toaster from "../../administration/components/utilities/Toaster";
import { FaTelegramPlane } from "react-icons/fa";

const ScriptURL =
  "https://script.google.com/macros/s/AKfycbzEhRYDsstw2b4UPkz6qwhJ90HIe7V5G-NAfdf-1k1zLiq6WwdcvcGdCxS0tTQhPMplwA/exec";

const Forms: React.FC = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [komentar, setKomentar] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);
    setIsVisible(false);
    try {
      const response = await fetch(ScriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      console.log("Success!", response);
      setIsMutating(false);
      setIsVisible(true);
      router.refresh();
    } catch (error) {
      console.error("Error!", (error as Error).message);
    }
  };

  return (
    <form name="form-komentar" onSubmit={handleSubmit}>
      <div className="relative my-8  px-10">
        <div className="mb-4">
          <label
            htmlFor="nama"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Nama{" "}
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue"
            placeholder="Masukkan Nama"
            disabled={isVisible}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue"
            placeholder="Masukkan Email"
            disabled={isVisible}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Komentar"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Komentar{" "}
          </label>
          <textarea
            id="Komentar"
            name="komentar"
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue"
            placeholder="Komentar Anda"
            disabled={isVisible}
            required
          />
        </div>
        {!isMutating ? (
          <>
            {!isVisible ? (
              <CarouselButton type="submit">Submit</CarouselButton>
            ) : (
              <CarouselButton disabled={true} type="button">
                Pesan Terkirim
              </CarouselButton>
            )}
          </>
        ) : (
          <LoadingButton type="button">
            <Spinner theme={SpinnerProops.spinner} color="white" />
            <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">
              Loading...
            </p>
          </LoadingButton>
        )}
      </div>
      {isVisible && (
        <Toaster
          type={<FaTelegramPlane className="h5 w-5" />}
          message="Komentar Anda Berhasil Terkirim"
        />
      )}
    </form>
  );
};

export default Forms;
