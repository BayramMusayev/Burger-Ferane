import Image from "next/image";
import React from "react";
import Title from "../components/ui/Title";

const index = () => {
  return (
    <div className=" flex h-screen  items-center gap-20 py-20 flex-wrap">
      <div className="relative flex-1 w-[80%] h-[80%] mx-20">
        <Image src="/images/f1.png " alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-20 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, est. Facere eius numquam autem repudiandae
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-8 first-letter:md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image src="/images/f1.png " alt="" layout="fill" />
              <span
                className="absolute top-0 -right-6 text-xs bg-primary
            px-[5px] rounded-full font-medium"
              >
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/f1.png " alt="" layout="fill" />
              <span
                className="absolute top-0 -right-8 text-xs bg-primary
            px-[5px] rounded-full font-medium"
              >
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/f1.png " alt="" layout="fill" />
              <span
                className="absolute top-0 -right-4 text-xs bg-primary
            px-[5px] rounded-full font-medium"
              >
                Large
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mt-6">
            Choose additional ingredients
          </h4>
        </div>
        <div className="flex gap-x-4 my-3 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">Ketcup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">mayones</span>
          </label>
        </div>
        <button className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default index;
