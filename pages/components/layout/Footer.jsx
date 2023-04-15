import React from "react";
import Title from "../ui/Title";
import { ImLocation2 } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6 ">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6">
          <div className="md:flex-1">
            <Title addClass="text-[30px] mb-5">Contact Us</Title>
            <div className="flex gap-y-2 flex-col mt-3">
              <div className="flex items-center gap-3">
                <ImLocation2 />
                <span className="inline-block ml-2">Location</span>
              </div>
              <div className="flex items-center gap-3">
                <IoMdCall />
                <span className="inline-block ml-2">Call +01 1234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail />
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px] mb-5">Feana</Title>

            <p className="mt-6">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
              <a
                href=""
                className="w-8 h-8 grid place-content-center hover:bg-primary bg-white text-secondary rounded-full"
              >
                <FaFacebookF />
              </a>

              <a
                href=""
                className="w-8 h-8 grid place-content-center hover:bg-primary bg-white text-secondary rounded-full"
              >
                <AiOutlineTwitter />
              </a>

              <a
                href=""
                className="w-8 h-8 grid place-content-center hover:bg-primary bg-white text-secondary rounded-full"
              >
                <GrLinkedinOption />
              </a>

              <a
                href=""
                className="w-8 h-8 grid place-content-center hover:bg-primary bg-white text-secondary rounded-full"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center hover:bg-primary bg-white text-secondary rounded-full"
              >
                <RiPinterestLine />
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Gours</Title>
            <div className="flex gap-y-2 flex-col mt-3">
              <div >
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div className="">
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-center mt-6">
            © 2023 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
