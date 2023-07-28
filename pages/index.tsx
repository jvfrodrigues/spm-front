import Button from "@/components/button";
import Header from "@/components/header";
import Modal from "@/components/modal";
import PasswordForm from "@/components/password/form";
import Card from "@/components/password/card";
import { Password, PasswordCreateRequest } from "@/domain/types/password";
import {
  useCreatePassword,
  useDeletePassword,
  useGetPasswords,
  useUpdatePassword,
} from "@/infra/api";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/loading";

const Home: NextPage = () => {
  const { data, isLoading } = useGetPasswords();
  const { mutateAsync: createPasswordAsync, isLoading: creationIsLoading } =
    useCreatePassword();
  const { mutateAsync: updatePasswordAsync, isLoading: updateIsLoading } =
    useUpdatePassword();
  const { mutateAsync: deletePasswordAsync, isLoading: deleteIsLoading } =
    useDeletePassword();
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordToEdit, setPasswordToEdit] = useState<Password>();

  const handleFormSubmit = async (p: PasswordCreateRequest | Password) => {
    if ("id" in p) {
      updatePasswordAsync({ id: p.id, password: p })
        .then(() => {
          toast.success("Password updated", {
            duration: 1000,
          });
          setModalVisible(false);
          setPasswordToEdit(undefined);
        })
        .catch((err) => {
          toast.error(`Error on password update - ${err}`, {
            duration: 1000,
          });
        });
    } else {
      createPasswordAsync(p)
        .then(() => {
          toast.success("Password created", {
            duration: 1000,
          });
          setModalVisible(false);
          setPasswordToEdit(undefined);
        })
        .catch((err) => {
          toast.error(`Error on password creation - ${err}`, {
            duration: 1000,
          });
        });
    }
  };

  const handleDeletePassword = async (id: string) => {
    deletePasswordAsync(id)
      .then(() => {
        toast.success("Password delete", {
          duration: 1000,
        });
      })
      .catch((err) => {
        toast.error(`Error on password deletion - ${err}`, {
          duration: 1000,
        });
      });
  };

  return (
    <>
      <Head>
        <title>Simple password manager</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <Modal isOpen={modalVisible}>
        <PasswordForm
          key={"modal"}
          passwordToEdit={passwordToEdit}
          isLoading={creationIsLoading || updateIsLoading}
          onSubmit={handleFormSubmit}
          onClose={() => {
            setPasswordToEdit(undefined);
            setModalVisible(false);
          }}
        />
      </Modal>
      <Header>
        <Button onClick={() => setModalVisible(true)}>
          <span>Create password</span>
        </Button>
      </Header>
      <main className="mx-auto max-w-[1960px] p-4 bg-black">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {isLoading ||
          creationIsLoading ||
          deleteIsLoading ||
          updateIsLoading ? (
            <Loading />
          ) : (
            data &&
            data.map((password) => (
              <Card
                handleEditPassword={(password) => {
                  setPasswordToEdit(password);
                  setModalVisible(true);
                }}
                handleDeletePassword={handleDeletePassword}
                key={password.id}
                password={password}
              />
            ))
          )}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        <span className="flex max-h-full max-w-full items-center justify-center">
          Simple password manager
        </span>
      </footer>
    </>
  );
};

export default Home;
