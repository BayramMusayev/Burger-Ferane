import Image from "next/image";
import React from "react";
import {
  MdExitToApp,
  MdDirectionsBike,
  MdOutlineFoodBank,
  MdOutlineCategory,
  MdOutlineWindow,
} from "react-icons/md";

import { useState } from "react";
import Order from "../components/admin/Order";
import Prodacts from "../components/admin/Prodacts";
import Category from "../components/admin/Catagory";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="container mx-auto flex lg:flex-row flex-col px-10 my-10">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div
          className="relative flex flex-col items-center px-10 py-5
        border border-b-0"
        >
          <Image
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full "
          />
          <b className="text-2xl mt-2">Admin</b>
        </div>
        <ul className="font-bold">
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
           hover:bg-primary hover:text-white transition-all ${
             tabs === 0 && "bg-primary text-white"
           }`}
            onClick={() => setTabs(0)}
          >
            <MdOutlineFoodBank />
            <button>Products</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <MdDirectionsBike />
            <button>Orders</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <MdOutlineCategory />
            <button>Categories</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <MdOutlineWindow />
            <button>Footer</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all ${
              tabs === 4 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(4)}
          >
            <MdExitToApp />
            <button>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Prodacts />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
    </div>
  );
};

export default Profile;
