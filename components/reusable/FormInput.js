import React, { useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";

const FormInput = ({
  register,
  name,
  IconLeft,
  IconRightOne,
  IconRightTwo,
  type,
  placeholder,
  label,
  validationRules,
  error,
}) => {
  const [visible, setVisible] = useState(false);

  const EyeOff = IconRightOne;
  const EyeShow = IconRightTwo;

  const toggleShowPassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="space-y-3">
      <label htmlFor="">{label}</label>

      <div className="w-full px-5 py-3 flex items-center gap-3 text-secondary-main-light dark:text-secondary-main bg-white border border-solid border-[#cccccc] dark:glassmorphism-dark_input rounded dark:border-none ">
        {IconLeft && <IconLeft />}
        <input
          type={type === "password" && visible ? "text" : type}
          {...register(name, validationRules)}
          name={name}
          placeholder={placeholder}
          className="outline-none flex-1 bg-transparent"
        />

        {type === "password" && (
          <span className="cursor-pointer" onClick={toggleShowPassword}>
            {visible ? <EyeOff /> : <EyeShow />}
          </span>
        )}
      </div>

      {error && (
        <span className="text-red-400 py-2 text-xs poppins-4">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
