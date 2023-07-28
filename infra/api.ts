import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  Password,
  PasswordCreateRequest,
  PasswordUpdateRequest,
} from "@/domain/types/password";
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

function useCreatePassword() {
  const queryClient = useQueryClient();
  return useMutation(
    async (password: PasswordCreateRequest) =>
      await api.post(`/password-cards`, password),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("passwords");
      },
    }
  );
}

function useUpdatePassword() {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, password }: PasswordUpdateRequest) =>
      await api.put(`/password-cards/${id}`, password),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("passwords");
      },
    }
  );
}

function useDeletePassword() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => await api.delete(`/password-cards/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("passwords");
      },
    }
  );
}

export {
  useGetPasswords,
  useCreatePassword,
  useUpdatePassword,
  useDeletePassword,
};
