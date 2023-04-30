import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { MdExitToApp, MdDirectionsBike } from "react-icons/md";

import { useState } from "react";
import Account from "../components/profile/Account";
import Password from "../components/profile/Password";
import Order from "../components/profile/Order";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = ({ user }) => {
  const { data: session } = useSession();
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);

  return (
    <div className="container mx-auto flex lg:flex-row flex-col px-10 my-10">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div
          className="relative flex flex-col items-center px-10 py-5
        border border-b-0"
        >
          <Image
            src={user.image? user.image: "/images/client2.jpg"}
            alt=""
            width={100}
            height={100}
            className="rounded-full "
           
          />
          <b className="text-2xl mt-2">{user.fullName}</b>
        </div>
        <ul className="font-bold">
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
           hover:bg-primary hover:text-white transition-all ${
             tabs === 0 && "bg-primary text-white"
           }`}
            onClick={() => setTabs(0)}
          >
            <AiFillHome />
            <button>Account</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <FaKey />
            <button>Password</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <MdDirectionsBike />
            <button>Orders</button>
          </li>
          <li
            className={`border p-3 flex gap-x-2 items-center justify-center w-full cursor-pointer
            hover:bg-primary hover:text-white transition-all `}
            onClick={handleSignOut}
          >
            <MdExitToApp />
            <button>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user={user}/>}
      {tabs === 1 && <Password user={user} />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export async function getServerSideProps({ req, params }) {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  return {
    props: {
      user: user ? user.data : null,
    },
  };
}

export default Profile;
