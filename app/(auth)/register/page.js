"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import FormInput from "../../../components/reusable/FormInput";
import Image from "next/image";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../../config/axiosConfig";
import { toast } from "react-toastify";
import { mediaSpaceKey } from "../../../sanity/env";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}user/register`, data, {
        headers: {
          Authorization: `Bearer ${mediaSpaceKey}`,
        },
      });

      // save token localstorage
      localStorage.setItem("token", res.data.data.accessToken);
      reset();

      toast.success(`${res.data.message}`);
      router.push("/");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <div className=" dark:bg-[#060C18] flex py-8 lg:gap-6 pl-[5%] sm:pl-[10%] pr-[5%] sm:pr-[10%] text-sm poppins-4 dark:text-white">
      {/* image bg */}
      <div className=" hidden lg:block flex-1 w-1/2">
        <Image src="/oaksRR.png" height={500} width={600} className="" />
      </div>

      {/* login main */}
      <div className="flex-1 lg:w-1/2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="poppins-4 bg-[#F1F1F9] rounded-[30px] px-6 lg:px-8 shadow-lg py-10 flex flex-col gap-4 justify-center dark:glassmorphism-sec"
        >
          <h3 className="font-semibold text-center text-3xl text-main-light dark:text-secondary-green tracking-wide">
            Register
          </h3>

          <p className="text-center poppins-4 my-3 text-secondary-main-light dark:text-secondary-main">
            Already have an account?
            <Link href="/login">
              <span className="underline text-blue-500 pl-3">Login</span>
            </Link>
          </p>

          <div className="flex items-center gap-5 ">
            <button className="flex flex-1 items-center justify-center p-2 gap-3 rounded-md border hover:border-[#202046]">
              <FcGoogle />
              <span className="text-sm">Google</span>
            </button>

            <button className="flex flex-1 items-center justify-center gap-3 p-2 rounded-md border hover:border-[#202046]">
              <FaFacebook />
              <span className="text-sm">Facebook</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <hr className="flex-1" />

            <span className="mx-3">or</span>

            <hr className="flex-1" />
          </div>

          <FormInput
            register={register}
            validationRules={{ required: "email is required" }}
            name="email"
            IconLeft={MdOutlineEmail}
            type="email"
            placeholder="Email"
            label="Email"
            error={errors.email}
          />

          <FormInput
            register={register}
            validationRules={{
              required: "username is required",
            }}
            name="username"
            type="text"
            placeholder="username"
            label="Username"
            IconLeft={FaRegUser}
            error={errors.username}
          />

          <FormInput
            register={register}
            validationRules={{
              required: "display name is required",
            }}
            name="display_name"
            type="text"
            placeholder="display name"
            label="Display name"
            IconLeft={FaRegUser}
            error={errors.displayName}
          />

          <FormInput
            register={register}
            validationRules={{
              required: "password is required",
            }}
            name="password"
            IconRightOne={HiOutlineEyeOff}
            IconRightTwo={HiOutlineEye}
            type="password"
            placeholder="******"
            label="Password"
            error={errors.password}
          />

          <FormInput
            register={register}
            validationRules={{
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            }}
            name="confirm_password"
            IconRightOne={HiOutlineEyeOff}
            IconRightTwo={HiOutlineEye}
            type="password"
            placeholder="******"
            label="Confirm Password"
            error={errors.confirmPassword}
          />

          <button className="w-full mt-6 p-2 rounded-md  text-center bg-secondary-green text-white">
            {isSubmitting ? (
              <BeatLoader
                color="#FFF"
                margin={2}
                size={10}
                speedMultiplier={0.5}
              />
            ) : (
              "Submit"
            )}
          </button>

          <div className="text-center">
            <span>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
