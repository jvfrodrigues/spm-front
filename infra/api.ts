import axios from "axios";
import { useQuery } from "react-query";
import { Password } from "@/domain/types/password";
import { Config } from "@/config/config";

export const api = axios.create({
  baseURL: `${Config.api}`,
});

function useGetPasswords() {
  return useQuery<Password[]>(
    ["passwords"],
    async () => await api.get(`/password-cards`).then((res) => res.data),
    { refetchOnWindowFocus: false }
  );
}

export { useGetPasswords };
