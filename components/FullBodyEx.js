import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

function FullBodyEx() {
  return (
    <div className="fullbody-main">
      <div className="full-body-img">
        <Image
          src="/Full Body.png"
          width={358}
          height={580}
          alt="health routin"
        />
      </div>
      <div className="full-body-des">
        <div>
          <h1>Best full body</h1>
          <h1>Workout to lose fat</h1>
        </div>
        <div className="body-des">
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
        </div>
        <button className="bg-[#264373] w-[174px] h-[56px] rounded-lg body-btn">
          <span>
            <h1>Get started </h1>
            <span>
              <AiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default FullBodyEx;
