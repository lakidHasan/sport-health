import Image from "next/image";
import React from "react";

function StaticBar() {
  return (
    <div>
      <div className="static-main">
        <div className="static-info">
          <div className="static-img-div">
            <Image
              className="static-img"
              src="/Group.png"
              width={100}
              height={100}
              alt="health routin"
            />
          </div>
          <div>
            <h1>Get that 11 line in 30 days</h1>
            <button>Learn more</button>
          </div>
        </div>
        <div className="static-info">
          <div className="static-img-div">
            <Image
              className="static-img"
              src="/Group (1).png"
              width={100}
              height={100}
              alt="health routin"
            />
          </div>
          <div>
            <h1>14 Days sherd challenge</h1>
            <button>Learn more</button>
          </div>
        </div>
        <div className="static-info">
          <div className="static-img-div">
            <Image
              className="static-img"
              src="/Group (2).png"
              width={100}
              height={100}
              alt="health routin"
            />
          </div>
          <div>
            <h1>Get flat belly in 30 days</h1>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticBar;
