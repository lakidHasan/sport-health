import Image from "next/image";
import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Hero() {
  return (
    <div className="container mx-auto hero-container ">
      <div>
        <div>
          <h1 className="hero">Healthy in side</h1>
          <h1 className="hero">
            <span style={{ color: "#8382EB" }}>fresh</span> out side
          </h1>
          <p className="hero-pra">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
        </div>
        <div>
          <button className="bg-[#264373] w-[174px] h-[56px] rounded-lg get-started">
            <span>
              <h1>Get started </h1>
              <span>
                <AiFillRightCircle />
              </span>
            </span>
          </button>
          <button className="bg-[#FFFFFF] w-[174px] h-[56px] rounded-lg learn-more">
            <span>
              <span>
                <BsFillArrowRightCircleFill />
              </span>{" "}
              <h1> Learn More </h1>
            </span>
          </button>
        </div>
        <div className="hero-brand">
          <h1>Brands:</h1>
          <Image src="/brand.png" width={358} height={580} alt="brand name" />
        </div>
      </div>
      <div className="hero-img">
        <Image
          src="/Group 4227.png"
          width={558}
          height={580}
          alt="man's health"
        />
      </div>
    </div>
  );
}

export default Hero;
