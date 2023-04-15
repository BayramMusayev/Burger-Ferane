import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Prodacts = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
          <Title addClass="text-[40px]">Products</Title>

      <div
        className="
        overflow-x-auto w-full mt-5"
      >
        <table
          className="w-full text-sm text-center text-gray-500
          min-w-[1000px]"
        >
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-3">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-3">
                ID
              </th>
              <th scope="col" className="py-3 px-3">
                TITLE
              </th>
              <th scope="col" className="py-3 px-3">
                PRICE
              </th>
              <th scope="col" className="py-3 px-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-secondary hover:bg-primary transition-all">
              <td
                className="py-4 px-3 font-medium whitespace-nowrap
                 hover:text-white flex items-center gap-x-2 justify-center"
              >
                    <Image src="/images/f1.png" alt=""width={50} height={50}/>
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                6346264
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                Good Pizza
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                19$
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-danger">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prodacts;
