import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { useSession } from "next-auth/client";
import Login from "../components/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;

  return (
    <div className="w-screen">
      <Head>
        <title>Google Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="bg-[#F1F3F4] pb-10 px-5  w-full">
        <div className="max-w-3xl md:mx-auto">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>

            <Button
              color="darkgray"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="2xl" />
            </Button>
          </div>

          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-400">
              <Image src="https://rb.gy/wlvbum" layout="fill" />
            </div>
            <p className="mt-2 ml-2 text-gray-700 text-sm font-bold sm:font-semibold">
              Blank
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Container */}

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Document</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="2xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}
