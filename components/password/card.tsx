import { FunctionComponent } from "react";
import { Password } from "@/domain/types/password";

interface CardProps {
  password: Password;
}

const Card: FunctionComponent<CardProps> = ({ password }: CardProps) => {
  return (
    <div className="flex flex-col p-2 max-h-full max-w-md rounded bg-slate-500">
      <p className="text-white">{password.name}</p>
      <p className="text-white">{password.url}</p>
    </div>
  );
};

export default Card;
