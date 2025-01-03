import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="bg-black text-white sm:p-8 p-3">
        <h1 className="text-[19px] ">CREATIVITY HUB</h1>
        <p className="sm:text-[40px] text-[20px] py-6 font-light sm:w-[80%] w-full tracking-wider">
          We believe in knowledge-sharing and accessible technology. 
          20X HUB enhances design through collaboration and shared tools.
        </p>
        <div className="flex flex-row sm:gap-6 gap-3 pb-8 ">
          <Image
          src={"/images/h3.avif"} alt="pic"
          height={100}
          width={100}
          className="sm:w-[80px] w-[70px] sm:h-[80px] h-[70px]"
          />
          <Image
          src={"/images/h2.avif"} alt="pic"
          height={100}
          width={100}
          className="sm:w-[80px] w-[70px] sm:h-[80px] h-[70px] "
          />
          <Image
          src={"/images/h1.avif"} alt="pic"
          height={100}
          width={100}
          className="sm:w-[80px] w-[70px] sm:h-[80px] h-[70px]"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
