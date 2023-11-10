"use client";

import { useForm } from "react-hook-form";

const CommentForm = ({ _id }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/create-comment", {
      method: "POST",
      body: JSON.stringify({ ...data, _id }),
    }).then(() => alert("Done!"));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col gap-y-4 w-full max-w-[320px]"
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
        {...register("comment", { required: true })}
        className="p-2 bg-transparent resize-none placeholder:text-gray-500 rounded-md border border-solid  border-gray-500 text-main-light dark:text-main poppins-4"
      />
      {/* errors will return when field validation fails  */}
      {errors.comment && (
        <span className="text-red-500 poppins-4 text-sm">
          This field is required
        </span>
      )}

      <input
        type="submit"
        className="text-main-light dark:text-main poppins-4 flex justify-center w-full gold-gradient-bg hue-rotate-60 sepia-[20%] brightness-[80%] px-3 transition-all duration-300 ease hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 flex-1 sm:flex-none py-3 rounded-lg"
      />
    </form>
  );
};

export default CommentForm;
