import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className=" container mx-auto lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Password</Title>
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
                ID
              </th>
              <th scope="col" className="py-3 px-3">
                ADRESS
              </th>
              <th scope="col" className="py-3 px-3">
                DATE
              </th>
              <th scope="col" className="py-3 px-3">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-3">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-secondary hover:bg-primary transition-all">
              <td
                className="py-4 px-3 font-medium whitespace-nowrap
                 hover:text-white flex items-center gap-x-2 justify-center"
              >
                <span>63107...</span>
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                Adana
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                01-09-2022
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                19$
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
