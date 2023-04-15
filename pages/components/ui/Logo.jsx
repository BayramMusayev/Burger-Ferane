import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-dansing font-bold cursor-pointer">Feane</span>
    </Link>
  );
};

export default Logo;
