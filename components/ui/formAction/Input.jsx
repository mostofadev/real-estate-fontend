import React from "react";

function Input({ Name = "", Type = "text", Placeholder = "", id = "id", Label="",...rest}) {
  return (
    <div className="my-4 w-full">
      <div className="my-2">
         <label htmlFor={id} className="mx-2 text-[12px]">{Label}</label>
      </div>
      <input
        {...rest}
        type={Type}
        placeholder={Placeholder}
        name={Name}
        className="py-4 px-5 outline-one border border-[0.5px] border-gray-200 rounded-full w-full"
      />
    </div>
  );
}

export default Input;
