import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className=" absolute text-white -bottom-12 left-1/2 bg-primary flex 
    items-center justify-center w-10 h-10 rounded-full ml-2 "
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }
  function PrevBtn({ onClick }) {
    return (
      <button className=" absolute text-white -bottom-12 right-1/2 bg-primary flex 
      items-center justify-center w-10 h-10 rounded-full" onClick={onClick}>
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive:[{breakpoint: 768,
      settings:{
        slidesToShow: 1,
      }
    
    }],
  };
  return (
    <div className="container mx-auto pb-20">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem imgSrc="/images/client1.jpg" name="Moana Michell" />
        <CustomerItem imgSrc="/images/client2.jpg" name="Mike Hamell" />
        <CustomerItem imgSrc="/images/client1.jpg" name="Moana Michell" />
        <CustomerItem imgSrc="/images/client2.jpg" name="Mike Hamell" />
      </Slider>
    </div>
  );
};

export default Customers;
