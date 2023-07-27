import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex flex-row justify-between items-center bg-purple-950 p-4 text-white">
      <h1 className="text-2xl font-bold">Simple password manager</h1>
      {props.children}
    </header>
  );
};

export default Header;
