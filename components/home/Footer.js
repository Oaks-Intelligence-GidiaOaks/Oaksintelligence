import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/oaks-logo.svg";
import { GrTwitter, GrYoutube } from "react-icons/gr";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import NewsLetterSubscribe from "./NewsLetterSubscribe";

const Footer = () => {
  return (
    <div className="w-full bg-dark-blue dark:bg-dark-black">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] items-center overflow-visible">
        <div className="flex flex-wrap flex-row gap-y-[50px] w-full justify-between gap-[clamp(20px,5vw,30px)] mt-10">
          <div className="flex flex-col w-[21%] min-w-[240px] gap-6">
            <Link href={"/"}>
              <Image alt="company-logo" src={Logo} className="max-w-[150px]" />
            </Link>
            <p className="poppins-4 text-main text-base pr-2">
              Experience the power of custom software solutions tailored to your
              business needs.
            </p>
            <div className="flex gap-8">
              <GrTwitter size={18} color="#B7B7B7" />
              <FaFacebook size={18} color="#B7B7B7" />
              <GrYoutube size={18} color="#B7B7B7" />
              <FaLinkedinIn size={18} color="#B7B7B7" />
            </div>
          </div>
          <div className="flex flex-col w-[21%] min-w-[240px] gap-6">
            <p className="poppins-6 text-white text-xl">Address</p>
            <p className="flex gap-2 items-center">
              <BsFillTelephoneFill size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                +012 345 67890
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <MdEmail size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                info@example.com
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <IoLocationOutline size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                123 Street, New York, USA
              </span>
            </p>
          </div>
          <div className="flex flex-col w-[21%] min-w-[240px] gap-4">
            <p className="poppins-6 text-white text-xl mb-2">Quick Links</p>
            <p className="flex gap-2 items-center">
              <BiChevronRight size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                About Us
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <BiChevronRight size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                Contact Us
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <BiChevronRight size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                Our Services
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <BiChevronRight size={18} color="#B7B7B7" />
              <span className="poppins-4 text-main text-base text-justify">
                Terms & Condition
              </span>
            </p>
          </div>
          <NewsLetterSubscribe />
        </div>
        <hr className="border-gray-800 w-full  mt-10 mb-5" />
        <p className="poppins-4 text-center text-main md:text-[15px]">
          &copy; <span className="text-[#399944]">Oaks Intelligence </span>
          {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
