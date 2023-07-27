import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Password, PasswordCreateRequest } from "@/domain/types/password";
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

export function useCreatePassword() {
  const queryClient = useQueryClient();
  return useMutation(
    async (node: PasswordCreateRequest) =>
      await api.post(`/password-cards`, node),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("passwords");
      },
    }
  );
}

export { useGetPasswords };
