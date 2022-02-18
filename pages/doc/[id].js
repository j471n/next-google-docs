import TextEditor from "../../components/TextEditor";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import Image from "next/image";
import {
  getSession,
  signOut,
  useSession,
  getProviders,
} from "next-auth/client";
import Login from "../../components/Login";
import Head from "next/head";

export default function Doc({ id, providers }) {
  const [session] = useSession();
  const router = useRouter();

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
  );

  if (!session) return <Login providers={providers} />;
  // checking if the user try to access the url then send him to the home screen
  if (!loadingSnapshot && !snapshot?.data()?.fileName) {
    router.replace("/");
  }

  return (
    <>
      <Head>
        <title>{`${snapshot?.data()?.fileName} - Docs`}</title>
      </Head>
      <div>
        <header className="flex justify-between items-center p-3 pb-1 print:hidden dark:bg-dark-extra dark:text-gray-200">
          <div className="flex items-center">
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer relative group"
            >
              <div className="">
                <Icon name="description" size="5xl" color="blue" />
              </div>

              <Button
                color="gray"
                buttonType="filled"
                iconOnly={true}
                rounded={true}
                size="lg"
                className="hidden !absolute left-0 top-0  sm:inline-flex opacity-0 group-hover:opacity-100 z-50"
                ripple="dark"
              >
                <Icon name="arrow_back" size="xl" color="white" />
              </Button>
            </div>
            <div className="px-2">
              <h2 className="text-lg font-semibold capitalize">
                {snapshot?.data()?.fileName}
              </h2>

              <div className="flex items-center text-sm space-x-2 text-gray-600 dark:text-gray-400 print:hidden">
                <p className="option">File</p>
                <p className="option">Edit</p>
                <p className="option">View</p>
                <p className="option">Insert</p>
                <p className="option">Format</p>
                <p className="option">Tools</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              color="blue"
              buttonType="filled"
              className="hidden md:inline-flex"
              ripple="light"
            >
              <Icon name="people" size="md" /> Share
            </Button>
            <Button
              buttonType="filled"
              size="regular"
              iconOnly={true}
              onClick={() => window?.print()}
              ripple="dark"
              className="border-0 bg-black dark:bg-zinc-600 hover:bg-gray-700 dark:hover:bg-zinc-700"
            >
              <Icon name="print" size="2xl" />
            </Button>

            <div className="relative print:hidden h-10 w-10 rounded-full cursor-pointer">
              <Image
                onClick={signOut}
                src={session?.user?.image}
                layout="fill"
                className="rounded-full"
                alt="profile"
              />
            </div>
          </div>
        </header>

        <TextEditor snapshot={snapshot} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();
  const { id } = context.query;

  return {
    props: {
      id,
      session,
      providers,
    },
  };
}
