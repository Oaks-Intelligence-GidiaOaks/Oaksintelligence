"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const CommentForm = ({ _id, setNewComments }) => {
  const [showSuccess, setshowSuccess] = useState(false);
  const [showError, setshowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    fetch("/api/create-comment", {
      method: "POST",
      body: JSON.stringify({ ...data, _id }),
    })
      .then(() => {
        reset();
        setshowSuccess(true);
        setTimeout(() => setshowSuccess(false), 5000);
        setNewComments((prev) => [
          { name: data.name, text: data.text, _createdAt: new Date() },
          ...prev,
        ]);
      })
      .catch(() => {
        setshowError(true);
        // alert("Couldn't process your comment at the moment.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col gap-y-4 w-full max-w-[480px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="Your name"
        {...register("name", { required: true })}
        className="p-2 bg-transparent placeholder:text-gray-500 rounded-md border border-solid border-gray-500 text-main-light dark:text-main poppins-4"
      />
      {/* errors will return when field validation fails  */}
      {errors.name && (
        <span className="text-red-500 poppins-4 text-sm">
          Your name is required
        </span>
      )}

      {/* include validation with required or other standard HTML validation rules */}
      <textarea
        rows={6}
        placeholder="Enter your comment..."
        {...register("text", { required: true })}
        className="p-2 bg-transparent resize-none placeholder:text-gray-500 rounded-md border border-solid  border-gray-500 text-main-light dark:text-main poppins-4"
      />
      {/* errors will return when field validation fails  */}
      {errors.text && (
        <span className="text-red-500 poppins-4 text-sm">
          This field is required
        </span>
      )}

      <AnimatePresence mode="wait">
        {showSuccess && (
          <motion.p
            // initial={{ opacity: 0, translateY: "-20px" }}
            // animate={{ opacity: 1, translateY: "0" }}
            // exit={{ opacity: 0, translateY: "-20px" }}
            className="flex items-center gap-1 text-green-500 poppins-4"
          >
            <IoCheckmarkDone />
            <p className="flex-1">Comment posted successfully.</p>
          </motion.p>
        )}
        {showError && (
          <motion.p
            // initial={{ opacity: 0, translateY: "-20px" }}
            // animate={{ opacity: 1, translateY: "0" }}
            // exit={{ opacity: 0, translateY: "-20px" }}
            className="flex items-center gap-1 text-red-500 poppins-4"
          >
            <MdErrorOutline />
            <p className="flex-1">
              Couldn't process your comment at the moment.
            </p>
          </motion.p>
        )}
      </AnimatePresence>

      <input
        disabled={isLoading}
        value={isLoading ? "Sending..." : "Submit"}
        type="submit"
        className="text-main-light mt-10 dark:text-main poppins-4 flex justify-center w-full gold-gradient-bg hue-rotate-60 sepia-[20%] brightness-[80%] px-3 transition-all duration-300 ease hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 flex-1 sm:flex-none py-3 rounded-lg"
      />
    </form>
  );
};

export default CommentForm;
