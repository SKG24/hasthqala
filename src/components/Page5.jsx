import React from "react";
import img_17 from "./images/img_17.jpeg";
import img_18 from "./images/img_19.jpeg";
import img_20 from "./images/img_20.jpeg";

function Page5() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.6"
      className="flex flex-col md:flex-row w-full h-[80vh] items-center justify-center bg-black text-white"
    >
      <div className="w-full md:w-1/4 flex items-center justify-end h-[33vh] md:h-full">
        <img
          src={img_17}
          className="w-full h-full object-cover"
          alt="Art1"
        />
      </div>
      <div className="w-full md:w-2/4 flex items-center justify-center h-[33vh] md:h-full">
        <img
          src={img_20}
          className="w-full h-full object-cover"
          alt="Art2"
        />
      </div>
      <div className="w-full md:w-1/4 flex items-center justify-start h-[33vh] md:h-full">
        <img
          src={img_18}
          className="w-full h-full object-cover"
          alt="Art3"
        />
      </div>
    </div>
  );
}
export default Page5;