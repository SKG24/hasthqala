import React from "react";
import img_12 from "./images/img_12.png";
import img_13 from "./images/img_13.png";

function Page6() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.3"
      className="relative w-full h-[80vh] flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_13}
          className="w-[80vw] h-[40vh] md:w-[80%] md:h-[80%] object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_12}
          className="w-[80vw] h-[40vh] md:w-full md:h-[100vh] object-cover"
          alt="Artist"
        />
      </div>
    </div>
  );
}
export default Page6;