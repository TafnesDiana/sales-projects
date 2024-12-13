'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-24 z-50 fixed top-0 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">

          <button
              className="lg:hidden block text-black"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center">
              <Image src="/images/logo.svg" alt="logo" width={50} height={32} />
              <h1 className="font-bold mr-9 font-montserrat text-4xl">Furniro</h1>
            </div>
  
            <ul
              className={`lg:flex flex-col lg:flex-row gap-y-4 lg:gap-x-24 items-center  bg-white lg:bg-transparent w-full lg:w-auto fixed lg:static top-24 left-0 z-10 lg:z-auto transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li className="px-6 lg:justify-center">
                <Link href="/" onClick={toggleMenu}>
                  <p className="font-poppins text-black hover:text-yellow-600">Home</p>
                </Link>
              </li>
              <li className="px-6 lg:px-0">
                <Link href="/shop" onClick={toggleMenu}>
                  <p className="font-poppins text-black  hover:text-yellow-600">Shop</p>
                </Link>
              </li>
              <li className="px-6 lg:px-0">
                <Link href="/about" onClick={toggleMenu}>
                  <p className="font-poppins text-black  hover:text-yellow-600">About</p>
                </Link>
              </li>
              <li className="px-6 lg:px-0">
                <Link href="/contact" onClick={toggleMenu}>
                  <p className="font-poppins text-black  hover:text-yellow-600">Contact</p>
                </Link>
              </li>
            </ul>

            
            <div className="flex items-center">
              <Image
                src="/images/profile.svg"
                alt="perfil"
                width={23}
                height={18}
                className="mr-6 cursor-pointer"
              />
              <Image
                src="/images/cart.svg"
                alt="carrinho"
                width={23}
                height={18}
                className="cursor-pointer"
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
