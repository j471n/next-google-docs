import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { getSession, getProviders } from "next-auth/client";
import Login from "../components/Login";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Input from "@material-tailwind/react/Input";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  // useCollectionOnce,
  useCollection,
} from "react-firebase-hooks/firestore";
import DocumentRow from "../components/DocumentRow";
import { useRouter } from "next/router";
import useDarkMode from "../hooks/useDarkMode";

export default function Home({ session, providers }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [input, setInput] = useState("");
  const { darkMode, changeDarkMode } = useDarkMode();
  const [searchResult, setSearchResult] = useState([]);
  const searchInputRef = useRef();

  // using useCollection for the realtime deleting and inserting record
  const [snapshot] = useCollection(
    db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );

  if (!session) return <Login providers={providers} />;

  function createDocument() {
    // if not input then return
    if (!input) return;

    db.collection("userDocs")
      .doc(session?.user.email)
      .collection("docs")
      .add({
        fileName: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        router.push(`/doc/${docRef.id}`);
        setInput("");
        setShowModal(false);
      });
  }

  function deleteDocument(id) {
    db.collection("userDocs")
      .doc(session?.user.email)
      .collection("docs")
      .doc(id)
      .delete()
      .catch((err) => console.error(err));
  }

  function handleSearch(e) {
    e.preventDefault();

    setSearchResult(() =>
      searchInputRef.current.value
        ? snapshot?.docs.filter((doc) =>
            doc
              .data()
              .fileName.toLowerCase()
              .includes(searchInputRef.current.value.toLowerCase())
          )
        : []
    );
  }

  console.log(searchResult);

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalHeader className="" toggler={() => setShowModal(false)}>
        <p className="text-base">Create a document</p>
      </ModalHeader>
      <ModalBody>
        <Input
          type="text"
          color="lightBlue"
          size="md"
          placeholder="Document Name"
          outline={true}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </ModalBody>

      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          ripple="dark"
          rounded={true}
          onClick={(e) => setShowModal(false)}
        >
          Cancel
        </Button>

        <Button
          color="blue"
          ripple="light"
          rounded={true}
          onClick={createDocument}
        >
          Create
        </Button>
      </ModalFooter>
    </Modal>
  );

  const searchModal = (
    <Modal
      size="regular"
      active={showSearchModal}
      toggler={() => setShowSearchModal(false)}
    >
      <ModalBody>
        <div className="min-h-[300px] sm:min-w-[500px]">
          <div
            className="relative flex items-c enter px-3 sm:px-5 py-2  bg-[#F1F3F4] text-gray-600 rounded-md focus-within:shadow-default focus-within:bg-white dark:focus-within:bg-dark-light dark:focus-within:shadow-gray-700 max-w-3xl md:flex-grow m-2 overflow-hidden dark:bg-dark-mid dark:text-gray-200 min-w-full mx-auto "
            onClick={() => setShowSearchModal(true)}
          >
            <Icon name="search" size="2xl" color="darkgray" />
            <input
              className="outline-none flex-shrink bg-transparent ml-3 text-base w-full dark:placeholder:text-gray-400"
              type="text"
              placeholder="Search"
              ref={searchInputRef}
              onChange={handleSearch}
            />
          </div>

          <section>
            {searchInputRef.current?.value && <p>Search Results</p>}

            {searchResult.map((res) => {
              return (
                <div
                  className="flex items-center justify-between my-2 bg-zinc-200 s rounded px-4 py-2 w-full cursor-pointer transition duration-150 active:scale-95 md:hover:bg-zinc-300 select-none overflow-hidden"
                  onClick={() => router.push(`/doc/${res.id}`)}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="article" size="2xl" color="blue" />
                    <p className="test-sm sm:text-base text-left border-0 capitalize ">
                      {res.data().fileName}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 ">{`${res
                    .data()
                    .timestamp?.toDate()
                    .toString()
                    .slice(4, 10)}, ${res
                    .data()
                    .timestamp.toDate()
                    .toString()
                    .slice(11, 15)}`}</p>
                </div>
              );
            })}
          </section>
        </div>
      </ModalBody>
    </Modal>
  );

  return (
    <div className="w-screen min-h-screen dark:bg-dark-extra">
      <Head>
        <title>Google Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        darkMode={darkMode}
        changeDarkMode={changeDarkMode}
        setShowSearchModal={setShowSearchModal}
      />

      {modal}
      {searchModal}

      <section className="bg-[#F1F3F4] dark:bg-dark-mid dark:text-gray-200 pb-10 px-5  w-full">
        <div className="max-w-3xl md:mx-auto">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-gray-700 dark:text-gray-300 text-lg">
              Start a new document
            </h2>

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
            <div
              onClick={() => setShowModal(true)}
              className="relative h-52 w-40 border-2 border-transparent cursor-pointer hover:border-blue-400"
            >
              <Image
                src={
                  !darkMode
                    ? "https://rb.gy/wlvbum"
                    : "https://imgur.com/2k4D2kP.png"
                }
                layout="fill"
                alt=""
              />
            </div>
            <p className="mt-2 ml-2 text-gray-700 dark:text-gray-200 text-sm font-bold sm:font-semibold">
              Blank
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Container */}

      <table className="bg-white dark:bg-dark-extra pt-8 px-10 md:px-0 w-[100%] lg:w-[55%] mx-auto select-none">
        <thead>
          <tr className="flex items-center p-2 text-gray-700 dark:text-gray-200">
            <th className="col-1 font-semibold text-sm sm:text-base">
              My Documents
            </th>
            <th className="col-2 font-semibold text-sm sm:text-base">
              Date Created
            </th>
            <th className="col-3">
              <Icon name="folder" size="2xl" color="gray" />
            </th>
          </tr>
        </thead>

        <tbody>
          {snapshot?.docs.map((doc) => {
            return (
              <DocumentRow
                key={doc.id}
                id={doc.id}
                fileName={doc.data().fileName}
                date={doc.data().timestamp}
                deleteDocument={deleteDocument}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user session and the providers
  const session = await getSession(context);
  const providers = await getProviders();

  return {
    props: {
      session,
      providers,
    },
  };
}
