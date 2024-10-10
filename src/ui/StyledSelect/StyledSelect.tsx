import React from "react";
import "./StyledSelect.scss";

const StyledSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (
  props
) => {
  const { children, className, ...rest } = props;

  return (
    <select
      className={`${className ?? ""} styled-select`}
      {...rest}
    >
      {children}
    </select>
  );
};

export default StyledSelect;
