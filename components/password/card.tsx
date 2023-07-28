import { FunctionComponent, useState } from "react";
import { Password } from "@/domain/types/password";
import showPasswordIcon from "@/public/showPassword.svg";
import hidePasswordIcon from "@/public/hidePassword.svg";
import copyIcon from "@/public/copy.svg";
import editIcon from "@/public/edit.svg";
import deleteIcon from "@/public/delete.svg";
import Image from "next/image";
import toast from "react-hot-toast";

interface CardProps {
  password: Password;
  handleDeletePassword: (id: string) => void;
  handleEditPassword: (password: Password) => void;
}

const Card: FunctionComponent<CardProps> = ({
  password,
  handleDeletePassword,
  handleEditPassword,
}: CardProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password.password);
    toast.success("Password copied", {
      duration: 1000,
    });
  };

  return (
    <div className="flex flex-col p-2 max-h-full max-w-md rounded bg-slate-500">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white">{password.name}</p>
        <div className="flex flex-row">
          <Image
            onClick={() => handleEditPassword(password)}
            className="cursor-pointer"
            priority
            height={24}
            width={24}
            src={editIcon}
            alt="edit password"
          />
          <Image
            onClick={() => handleDeletePassword(password.id)}
            className="cursor-pointer"
            priority
            height={24}
            width={24}
            src={deleteIcon}
            alt="delete password"
          />
        </div>
      </div>
      <p className="text-white">{password.url}</p>
      <p className="text-white">User: {password.username}</p>
      <div className="flex justify-between items-center">
        {showPassword ? (
          <p className="text-white">Pass: {password.password}</p>
        ) : (
          <input
            type="password"
            value={password.password}
            className="text-white bg-transparent focus:outline-none"
            readOnly
          />
        )}
        <div className="flex flex-row">
          {showPassword ? (
            <Image
              onClick={handlePasswordToggle}
              className="cursor-pointer"
              priority
              height={24}
              width={24}
              src={showPasswordIcon}
              alt="show password"
            />
          ) : (
            <Image
              onClick={handlePasswordToggle}
              className="cursor-pointer"
              priority
              height={24}
              width={24}
              src={hidePasswordIcon}
              alt="hide password"
            />
          )}
          <Image
            onClick={handleCopyPassword}
            className="cursor-pointer"
            priority
            height={24}
            width={24}
            src={copyIcon}
            alt="copy password"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
