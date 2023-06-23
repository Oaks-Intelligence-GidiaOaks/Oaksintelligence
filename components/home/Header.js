"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oaks-logo.svg";
import LogoDark from "../../assets/oaks-logo-dark.svg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ThemeSwitch from "../ThemeSwitch";

const Header = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    !pathname.includes("/studio") && (
      <div className="w-full bg-white dark:bg-main sticky top-0 z-40">
        <div className="relative flex mx-auto justify-between max-w-[1440px] z-50 py-3 sm:py-5 pl-[5%] sm:pl-[10%] pr-[5%] sm:pr-[10%] items-center">
          <Link href={"/"} className="relative">
            <Image
              alt="company-logo"
              src={LogoDark}
              className={`${
                theme === "light" ? "block" : "hidden"
              } absolute max-w-[150px]`}
            />
            <Image
              alt="company-logo"
              src={Logo}
              className={`${
                theme !== "light" ? "block" : "hidden"
              }absolute max-w-[150px]`}
            />
          </Link>
          <div className="flex flex-1 justify-end gap-[5%] items-center ">
            <ul className="hidden flex-1 justify-end poppins-6 text-main-light dark:text-main gap-[5%] items-center min-[980px]:flex">
              <Link
                href="/"
                className={`${
                  theme !== "light" && pathname === "/"
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px]`}
              >
                <li
                  className={`${
                    pathname === "/" ? "text-secondary-green" : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link
                href="/about"
                className={`${
                  theme !== "light" && pathname === "/about"
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px]`}
              >
                <li
                  className={`${
                    pathname === "/about" ? "text-secondary-green" : ""
                  } whitespace-nowrap`}
                >
                  About Us
                </li>
              </Link>
              <Link
                href="/contact"
                className={`${
                  theme !== "light" && pathname === "/contact"
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px]`}
              >
                <li
                  className={`${
                    pathname === "/contact" ? "text-secondary-green" : ""
                  } whitespace-nowrap`}
                >
                  Contact Us
                </li>
              </Link>
              <Link
                href="/blog"
                onClick={() => setShowMenu(false)}
                className={`${
                  theme !== "light" && pathname === "/blog"
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px]`}
              >
                <li
                  className={`${
                    pathname === "/blog"
                      ? "text-secondary-green"
                      : "text-main-light dark:text-main"
                  }`}
                >
                  Blog
                </li>
              </Link>
            </ul>
            <div className="hidden p-2 cursor-pointer min-[980px]:block">
              <ThemeSwitch theme={theme} setTheme={setTheme} />
            </div>
            <button
              className="block p-2 cursor-pointer min-[980px]:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <IoClose
                  size={28}
                  color={theme === "light" ? "#060C18" : "#ffffff"}
                />
              ) : (
                <HiMenu
                  size={28}
                  color={theme !== "light" ? "#ffffff" : "#060C18"}
                />
              )}
            </button>
          </div>
        </div>
        {showMenu && (
          <div>
            <div className="min-[980px]:hidden pt-[10vh] fixed top-0 w-full h-full z-30 bg-white dark:bg-main ">
              <div className="flex justify-between h-full w-full flex-col gap-[5%] ">
                <ul className="flex flex-[0.6] flex-col gap-[10vh] justify-center poppins-6 items-center mt-[10vh]">
                  <Link
                    href="/"
                    onClick={() => setShowMenu(false)}
                    className={`${
                      theme !== "light" && pathname === "/"
                        ? "glassmorphism-sec-link"
                        : ""
                    } px-[15px] py-[5px]`}
                  >
                    <li
                      className={`${
                        pathname === "/"
                          ? "text-secondary-green"
                          : "text-main-light dark:text-main"
                      }`}
                    >
                      Home
                    </li>
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setShowMenu(false)}
                    className={`${
                      theme !== "light" && pathname === "/about"
                        ? "glassmorphism-sec-link"
                        : ""
                    } px-[15px] py-[5px]`}
                  >
                    <li
                      className={`${
                        pathname === "/about"
                          ? "text-secondary-green"
                          : "text-main-light dark:text-main"
                      }`}
                    >
                      About Us
                    </li>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setShowMenu(false)}
                    className={`${
                      theme !== "light" && pathname === "/contact"
                        ? "glassmorphism-sec-link"
                        : ""
                    } px-[15px] py-[5px]`}
                  >
                    <li
                      className={`${
                        pathname === "/contact"
                          ? "text-secondary-green"
                          : "text-main-light dark:text-main"
                      }`}
                    >
                      Contact Us
                    </li>
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setShowMenu(false)}
                    className={`${
                      theme !== "light" && pathname === "/blog"
                        ? "glassmorphism-sec-link"
                        : ""
                    } px-[15px] py-[5px]`}
                  >
                    <li
                      className={`${
                        pathname === "/blog"
                          ? "text-secondary-green"
                          : "text-main-light dark:text-main"
                      }`}
                    >
                      Blog
                    </li>
                  </Link>
                </ul>
                <div className="block mx-auto p-10 cursor-pointer sm:block">
                  <ThemeSwitch theme={theme} setTheme={setTheme} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Header;
