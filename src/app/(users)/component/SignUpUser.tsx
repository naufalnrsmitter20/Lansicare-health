"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import SignupImage from "@/public/SignUpImageSide.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { error } from "console";
import { signIn } from "next-auth/react";

export default function SignUpUser() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { fullname, email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/auth/users", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(userInfo),
    })
      .then((res: any) => {
        if (res.ok) {
          router.push("/signin");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        throw new Error(error);
      });
  };
  return (
    <>
      <section className="lg:min-w-xl flex flex-1 flex-col justify-center bg-base-50 pt-28 align-middle lg:mt-20 lg:h-full lg:px-8 lg:pb-40 lg:pt-40">
        <div className="max-h-xl lg:max-h-3xl m-auto h-fit w-full max-w-[350px] justify-around rounded-[15px] bg-primary-1000 px-5 shadow-md lg:flex lg:max-w-7xl lg:px-0 lg:pb-5 lg:pr-20 lg:pt-5">
          <h1 className="mt-10 text-center text-3xl font-bold md:hidden">
            Hi User!
          </h1>
          <main className="mt-10">
            <Image
              className="hidden md:block"
              src={SignupImage}
              width={397.22}
              height={305.61}
              alt="SignUp Image"
            />
          </main>
          <main className="w-full max-w-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-5 mt-5">
                <label
                  htmlFor="fullname"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Email"
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
                  value={password}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div>
                <button
                  disabled={isLoading}
                  type={"submit"}
                  className="w-full max-w-full rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-darkBlue"
                >
                  <p className="text-center text-[12px] font-medium lg:text-[14px]">
                    Sign Up
                  </p>
                </button>

                <p className="mb-[12px] mt-[20px] text-center text-[14px] font-semibold text-base-100 lg:text-[18px]">
                  Or Sign Up with
                </p>
                <div className="mt-7 grid grid-cols-1 gap-2">
                  <Link
                    href={"/signin"}
                    className="mb-2 me-2 w-full rounded-lg border-2 px-5 py-2.5 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <p className="text-center text-[12px] font-medium lg:text-[14px]">
                      Sign In with Google
                    </p>
                  </Link>
                </div>
                <p className="mt-[20px] text-center text-[14px] font-semibold text-base-100 lg:text-[18px]">
                  Already have an account?
                </p>
                <div className="mb-[45px] mt-7 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue px-3 py-1 text-sm font-medium text-base-100 hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-darkBlue lg:px-5 lg:py-2.5"
                  >
                    <p className="text-[12px] font-medium lg:text-[14px]">
                      Forgot Password?
                    </p>
                  </button>
                  <Link
                    href={"/signin"}
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-darkBlue"
                  >
                    <p className="text-center text-[12px] font-medium lg:text-[14px]">
                      Login
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  );
}
