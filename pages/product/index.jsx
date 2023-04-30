import Image from "next/image";
import { useState } from "react";
import Title from "../components/ui/Title";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const Index = () => {
  const itemsExtra = [
    {
      id: 1,
      name: "Extra 1",
      price: 1,
    },

    {
      id: 2,
      name: "Extra 2",
      price: 2,
    },
    {
      id: 3,
      name: "Extra 3",
      price: 3,
    },
  ];

  const foodItems = [
    {
      id: 1,
      name: "Pizza 1",
      price: 10,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, est. Facere eius numquam autem repudiandae",
      extraOptions: [
        {
          id: 1,
          name: "Extra 1",
          price: 1,
        },
      ],
    },
  ];

  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();


  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((x) => x.id !== item.id));
    }
  };

  const handleClick = ()=>{
    dispatch(addProduct({...foodItems[0],extras, price, quantity:1,}))
  }

    console.log(cart);
  return (
    <div className=" flex md:h-[calc(100vh_-_88px)] items-center py-20 gap-5 flex-wrap">
      <div className="relative flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src="/images/f1.png " alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline my-4 inline-block">
          ${price}
        </span>
        <p className="text-sm my-4 md:pr-20 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, est. Facere eius numquam autem repudiandae
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center md:justify-start justify-center gap-x-8 first-letter:md:justify-start ">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => handleSize(0)}
            >
              <Image src="/images/f1.png " alt="" layout="fill" />
              <span
                className="absolute top-0 -right-6 text-xs bg-primary
            px-[5px] rounded-full font-medium"
              >
                Small
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image src="/images/f1.png " alt="" layout="fill" />
              <span
                className="absolute top-0 -right-8 text-xs bg-primary
            px-[5px] rounded-full font-medium"
              >
                Medium
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => handleSize(2)}
            >
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
          {extraItems.map((item) => (
            <label className="flex items-center gap-x-1 " key={item.id}>
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
                onChange={(e) => handleChange(e, item)}
              />
              <span className="text-sm font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
        <button className="btn-primary " onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
