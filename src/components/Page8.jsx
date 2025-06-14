import React from "react";
import img_27 from "./images/img_27.jpg";
import img_31 from "./images/img_31.jpeg";
import img_23 from "./images/img_23.jpg";

function Page8() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.3"
      className="flex flex-col md:flex-row w-full h-[80vh] items-center justify-center bg-black text-white"
    >
      <div className="w-full md:w-1/3 flex items-center justify-end h-[27vh] md:h-full">
        <img
          src={img_27}
          className="w-full h-full object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center h-[27vh] md:h-full">
        <img
          src={img_31}
          className="w-full h-full object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-start h-[27vh] md:h-full">
        <img
          src={img_23}
          className="w-full h-full object-cover"
          alt="Artist"
        />
      </div>
    </div>
  );
}
export default Page8;