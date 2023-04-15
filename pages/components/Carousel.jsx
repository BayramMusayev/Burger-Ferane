import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 50000,



    customPaging: (i) =>(
      <div className="w-3 h-3 bg-white border rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full mx-auto -mt-[88px]">
      <div className="relative h-full w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />

        <Slider {...settings}>
          <div>
            <div className="container mx-auto  w-full ">
              <div
                className="mt-48 flex flex-col items-start gap-y-10 
         text-white"
              >
                <Title addClass="text-6xl">Fast Food Restaurant</Title>
                <p className="text-sm sm:w-2/5 w-full">
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </p>

                <button className="btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div>
          <div className="container mx-auto  w-full ">
              <div
                className="mt-48 flex flex-col items-start gap-y-10 
         text-white"
              >
                <Title addClass="text-6xl">Fast Food Restaurant</Title>
                <p className="text-sm sm:w-2/5 w-full">
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </p>

                <button className="btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
