import Button from "@/components/button";
import Header from "@/components/header";
import Modal from "@/components/modal";
import PasswordForm from "@/components/password/form";
import Card from "@/components/password/card";
import { PasswordCreateRequest } from "@/domain/types/password";
import { useCreatePassword, useGetPasswords } from "@/infra/api";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/loading";

const Home: NextPage = () => {
  const { data, isLoading } = useGetPasswords();
  const { mutateAsync: createPasswordAsync, isLoading: creationIsLoading } =
    useCreatePassword();
  const [modalVisible, setModalVisible] = useState(false);

  const handleFormSubmit = async (p: PasswordCreateRequest) => {
    createPasswordAsync(p)
      .then(() => {
        toast.success("Password created", {
          duration: 1000,
        });
        setModalVisible(false);
      })
      .catch((err) => {
        toast.error(`Error on password creation - ${err}`, {
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
          isLoading={creationIsLoading}
          onSubmit={handleFormSubmit}
          onClose={() => setModalVisible(false)}
        />
      </Modal>
      <Header>
        <Button onClick={() => setModalVisible(true)}>
          <text>Create password</text>
        </Button>
      </Header>
      <main className="mx-auto max-w-[1960px] p-4 bg-black">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {(isLoading || creationIsLoading) && <Loading />}
          {!isLoading &&
            !creationIsLoading &&
            data &&
            data.map((password) => (
              <Card key={password.id} password={password} />
            ))}
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
