import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Logo from "../../assets/oaks-logo.svg";
import { GrInstagram, GrYoutube } from "react-icons/gr";
import { FaFacebook, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import NewsLetterSubscribe from "./NewsLetterSubscribe";
import SocialMediaEmbed from "../SocialMediaEmbed";
import { usePathname } from "next/navigation";
import threadsLogo from "../../assets/threads.png";
import { RiTwitterXLine } from "react-icons/ri";

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
        className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 items-center overflow-visible"
      >
        {/* {pathname !== "/terms" && <SocialMediaEmbed />} */}
        <div className="flex flex-wrap flex-row gap-y-[50px] px-[5%] w-full gap-[clamp(20px,5vw,30px)] mt-10 min-[524px]:justify-between">
          <div className="flex flex-col w-[80%] min-w-[240px] gap-6 min-[524px]:w-[21%]">
            <Link href={"/"}>
              <Image alt="company-logo" src={Logo} className="max-w-[150px]" />
            </Link>
            <p className="poppins-4 text-main text-base pr-2">
              Experience the power of custom software solutions tailored to your
              business needs.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link target="_blank" href="https://twitter.com/Oaksintel">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    color: "white",
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <RiTwitterXLine size={18} />
                </motion.p>
              </Link>
              <Link target="_blank" href="https://web.facebook.com/oaksintel">
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
              <Link target="_blank" href="https://www.instagram.com/oaksintel/">
                <motion.p
                  initial={{
                    color: "#B7B7B7",
                    scale: 1,
                    background:
                      "linear-gradient(to right top, #ffff0000, #ff000000, #80008000 50%)",
                    borderRadius: "6px",
                  }}
                  whileHover={{
                    color: "white",
                    scale: 1.2,
                    background:
                      "linear-gradient(to right top, #ffff00, #ff0000, #800080 50%)",
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <GrInstagram size={18} />
                </motion.p>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/oaks-intelligence-limited/"
              >
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
              <Link target="_blank" href="https://www.tiktok.com/@oaksintel">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    color: "cyan",
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <FaTiktok size={18} className="shadow-red-800" />
                </motion.p>
              </Link>
              <Link target="_blank" href="https://www.threads.net/@oaksintel">
                <motion.p
                  initial={{ color: "#B7B7B7", scale: 1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3, type: "spring", bounce: 0.6 },
                  }}
                >
                  <Image
                    width={18}
                    height={18}
                    src={threadsLogo}
                    alt="threads"
                    className="invert-[0.8] brightness-50 hover:invert hover:brightness-200"
                  />
                </motion.p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-[80%] min-w-[240px] gap-6 min-[524px]:w-[21%]">
            <p className="poppins-6 text-white text-xl">Address</p>
            {/* <p className="flex gap-2 items-center">
              <BsFillTelephoneFill
                size={18}
                color="#B7B7B7"
                className="block min-w-[18px] min-h-[18px]"
              />
              <span className="poppins-4 text-main text-base text-justify">
                +012 345 67890
              </span>
            </p> */}
            <p className="flex gap-2 items-center">
              <MdEmail
                size={18}
                color="#B7B7B7"
                className="block min-w-[18px] min-h-[18px]"
              />
              <span className="poppins-4 text-main text-base text-justify">
                info@oaksintelligence.co
              </span>
            </p>
            {/* <p className="flex gap-2 items-start">
              <IoLocationOutline
                size={18}
                color="#B7B7B7"
                className="block min-w-[18px] min-h-[18px]"
              />
              <span className="poppins-4 text-main text-base block ">
                27 Iwaya Road, Onike-Sabo, Yaba, Lagos, Nigeria
              </span>
            </p> */}
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

        <div className="px-[5%] w-full">
          <hr className="border-gray-800 w-full mt-10 mb-5" />
        </div>
        <p className="poppins-4  px-[5%] text-center text-main md:text-[15px]">
          &copy; <span className="text-[#399944]">Oaks Intelligence </span>
          {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
