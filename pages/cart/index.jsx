import Image from "next/image";
import React from "react";
import Title from "../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-[calc(100vh_-_413px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div
          className="min-h-[calc(100vh_-_413px)] flex items-center flex-1 p-10
        overflow-x-auto w-full"
        >
          <table
            className="w-full text-sm text-center text-gray-500
          min-w-[1000px]"
          >
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr
                  className=" bg-secondary hover:bg-primary transition-all"
                  key={product.id}
                >
                  <td
                    className="py-4 px-6 font-medium whitespace-nowrap
                     hover:text-white flex items-center gap-x-2 justify-center"
                  >
                    <Image src="/images/f1.png" alt="" width={40} height={40} />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.extras.map((item) => (
                      <span key={item.id}>{item.name}, </span>
                    ))}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="bg-secondary min-h-[calc(100vh_-_413px)]
        flex flex-col text-white justify-center p-12 md:w-auto w-full  md:text-start text-center"
        >
          <Title addClass="text-[40px]">CART TOTLAL</Title>
          <div className="mt-6">
            <b>Subtotal:</b> ${cart.total} <br />
            <b className="inline-block my-1">Discount:</b> $0:00 <br />
            <b>Total:</b> ${cart.total}
          </div>
          <button
            className="btn-primary mt-4 md:w-auto w-52 m-auto"
            onClick={() => dispatch(reset())}
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
