import React from "react";

interface HeaderProps {
  isOpen?: boolean;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, children }: HeaderProps) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-md shadow-md">{children}</div>
    </div>
  );
};

export default Modal;
