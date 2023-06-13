import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-x-3">
        <div className="md:w-[40%] w-full ">
          <div className="md:w-[320px]">
            <Image src={"/Logo.webp"} width={200} height={70} alt="logo" />
            <p className="mt-7 text-[#666] text-lg  ">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made
            </p>
            <div className="mt-10 flex gap-x-3">
              <Link
                href={"/"}
                className="p-3 bg-gray-200 rounded-md flex w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href={"/"}
                className="p-3 bg-gray-200 rounded-md flex w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href={"/"}
                className="p-3 bg-gray-200 rounded-md flex w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] w-full flex flex-col gap-y-4 md:mt-0 mt-6">
          <h3 className="text-xl font-bold text-gray-600">Company</h3>
          <Link href={"/"} className="mt-2 text-[#666]">
            About Us
          </Link>
          <Link href={"/"} className="text-[#666]">
            {" "}
            Terms of Use
          </Link>
          <Link href={"/"} className="text-[#666]">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-[#666]">
            How it Works
          </Link>
          <Link href={"/"} className="text-[#666]">
            Contact Us
          </Link>
        </div>
        <div className="md:w-[20%] w-full flex flex-col gap-y-4 md:mt-0 mt-6">
          <h3 className="text-xl font-bold text-gray-600">Support</h3>
          <Link href={"/"} className="mt-2 text-[#666]">
            Support Carrer
          </Link>
          <Link href={"/"} className="text-[#666]">
            24h Service
          </Link>
          <Link href={"/"} className="text-[#666]">
            {" "}
            Quick Chat
          </Link>
        </div>
        <div className="md:w-[20%] w-full flex flex-col gap-y-4 md:mt-0 mt-6">
          <h3 className="text-xl font-bold text-gray-600">Contact</h3>
          <Link href={"/"} className="mt-2 text-[#666]">
            Whatsapp
          </Link>
          <Link href={"/"} className="text-[#666]">
            Support 24h
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-wrap md:flex-nowrap gap-x-3 gap-y-4 md:justify-between justify-center mt-[8rem]  border-t-2 pt-3">
        <div>
          <p>Copyright © 2022 Dine Market</p>
        </div>
        <div>
          <p>
            Design by. <strong> Weird Design Studio</strong>
          </p>
        </div>
        <div>
          <p>
            Code by. <strong> shabrina12 on github</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
