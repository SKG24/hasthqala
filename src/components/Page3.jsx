import React from "react";
import img_30 from "./images/img_30.jpeg";
import img_4 from "./images/img_4.jpg";

function Page3() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.6"
      className="flex flex-col md:flex-row w-full h-[80vh] items-center bg-black text-white"
    >
      {/* Left image (img_4) */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_4}
          className="w-full h-[40vh] md:max-w-[32vw] md:max-h-[80vh] object-cover"
          alt="Art1"
        />
      </div>
      {/* Right image (img_30) */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_30}
          className="w-full h-[40vh] md:h-[80vh] object-cover"
          alt="Art2"
        />
      </div>
    </div>
  );
}
export default Page3;