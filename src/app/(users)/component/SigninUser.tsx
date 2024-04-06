"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import SigninImage from "@/public/SignInImageSide.png";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninUser() {
  const { data: session, status } = useSession();
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, refresh } = useRouter();
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // await signIn("email", { email });
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/profile",
      });
      if (!res?.error) {
        // setTimeout(() => {
        window.location.reload();
        // }, 2000);
        // await push("/profile");
        // setIsLoading(false);
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
    // setTimeout(() => {
    window.location.reload();
    // }, 2000);
    // push("/profile");
  }
  return (
    <>
      <section className="flex flex-1 flex-col justify-center bg-base-50 align-middle lg:mt-20 lg:h-full lg:min-w-full lg:px-8 lg:pt-[50px]">
        <div className=" max-h-3xl mx-[40px] mt-36 justify-around rounded-[15px] bg-primary-1000 pt-5 shadow-md lg:m-auto lg:mt-0 lg:flex lg:h-fit lg:w-full lg:max-w-7xl lg:pr-20">
          <main className="m-10">
            <Image
              className="hidden md:block"
              src={SigninImage}
              width={560.63}
              height={392.28}
              alt="SignIn Image"
            />
          </main>
          <main className="w-full max-w-lg px-5 lg:px-0">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-10 mt-10 justify-center text-center text-3xl font-bold lg:mt-20 lg:text-4xl">
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
                  // value={email}
                  // onChange={handleChange}
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
                  // value={password}
                  // onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-darkBlue focus:ring-darkBlue"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-[70px] mt-[20px]">
                <div className="mt-7 grid grid-cols-1 gap-2">
                  <button
                    disabled={IsLoading}
                    type="submit"
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-darkBlue"
                  >
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      {IsLoading ? "Loading..." : "Login"}
                    </p>
                  </button>
                </div>
                <div className="mt-[20px] grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue px-3 py-1 text-sm font-medium text-base-100 hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-darkBlue lg:px-5 lg:py-2.5"
                  >
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      Forgot Password?
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => push("/signup")}
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-darkBlue"
                  >
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      Sign Up
                    </p>
                  </button>
                </div>
                <hr className="mt-4" />
                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="mb-2 me-2 mt-4 w-full rounded-lg border-2 px-5 py-2.5 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <p className="text-[12px] font-medium lg:text-[14px]">
                    Sign In with Google
                  </p>
                </button>
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
