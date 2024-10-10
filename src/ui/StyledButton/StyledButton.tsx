import React from "react";
import "./StyledButton.scss";

const StyledButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, className, ...rest } = props;

  return (
    <button className={`${className ?? ""} styled-button`} {...rest}>
      {children}
    </button>
  );
};

export default StyledButton;
