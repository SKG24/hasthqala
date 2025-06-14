import React from "react";
import img_27 from "./images/img_27.jpg";
import img_32 from "./images/img_32.jpeg";

function Page4() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.3"
      className="flex flex-col md:flex-row w-full h-[80vh] items-center bg-black text-white"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_32}
          className="w-full h-[40vh] md:h-[80vh] object-cover"
          alt="Art1"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_27}
          className="w-full md:max-w-[32vw] h-[40vh] md:max-h-[70vh] object-cover border-8 border-white"
          alt="Art2"
        />
      </div>
    </div>
  );
}
export default Page4;