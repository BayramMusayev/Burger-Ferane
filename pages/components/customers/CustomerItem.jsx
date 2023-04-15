import Image from "next/image";

const CustomerItem = ({imgSrc, name}) => {
    
  return (
    <div className="my-6 mx-4">
      <div className="p-6 bg-secondary rounded-md text-white">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          minima iure placeat voluptatum nisi dolore officia facere, animi
          voluptatibus corrupti dignissimos vel possimus quia omnis voluptatem
          commodi illum. Ea, sint!
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">{name}</span>
          <span className="text-[15px]">{name}</span>
        </div>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full my-8
      before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3
      before:rotate-45 before:bg-primary before:w-5
     before:h-5 ">
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
