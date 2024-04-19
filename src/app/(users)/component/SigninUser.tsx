// TODO: update button
"use client";

import React, { useState } from "react";
import SigninImage from "@/public/SignInImageSide.png";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Flowbite } from "flowbite-react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./buttons/Button";

export default function SigninUser() {
  const { data: session, status } = useSession();
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/profile",
      });
      if (!res?.error) {
        window.location.reload();
      } else {
        if (res.status === 401) {
          setError("Email or Password is Incorrect");
        }
        console.log(res);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (status === "authenticated") {
    window.location.reload();
  }
  return (
    <>
      <section className="flex flex-1 flex-col justify-center bg-base-50 py-[50px] align-middle lg:mt-20 lg:h-full lg:min-w-full lg:px-8 lg:py-[100px]">
        <div className="mx-[20px] mt-[50px] max-h-[650px] justify-around rounded-[15px] bg-primary-1000 pt-5 shadow-md lg:m-auto lg:mt-0 lg:flex lg:h-fit lg:w-full lg:max-w-[1100px] lg:pr-[40px]">
          <main className="m-auto">
            <Image
              className="hidden items-center md:block"
              src={SigninImage}
              width={560}
              height={392}
              alt="SignIn Image"
            />
          </main>
          <main className="w-full max-w-lg px-5 lg:px-0">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-10 mt-10 justify-center text-center text-3xl font-extrabold lg:mt-20 lg:text-[32px]">
                Hi User!
              </h1>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-darkBlue focus:ring-darkBlue"
                  placeholder="Enter Your email"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-darkBlue focus:ring-darkBlue"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-[70px] mt-[20px]">
                <div className="mt-7 grid grid-cols-1 gap-2">
                  <PrimaryButton disabled={IsLoading} type="submit">
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      {IsLoading ? "Loading..." : "Sign In"}
                    </p>
                  </PrimaryButton>
                </div>
                <div className="mt-[20px] grid grid-cols-2 gap-2">
                  <SecondaryButton type="button">
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      Forgot Password?
                    </p>
                  </SecondaryButton>
                  <PrimaryButton type="button" href="/signup">
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      Sign Up
                    </p>
                  </PrimaryButton>
                </div>
                <hr className="mt-4" />
                <TertiaryButton
                  type="button"
                  className="w-full"
                  onClick={() => signIn("google")}
                >
                  <p className="text-[12px] font-medium lg:text-[14px]">
                    Sign In with Google
                  </p>
                </TertiaryButton>
                {error ? (
                  <p className="mb-4 text-sm text-red-600">{error}</p>
                ) : null}
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  );
}
