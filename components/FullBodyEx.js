import React from "react";
import Image from "next/image";

function FullBodyEx() {
  return (
    <div>
      <div>
        <Image
          src="/Full Body.png"
          width={358}
          height={580}
          alt="health routin"
        />
      </div>
      <div>
        <div>
          <h1>Best full body</h1>
          <h1>Workout to lose fat</h1>
        </div>
        <div>
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
        </div>
        <div>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default FullBodyEx;
