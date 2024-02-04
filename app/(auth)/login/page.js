"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { baseUrl } from "../../../config/axiosConfig";
import FormInput from "../../../components/reusable/FormInput";
import { mediaSpaceKey } from "../../../sanity/env";
import Cookies from "js-cookie";

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}user/login`, data, {
        headers: {
          Authorization: `Bearer ${mediaSpaceKey}`,
        },
      });

      // save to localstorage or cookie
      Cookies.set("token", res.data.data.accessToken, { expires: 7 });
      localStorage.setItem("token", res.data.data.accessToken);
      reset();

      // toast success
      toast.success(`login successful`);
      router.push("/");
    } catch (err) {
      toast.error(`${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className=" dark:bg-[#060C18] grid place-items-center py-8 lg:gap-6 pl-[5%] sm:pl-[10%] pr-[5%] sm:pr-[10%] text-sm poppins-4 dark:text-white">
      <div className="rounded-full dark:border p-6 grid place-items-center w-[512px] h-[512px] relative">
        <div className="w-[512px] h-[512px] rounded-full blur-sm backdrop-filter backdrop-blur-md absolute inset-0 z-10" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 w-full px-10 z-20"
        >
          <FormInput
            type="text"
            name="identifier"
            register={register}
            validationRules={{ required: "email is required" }}
            placeholder="email"
            label="Email"
            error={errors.identifier}
          />

          <FormInput
            IconRightOne={HiOutlineEyeOff}
            IconRightTwo={HiOutlineEye}
            type="password"
            placeholder="*****"
            label="Password"
            name="password"
            register={register}
            validationRules={{ required: "password is required" }}
            error={errors.password}
          />

          <button
            disabled={isSubmitting}
            className={`${
              isSubmitting
                ? `!bg-gray-500 cursor-not-allowed`
                : `bg-secondary-green`
            }  w-full mt-6 p-2 rounded-md  text-center  text-white`}
          >
            {isSubmitting ? (
              <BeatLoader
                color="#FFF"
                margin={2}
                size={10}
                speedMultiplier={0.5}
              />
            ) : (
              "Login"
            )}
          </button>

          <div className="flex items-center justify-between">
            <Link href="/register">
              <span className="text-secondary-main">Register</span>
            </Link>

            <span>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
