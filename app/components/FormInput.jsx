import React from "react";

const FormInput = ({label,labelFor,type,name}) => {
  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        name={name}
        className="w-full border-yellow-500 rounded text-black p-2"
      />
    </div>
  );
};

export default FormInput;
