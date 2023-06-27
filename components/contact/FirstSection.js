"use client";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppContext from "@/contexts/AppContext";
import GuyUsingPhone from "../../assets/contact/guy-using-phone.svg";
import GuyUsingPhoneDark from "../../assets/contact/guy-using-phone-dark.svg";
import { isValidEmail } from "form-fields-checker";
import { BiError, BiErrorCircle } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { Rings } from "react-loader-spinner";

const FirstSection = () => {
  const { theme } = useContext(AppContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mailerError, setMailerError] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    // reset errors
    setErrors({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    let valid = true;

    if (form.name.trim().length < 1) {
      valid = false;
      setErrors((prev) => ({ ...prev, ["name"]: "Name is required." }));
    }
    if (!isValidEmail(form.email.trim())) {
      valid = false;
      setErrors((prev) => ({ ...prev, ["email"]: "Email is not valid." }));
    }
    if (form.email.trim().length < 1) {
      valid = false;
      setErrors((prev) => ({ ...prev, ["email"]: "Email is required." }));
    }
    if (form.phone.trim().length < 1) {
      valid = false;
      setErrors((prev) => ({ ...prev, ["phone"]: "Phone is required." }));
    }
    if (form.phone.trim().length < 7 || form.phone.trim().length > 15) {
      valid = false;
      setErrors((prev) => ({ ...prev, ["phone"]: "Phone is not valid." }));
    }
    if (form.message.trim().split(" ").length < 5) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        ["message"]: "Message cannot be less than 5 words.",
      }));
    }
    if (form.message.trim().length < 1) {
      valid = false;
      setErrors((prev) => ({ ...prev, ["message"]: "Message is required." }));
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValid = validateForm();

    if (formValid) {
      setIsSending(true);
      try {
        const response = await fetch(`/api/send_email`, {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        if (data.message === "OK") {
          setIsSending(false);
          setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
        } else {
          setIsSending(false);
          setMailerError(true);
          setTimeout(() => setMailerError(false), 5000);
        }
      } catch (error) {
        setIsSending(false);
        setMailerError(true);
        setTimeout(() => setMailerError(false), 5000);
      }
    } else {
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="flex mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
          className="hidden sm:flex w-full p-5 min-h-[100px] items-center bg-[#F1F1F9] rounded-[30px] dark:glassmorphism-sec px-[8%] pt-[3%] pb-[5%]"
        >
          <div className="flex-[0.5] items-center justify-center">
            <Image
              alt="lady-using-smartphone"
              src={theme === "light" ? GuyUsingPhone : GuyUsingPhoneDark}
              className="w-[90%]"
            />
          </div>
          <div className="flex-[0.5] ">
            <div className="flex flex-col justify-center h-full gap-[5%]">
              <p className="text-[2.3rem] text-main-light dark:gradient-text">
                <p className="poppins-4">
                  <span>We build for</span>{" "}
                  <span className="poppins-6">Reliability</span>
                </p>
              </p>
              <p className="poppins-4 mt-3 text-secondary-main-light dark:text-secondary-main text-lg">
                Provide us with some details about your specific needs,
                requirements, and any additional information
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col pt-[3vmax] poppins-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-5 py-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                />
                <div className="flex items-start justify-start gap-1 pt-1 mb-8">
                  {errors.name && (
                    <BiErrorCircle color="red" className=" mt-[2px]" />
                  )}
                  <p className="text-[red] text-sm flex-1">{errors.name}</p>
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full pl-5 py-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                />
                <div className="flex items-start justify-start gap-1 pt-1">
                  {errors.phone && (
                    <BiErrorCircle color="red" className=" mt-[2px]" />
                  )}
                  <p className="text-[red] text-sm flex-1 mb-8">
                    {errors.phone}
                  </p>
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-5 py-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                />
                <div className="flex items-start justify-start gap-1 pt-1">
                  {errors.email && (
                    <BiErrorCircle color="red" className=" mt-[2px]" />
                  )}
                  <p className="text-[red] text-sm flex-1 mb-8">
                    {errors.email}
                  </p>
                </div>
                <textarea
                  placeholder="How can we help?"
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full pl-5 py-3 resize-none text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                ></textarea>
                <div className="flex items-start justify-start gap-1 pt-1">
                  {errors.message && (
                    <BiErrorCircle color="red" className=" mt-[2px]" />
                  )}
                  <p className="text-[red] text-sm flex-1 mb-8">
                    {errors.message}
                  </p>
                </div>
                {success && (
                  <div className="flex items-start justify-start gap-1 pt-1 mb-8">
                    <IoMdDoneAll
                      color="#399944"
                      className="flex-[0.1] mt-[2px]"
                    />
                    <p className="flex-[0.9] text-[#399944] text-sm">
                      Message sent successfully
                    </p>
                  </div>
                )}
                {mailerError && (
                  <div className="flex items-start justify-start gap-1 pt-1 mb-8">
                    <BiErrorCircle
                      color="red"
                      className="flex-[0.1] mt-[2px]"
                    />
                    <p className="flex-[0.9] text-[red] text-sm">
                      Couldn't send message, Please try again later
                    </p>
                  </div>
                )}
                <button
                  disabled={isSending}
                  className="flex items-center justify-center bg-secondary-green poppins-4 text-white rounded py-3"
                >
                  {isSending ? (
                    <Rings
                      height="30"
                      width="30"
                      color="#ffffff"
                      radius="3"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="rings-loading"
                    />
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
        <div className="sm:hidden w-full px-2 py-[10vh] min-h-[100px] items-center bg-[#F1F1F9] rounded-[30px] dark:glassmorphism-sec flex sm:px-[8%] sm:pt-[3%] sm:pb-[5%]">
          <div className="flex-1 ">
            <div className="flex flex-col justify-center h-full gap-[5%]">
              <p className="text-[1.8rem] sm:text-[2.3rem] text-main-light dark:gradient-text">
                <p className="poppins-4">
                  <span>We build for</span>{" "}
                  <span className="poppins-6">Reliability</span>
                </p>
              </p>
              <p className="poppins-4 mt-3 text-secondary-main-light dark:text-secondary-main text-lg">
                Provide us with some details about your specific needs,
                requirements, and any additional information
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col pt-[3vmax] poppins-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-5 py-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none "
                />
                {errors.name && (
                  <div className="flex items-start justify-start mt-1 gap-1">
                    <BiErrorCircle color="red" className="mt-[2px]" />
                    <p className="text-[red] flex-1 text-sm">{errors.name}</p>
                  </div>
                )}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full mt-8 pl-5 py-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                />
                {errors.phone && (
                  <div className="flex items-start justify-start mt-1 gap-1">
                    <BiErrorCircle color="red" className="mt-[2px]" />
                    <p className="text-[red] flex-1 text-sm">{errors.phone}</p>
                  </div>
                )}
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-8 pl-5 py-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                />
                {errors.email && (
                  <div className="flex items-start justify-start mt-1 gap-1">
                    <BiErrorCircle color="red" className="mt-[2px]" />
                    <p className="text-[red] flex-1 text-sm">{errors.email}</p>
                  </div>
                )}
                <textarea
                  placeholder="How can we help?"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-8 pl-5 py-3 resize-none text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none"
                ></textarea>
                {errors.message && (
                  <div className="flex items-start justify-start mt-1 gap-1">
                    <BiErrorCircle color="red" className="mt-[2px]" />
                    <p className="text-[red] flex-1 text-sm">
                      {errors.message}
                    </p>
                  </div>
                )}
                {success && (
                  <div className="flex items-start justify-start gap-1 pt-1 mt-8">
                    <IoMdDoneAll
                      color="#399944"
                      className="flex-[0.1] mt-[2px]"
                    />
                    <p className="flex-[0.9] text-[#399944] text-sm">
                      Message sent successfully
                    </p>
                  </div>
                )}
                {mailerError && (
                  <div className="flex items-start justify-start gap-1 pt-1 mt-8">
                    <BiErrorCircle
                      color="red"
                      className="flex-[0.1] mt-[2px]"
                    />
                    <p className="flex-[0.9] text-[red] text-sm">
                      Could not send message, Please try again later
                    </p>
                  </div>
                )}
                <button
                  disabled={isSending}
                  className="flex items-center justify-center mt-8 bg-secondary-green poppins-4 text-white rounded py-3"
                >
                  {isSending ? (
                    <Rings
                      height="30"
                      width="30"
                      color="#ffffff"
                      radius="3"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="rings-loading"
                    />
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </form>
              <div className="flex-1 mt-10 mx-auto items-center justify-center">
                <Image
                  alt="lady-using-smartphone"
                  src={theme === "light" ? GuyUsingPhone : GuyUsingPhoneDark}
                  className="w-[90%] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
