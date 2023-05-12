import Image from "next/image";
import Title from "./ui/Title";
import {FaShoppingCart} from "react-icons/fa"

const CampaingItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md p-3 flex items-center gap-x-4">
      <div

        className="relative md:w-40 md:h-40 w-36 h-36 after:content-['']
     border-[5px] border-primary rounded-full overflow-hidden"
      >
        <Image
          src="/images/o1.jpg"
          alt=""
          layout="fill"
          className="hover:scale-105 transition-all"
          objectFit="cover"
          
        />

      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="font-dansing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">Order Now <FaShoppingCart size={20}/></button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className=" flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaingItem />
      <CampaingItem />
    </div>
  );
};

export default Campaigns;
