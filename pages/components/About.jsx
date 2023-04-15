import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto p-14 flex items-center gap-20 flex-wrap sm:justify-center justify-center">
        <div className="">
        <div className="relative sm:w-[445px] sm:h-[600px] w-[300px] h-[500px] flex justify-center">
          <Image src="/images/about-img.png" alt="" layout="fill" />
        </div>
        </div>
        <div className="text-white md:w-1/3 md:items-center">
          <Title addClass="text-[40px] my-4 ">We Are Feane</Title>
          <p className="mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isnt anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
