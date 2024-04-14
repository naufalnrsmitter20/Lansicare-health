"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import SignupImage from "@/public/SignUpImageSide.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Flowbite } from "flowbite-react";
import ButtonProops from "./buttons/Button";

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
    await fetch("/api/auth/users", {
      method: "POST",
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
      <section className="flex flex-1 flex-col justify-center bg-base-50 py-[50px] align-middle lg:mt-20 lg:h-full lg:min-w-full lg:px-8 lg:py-[100px]">
        <div className="mx-[20px] mt-[50px] max-h-[650px] justify-around rounded-[15px] bg-primary-1000 pt-5 shadow-md lg:m-auto lg:mt-0 lg:flex lg:h-fit lg:w-full lg:max-w-[1100px] lg:pr-[40px]">
          <h1 className="mt-10 text-center text-3xl font-bold md:hidden">
            Hi User!
          </h1>
          <main className="m-auto">
            <Image
              className="hidden md:block"
              src={SignupImage}
              width={397.22}
              height={305.61}
              alt="SignUp Image"
            />
          </main>
          <main className="w-full max-w-lg px-5 lg:px-0">
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-darkBlue focus:ring-darkBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-darkBlue focus:ring-darkBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-darkBlue focus:ring-darkBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <Flowbite theme={{ theme: ButtonProops }}>
                <div>
                  <Button
                    className="w-full"
                    disabled={isLoading}
                    type={"submit"}
                    color="primary"
                  >
                    <p className="text-center text-[12px] font-medium lg:text-[14px]">
                      Sign Up
                    </p>
                  </Button>

                  <p className="mt-[20px] text-center text-[14px] font-semibold text-base-100 lg:text-[18px]">
                    Already have an account?
                  </p>
                  <div className="mb-[45px] mt-7 grid grid-cols-2 gap-2">
                    <Button type="button" color="secondary">
                      <p className="text-[12px] font-medium lg:text-[14px]">
                        Forgot Password?
                      </p>
                    </Button>
                    <Button type="button" color="primary" href="/signin">
                      <p className="text-center text-[12px] font-medium lg:text-[14px]">
                        Sign In
                      </p>
                    </Button>
                  </div>
                </div>
              </Flowbite>
            </form>
          </main>
        </div>
      </section>
    </>
  );
}
