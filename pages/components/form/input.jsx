import React from "react";

const Input = (props) => {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;

  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          className={`h-14 w-full border 
          outline-none px-4 peer pt-2
          ${touched && errorMessage ? "border-danger" : "border-primary"}
          `}
          required
          {...inputProps}
        />
        <span
          className="absolute top-0 left-0 px-4 text-sm flex
            items-center h-full peer-focus:h-7 peer-focus:text-sm
            peer-valid:h-7 peer-valid:text-sm transition-all"
        >
          {placeholder}
        </span>
      </label>
      {touched && <span className="text-xs text-danger">{errorMessage}</span>}
</div>
  );
};

export default Input;
