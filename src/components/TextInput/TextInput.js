import React from "react";

const TextInput = ({
  title, 
  placeholder,
  type = "",
  register,
  name
}) => {
  return (
    <div className="flex flex-col gap-1">
    <label htmlFor={type} className="text-white text-lg">{title}</label>
        <div className="flex outline outline-2 w-full rounded items-center hover:outline-yellow-600 focus:outline-yellow-600">
        <input 
            type={type}
            className="w-full pl-5 rounded h-11 outline-none"
            placeholder={placeholder}
            {...register(name)}
        />
      </div>
  </div>
  );
};

export default TextInput;
