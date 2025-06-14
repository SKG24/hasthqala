import React from "react";
import img_25 from "./images/img_16.jpeg";
import img_26 from "./images/img_14.jpeg";

function Page9() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.6"
      className="flex flex-col md:flex-row w-full h-[80vh] items-center bg-black text-white"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_25}
          className="w-[80vw] h-[40vh] md:w-[60%] md:h-[60%] object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-end h-1/2 md:h-full">
        <img
          src={img_26}
          className="w-full h-[40vh] md:h-full object-cover"
          alt="Artist"
        />
      </div>
    </div>
  );
}
export default Page9;