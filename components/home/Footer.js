import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Logo from "../../assets/oaks-logo.svg";
import { GrTwitter, GrYoutube } from "react-icons/gr";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import NewsLetterSubscribe from "./NewsLetterSubscribe";
import TwitterEmbed from "../TwitterEmbed";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-dark-blue dark:bg-dark-black transition-[background] duration-500 ease-in-out">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            type: "spring",
            bounce: 0.4,
          },
        }}
        className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] items-center overflow-visible"
      >
        {pathname !== "/terms" && <TwitterEmbed />}
        <div className="flex flex-wrap flex-row gap-y-[50px] w-full justify-center gap-[clamp(20px,5vw,30px)] mt-10 min-[524px]:justify-between">
          <div className="flex flex-col w-[80%] min-w-[240px] gap-6 min-[524px]:w-[21%]">
            <Link href={"/"}>
              <Image alt="company-logo" src={Logo} className="max-w-[150px]" />
            </Link>
            <p className="poppins-4 text-main text-base pr-2">
              Experience the power of custom software solutions tailored to your
              business needs.
            </p>
            <div className="flex gap-8">
              <Link href="#">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    color: "dodgerblue",
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <GrTwitter size={18} />
                </motion.p>
              </Link>
              <Link href="#">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    color: "#1f6ed3",
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <FaFacebook size={18} />
                </motion.p>
              </Link>
              <Link href="#">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    color: "red",
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <GrYoutube size={18} />
                </motion.p>
              </Link>
              <Link href="#">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    color: "#007cee",
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <FaLinkedinIn size={18} />
                </motion.p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-[80%] min-w-[240px] gap-6 min-[524px]:w-[21%]">
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
          <div className="flex flex-col w-[80%] min-w-[240px] gap-4 min-[524px]:w-[21%]">
            <p className="poppins-6 text-white text-xl mb-2">Quick Links</p>
            <Link href="/about" className="w-fit">
              <motion.p
                initial={{ color: "#f1f1f1", scale: 1 }}
                whileHover={{
                  color: "#eb8a00",
                  scale: 1.1,
                  transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                }}
                className="flex gap-2 items-center w-fit"
              >
                <BiChevronRight size={18} />
                <span className="poppins-4 text-base text-justify">
                  About Us
                </span>
              </motion.p>
            </Link>
            <Link href="/contact" className="w-fit">
              <motion.p
                initial={{ color: "#f1f1f1", scale: 1 }}
                whileHover={{
                  color: "#eb8a00",
                  scale: 1.1,
                  transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                }}
                className="flex gap-2 items-center w-fit"
              >
                <BiChevronRight size={18} />
                <span className="poppins-4 text-base text-justify">
                  Contact Us
                </span>
              </motion.p>
            </Link>
            <Link href="/about#services" scroll={false} className="w-fit">
              <motion.p
                initial={{ color: "#f1f1f1", scale: 1 }}
                whileHover={{
                  color: "#eb8a00",
                  scale: 1.1,
                  transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                }}
                className="flex gap-2 items-center w-fit"
              >
                <BiChevronRight size={18} />
                <span className="poppins-4 text-base text-justify">
                  Our Services
                </span>
              </motion.p>
            </Link>
            <Link href="/blog" className="w-fit">
              <motion.p
                initial={{ color: "#f1f1f1", scale: 1 }}
                whileHover={{
                  color: "#eb8a00",
                  scale: 1.1,
                  transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                }}
                className="flex gap-2 items-center w-fit"
              >
                <BiChevronRight size={18} />
                <span className="poppins-4 text-base text-justify">Blog</span>
              </motion.p>
            </Link>
            <Link href="/terms" className="w-fit">
              <motion.p
                initial={{ color: "#f1f1f1", scale: 1 }}
                whileHover={{
                  color: "#eb8a00",
                  scale: 1.1,
                  transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                }}
                className="flex gap-2 items-center w-fit"
              >
                <BiChevronRight size={18} />
                <span className="poppins-4 text-base text-justify">
                  Terms & Conditions
                </span>
              </motion.p>
            </Link>
          </div>
          <NewsLetterSubscribe />
        </div>
        <hr className="border-gray-800 w-full  mt-10 mb-5" />
        <p className="poppins-4 text-center text-main md:text-[15px]">
          &copy; <span className="text-[#399944]">Oaks Intelligence </span>
          {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;