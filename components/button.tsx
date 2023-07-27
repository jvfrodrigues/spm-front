import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
