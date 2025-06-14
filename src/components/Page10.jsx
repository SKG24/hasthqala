import React from "react";
import img_2 from "./images/img_2.jpg";
import img_3 from "./images/img_3.jpg";

function Page10() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.3"
      className="flex flex-col md:flex-row w-full h-[80vh] items-center bg-black text-white"
    >
      <div className="w-full md:w-1/2 flex items-center justify-end h-1/2 md:h-full">
        <img
          src={img_3}
          className="w-full h-[40vh] md:h-full object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <img
          src={img_2}
          className="w-[80vw] h-[40vh] md:w-[60%] md:h-[60%] object-cover"
          alt="Artist"
        />
      </div>
    </div>
  );
}
export default Page10;
