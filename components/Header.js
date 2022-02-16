import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { signOut } from "next-auth/client";
import { useSession } from "next-auth/client";

const Header = () => {
  const [session] = useSession();
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 justify-between max-w-screen bg-white dark:bg-dark-extra dark:text-gray-200">
      <div className="flex items-center space-x-1">
        <Button
          color="darkgray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0"
        >
          <Icon name="menu" size="2xl" />
        </Button>

        <Icon name="description" size="4xl" color="blue" />
        <h1 className="hidden md:inline-flex text-gray-600 dark:text-gray-200 text-2xl ">
          Docs
        </h1>
      </div>

      <div className="relative flex items-c enter px-3 sm:px-5 py-2  bg-[#F1F3F4] text-gray-600 rounded-md focus-within:shadow-default focus-within:bg-white dark:focus-within:bg-dark-light dark:focus-within:shadow-default dark:focus-within:shadow-gray-700 w-[200px] max-w-3xl md:flex-grow m-2 overflow-hidden dark:bg-dark-mid dark:text-gray-200">
        <Icon name="search" size="2xl" color="darkgray" />
        <input
          className="outline-none flex-shrink bg-transparent ml-3 text-base w-full dark:placeholder:text-gray-400"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center space-x-1">
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="h-18 w-18 border-0 dark:bg-dark-light"
        >
          <Icon name="apps" size="3xl" color="gray" />
        </Button>

        <div className="flex items-center space-x-2">
          <p className="hidden lg:inline-flex font-medium">
            {session?.user?.name}
          </p>
          <div
            className="relative cursor-pointer h-10 w-10 rounded-full group ring-4 ring-transparent lg:hover:ring-blue-400 active:ring-blue-400"
            onClick={signOut}
          >
            <Image
              className="rounded-full "
              layout="fill"
              alt={session?.user?.name}
              src={session?.user?.image}
            />
            <p className="top-[10%] transition-all opacity-0 duration-200 lg:group-hover:opacity-100 lg:group-hover:-translate-x-14 absolute bg-gray-300 rounded-sm  px-2 py-1 -right-2 dark:bg-dark-light">
              Logout
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
