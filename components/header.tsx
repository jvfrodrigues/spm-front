import React from "react";
import Button from "./button";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center bg-purple-950 p-4 text-white">
      <h1 className="text-2xl font-bold">Simple password manager</h1>
      <Button>
        <text>Create password</text>
      </Button>
    </header>
  );
};

export default Header;
