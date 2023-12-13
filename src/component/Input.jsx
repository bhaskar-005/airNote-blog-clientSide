import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  {
    lable,
    placeholder,
    type = "text",
    InputClassName = "",
    LabelClassName = "",
    onchangeHandler,
    value,
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      {lable && (
        <label htmlFor={id} className={` font-[500] text-third_colour ${LabelClassName}`}>
          {lable}
        </label>
      )}
      <input
        type={type}
        value={value}
        className={`h-[46px] text-[16px] font-[500] input focus:outline-none ${InputClassName} `}
        placeholder={placeholder}
        ref={ref}
        {...props}
        id={id}
        onChange={onchangeHandler}
    
      />
    </div>
  );
});

export default Input;
