import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem]  z-50 relative
    ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}
    >
      <div className="container mx-auto  text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0  sm:w-auto sm:h-auto 
           w-full h-full sm:text-white text-black sm:bg-transparent
           sm:flex hidden bg-white ${
             isMenuModal === true && "!grid place-content-center"
           }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <Link href="/menu">MENU</Link>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <Link href="/reservation">BOOK TABLE</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button className="absolute top-4 right-4 z-50 ">
              <AiFillCloseCircle
                onClick={() => setIsMenuModal(false)}
                size={25}
                className="hover:text-primary transition-all "
              />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary transition-all" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </Link>
          <button
            onClick={() => {
              setIsSearchModal(true);
            }}
          >
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <Link href="/" className="md:inline-block hidden">
            <button className="btn-primary ">Order Online</button>
          </Link>
          <button onClick={() => setIsMenuModal(true)}>
            <GiHamburgerMenu className="text-xl block sm:hidden hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
