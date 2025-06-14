import React from "react";
import img_10 from "./images/img_10.JPG";
import img_15 from "./images/img_15.jpeg";

function Page7() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.6"
      className="relative w-full h-[80vh] flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden"
    >
      <div className="w-full md:w-1/2 flex items-center justify-end h-1/2 md:h-full">
        <img
          src={img_15}
          className="w-full h-[40vh] md:h-full object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_10}
          className="w-[80vw] h-[40vh] md:w-[60%] md:h-[60%] object-cover"
          alt="Artist"
        />
      </div>
    </div>
  );
}
export default Page7;