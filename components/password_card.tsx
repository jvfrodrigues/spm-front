import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Password } from "@/domain/types/password";

interface CardProps {
  password: Password;
}

const Card: FunctionComponent<CardProps> = ({ password }: CardProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col p-2 max-h-full max-w-md rounded bg-gray-700">
      <p className="text-white">Name: {password.name}</p>
      <p className="text-white">Url: {password.url}</p>
    </div>
  );
};

export default Card;
