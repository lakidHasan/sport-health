import Image from "next/image";
import React from "react";

function StaticBar() {
  return (
    <div>
      <Image
        src="/static bar.png"
        width={358}
        height={580}
        alt="health routin"
      />
    </div>
  );
}

export default StaticBar;
