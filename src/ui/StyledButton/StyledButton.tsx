import React from "react";
import "./StyledButton.scss";

const StyledSelect: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, className, ...rest } = props;

  return (
    <button className={`${className ?? ""} styled-button`} {...rest}>
      {children}
    </button>
  );
};

export default StyledSelect;
