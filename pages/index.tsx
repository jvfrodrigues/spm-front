import Header from "@/components/header";
import Card from "@/components/password_card";
import { useGetPasswords } from "@/infra/api";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = useGetPasswords();

  return (
    <>
      <Head>
        <title>Simple password manager</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <Header />
      <main className="mx-auto max-w-[1960px] p-4 bg-black">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {data &&
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
