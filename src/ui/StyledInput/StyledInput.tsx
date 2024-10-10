import React from "react";
import "./StyledInput.scss";

const StyledInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { children, className, ...rest } = props;

  return (
    <input className={`${className ?? ""} styled-input`} {...rest}>
      {children}
    </input>
  );
};

export default StyledInput;
