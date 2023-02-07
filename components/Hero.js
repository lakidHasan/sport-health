import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="container mx-auto flex">
      <div>
        <div>
          <h1 className="hero">Healthy in side</h1>
          <h1 className="hero">fresh out side</h1>
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
        </div>
        <div>
          <button className="bg-[#264373] w-[174px] h-[56px] rounded-lg">
            Get started
          </button>
          <button className="bg-[#FFFFFF] w-[174px] h-[56px] rounded-lg">
            Learn More
          </button>
        </div>
        <div>
          <h1>Brands:</h1>
          <Image src="/brand.png" width={358} height={580} alt="brand name" />
        </div>
      </div>
      <div className="">
        <Image
          src="/Group 4227.png"
          width={358}
          height={580}
          alt="man's health"
        />
      </div>
    </div>
  );
}

export default Hero;
