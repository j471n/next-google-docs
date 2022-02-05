import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 justify-between max-w-screen bg-white ">
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
        <h1 className="hidden md:inline-flex text-gray-600 text-2xl ">
          Docs
        </h1>
      </div>

      <div
        className="relative flex items-center px-3 sm:px-5 py-2  bg-[#F1F3F4] text-gray-600 rounded-md focus-within:shadow-default focus-within:bg-white w-[200px] max-w-3xl md:flex-grow m-2 overflow-hidden"
      >
        <Icon
          name="search"
          size="2xl"
          color="darkgray"
          
        />
        <input
          className="outline-none flex-shrink bg-transparent ml-3 text-base w-full"
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
          className="h-18 w-18 border-0"
        >
          <Icon name="apps" size="3xl" color="gray" />
        </Button>

        <div className="relative cursor-pointer h-10 w-10 rounded-full">
          <Image
            className="rounded-full"
            layout="fill"
            src="https://rb.gy/en5awm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
