"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oaks-logo.svg";
import LogoDark from "../../assets/oaks-logo-dark.svg";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoChevronDown, IoClose } from "react-icons/io5";
import ThemeSwitch from "../ThemeSwitch";
import AppContext from "@/contexts/AppContext";
import { useRef } from "react";

const Header = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const pathname = usePathname();
  const productsMenu = useRef(null);

  const closeProductsMenu = useCallback(
    (e) => {
      if (
        productsMenu.current &&
        showProductsMenu &&
        !productsMenu.current.contains(e.target)
      ) {
        setShowProductsMenu(false);
      }
    },
    [showProductsMenu]
  );

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "dark";
    setTheme(cachedTheme);
  }, [setTheme]);

  useEffect(() => {
    window.addEventListener("mousedown", closeProductsMenu);
    return () => {
      window.removeEventListener("mousedown", closeProductsMenu);
    };
  }, [closeProductsMenu]);

  return (
    !pathname.includes("/studio") && (
      <div className="w-full bg-white dark:bg-main sticky top-0 z-40 transition-[background] duration-500 ease-in-out">
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
            <ul className="hidden flex-1 justify-end poppins-6 text-main-light dark:text-main gap-[2%] min-[1350px]:gap-[3%] items-center min-[1180px]:flex transition-[background] duration-500 ease-in-out">
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
                href="/dashboard"
                onClick={() => setShowMenu(false)}
                className={`${
                  theme !== "light" && pathname.includes("/dashboard")
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px]`}
              >
                <li
                  className={`${
                    pathname.includes("/dashboard")
                      ? "text-secondary-green"
                      : "text-main-light dark:text-main"
                  }`}
                >
                  Dashboard
                </li>
              </Link>
              <Link
                href="/blog"
                onClick={() => setShowMenu(false)}
                className={`${
                  theme !== "light" && pathname.includes("/blog")
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px]`}
              >
                <li
                  className={`${
                    pathname.includes("/blog")
                      ? "text-secondary-green"
                      : "text-main-light dark:text-main"
                  }`}
                >
                  Blog
                </li>
              </Link>
              <div
                className={`${
                  theme !== "light" &&
                  (pathname.includes("/eco-kiddies") ||
                    pathname.includes("/eco-tales") ||
                    pathname.includes("/market-intelligence-reports") ||
                    pathname.includes("/surveys"))
                    ? "glassmorphism-sec-link"
                    : ""
                } px-[15px] py-[5px] relative`}
              >
                <li
                  className={`${
                    pathname.includes("/eco-kiddies") ||
                    pathname.includes("/eco-tales") ||
                    pathname.includes("/market-intelligence-reports") ||
                    pathname.includes("/surveys")
                      ? "text-secondary-green"
                      : "text-main-light dark:text-main"
                  } flex gap-1 items-center cursor-pointer`}
                  onClick={() => setShowProductsMenu(!showProductsMenu)}
                >
                  <span>Products</span>
                  <IoChevronDown
                    className={`${
                      showProductsMenu ? "rotate-180" : "rotate-0"
                    } transition-all`}
                  />
                </li>
                {/* Products nav */}
                <AnimatePresence>
                  {showProductsMenu && (
                    <motion.div
                      className="flex flex-col rounded-md absolute top-10 glassmorphism-menu dark:glassmorphism-menu-dark w-fit left-0"
                      onClick={() => setShowProductsMenu(false)}
                      initial={{ top: 0, opacity: 0 }}
                      animate={{ top: "40px", opacity: 1 }}
                      exit={{ top: 0, opacity: 0 }}
                      ref={productsMenu}
                    >
                      <Link
                        href="/eco-kiddies"
                        className={`${
                          theme !== "light" && pathname === "/eco-kiddies"
                            ? "glassmorphism-sec-link"
                            : ""
                        } px-[15px] py-[5px]`}
                      >
                        <li
                          className={`${
                            pathname === "/eco-kiddies"
                              ? "text-secondary-green"
                              : ""
                          } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                        >
                          Eco-Kiddies
                        </li>
                      </Link>
                      <Link
                        href="/eco-tales"
                        className={`${
                          theme !== "light" && pathname === "/eco-tales"
                            ? "glassmorphism-sec-link"
                            : ""
                        } px-[15px] py-[5px]`}
                      >
                        <li
                          className={`${
                            pathname === "/eco-tales"
                              ? "text-secondary-green"
                              : ""
                          } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                        >
                          Eco-Tales
                        </li>
                      </Link>
                      <Link
                        href="/market-intelligence-reports"
                        className={`${
                          theme !== "light" &&
                          pathname === "/market-intelligence-reports"
                            ? "glassmorphism-sec-link"
                            : ""
                        } px-[15px] py-[5px]`}
                      >
                        <li
                          className={`${
                            pathname === "/market-intelligence-reports"
                              ? "text-secondary-green"
                              : ""
                          } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                        >
                          Market Intelligence Reports
                        </li>
                      </Link>
                      <Link
                        href="/surveys"
                        className={`${
                          theme !== "light" && pathname === "/surveys"
                            ? "glassmorphism-sec-link"
                            : ""
                        } px-[15px] py-[5px]`}
                      >
                        <li
                          className={`${
                            pathname === "/surveys"
                              ? "text-secondary-green"
                              : ""
                          } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                        >
                          Surveys
                        </li>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ul>
            <div className="hidden p-2 cursor-pointer min-[1200px]:block">
              <ThemeSwitch theme={theme} setTheme={setTheme} />
            </div>
            <button
              className="block p-2 cursor-pointer min-[1180px]:hidden"
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
        <AnimatePresence>
          {showMenu && (
            <div>
              <motion.div
                initial={{ x: "-100vw" }}
                whileInView={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                  },
                }}
                exit={{ x: "-100vw" }}
                viewport={{ once: true }}
                className="min-[1180px]:hidden pt-[10vh] fixed top-0 w-screen h-full z-30 bg-white dark:bg-main transition-[background] duration-500 ease-in-out"
              >
                <div className="flex justify-between h-full w-full flex-col gap-[5%] ">
                  <ul className="flex flex-[0.6] flex-col gap-[7vh] justify-center poppins-6 items-center mt-[10vh]">
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
                      href="/dashboard"
                      onClick={() => setShowMenu(false)}
                      className={`${
                        theme !== "light" && pathname === "/dashboard"
                          ? "glassmorphism-sec-link"
                          : ""
                      } px-[15px] py-[5px]`}
                    >
                      <li
                        className={`${
                          pathname === "/dashboard"
                            ? "text-secondary-green"
                            : "text-main-light dark:text-main"
                        }`}
                      >
                        Dashboard
                      </li>
                    </Link>
                    <div
                      className={`${
                        theme !== "light" &&
                        (pathname.includes("/eco-kiddies") ||
                          pathname.includes("/eco-tales") ||
                          pathname.includes("/market-intelligence-reports") ||
                          pathname.includes("/surveys"))
                          ? "glassmorphism-sec-link"
                          : ""
                      } px-[15px] py-[5px] relative`}
                      ref={productsMenu}
                    >
                      <li
                        className={`${
                          pathname.includes("/eco-kiddies") ||
                          pathname.includes("/eco-tales") ||
                          pathname.includes("/market-intelligence-reports") ||
                          pathname.includes("/surveys")
                            ? "text-secondary-green"
                            : "text-main-light dark:text-main"
                        } flex gap-1 items-center cursor-pointer`}
                        onClick={() => setShowProductsMenu(!showProductsMenu)}
                      >
                        <span>Products</span>
                        <IoChevronDown
                          className={`${
                            showProductsMenu ? "rotate-180" : "rotate-0"
                          } transition-all`}
                        />
                      </li>
                      {/* Products nav */}
                      <AnimatePresence>
                        {showProductsMenu && (
                          <motion.div
                            className="flex flex-col rounded-md absolute -top-44 -left-1/2 glassmorphism-menu dark:glassmorphism-menu-dark w-fit"
                            onClick={() => setShowProductsMenu(false)}
                            initial={{ top: "-156px", opacity: 0 }}
                            animate={{ top: "-176px", opacity: 1 }}
                            exit={{ top: "-156px", opacity: 0 }}
                          >
                            <Link
                              href="/eco-kiddies"
                              className={`${
                                theme !== "light" && pathname === "/eco-kiddies"
                                  ? "glassmorphism-sec-link"
                                  : ""
                              } px-[15px] py-[5px]`}
                            >
                              <li
                                className={`${
                                  pathname === "/eco-kiddies"
                                    ? "text-secondary-green"
                                    : ""
                                } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                              >
                                Eco-Kiddies
                              </li>
                            </Link>
                            <Link
                              href="/eco-tales"
                              className={`${
                                theme !== "light" && pathname === "/eco-tales"
                                  ? "glassmorphism-sec-link"
                                  : ""
                              } px-[15px] py-[5px]`}
                            >
                              <li
                                className={`${
                                  pathname === "/eco-tales"
                                    ? "text-secondary-green"
                                    : ""
                                } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                              >
                                Eco-Tales
                              </li>
                            </Link>
                            <Link
                              href="/market-intelligence-reports"
                              className={`${
                                theme !== "light" &&
                                pathname === "/market-intelligence-reports"
                                  ? "glassmorphism-sec-link"
                                  : ""
                              } px-[15px] py-[5px]`}
                            >
                              <li
                                className={`${
                                  pathname === "/market-intelligence-reports"
                                    ? "text-secondary-green"
                                    : ""
                                } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                              >
                                Market Intelligence Reports
                              </li>
                            </Link>
                            <Link
                              href="/surveys"
                              className={`${
                                theme !== "light" && pathname === "/surveys"
                                  ? "glassmorphism-sec-link"
                                  : ""
                              } px-[15px] py-[5px]`}
                            >
                              <li
                                className={`${
                                  pathname === "/surveys"
                                    ? "text-secondary-green"
                                    : ""
                                } whitespace-nowrap p-1 border-gray-500 hover:text-secondary-green transition-all`}
                              >
                                Surveys
                              </li>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    )
  );
};

export default Header;
