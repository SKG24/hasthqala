import React from "react";
import img_9 from "./images/img_9.JPG";
import img_8 from "./images/img_8.jpg";

function Page2() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.3"
      className="flex flex-col md:flex-row w-full h-[80vh] bg-black text-white"
    >
      <div className="w-full md:w-1/2 flex items-center justify-end">
        <img
          src={img_8}
          className="w-full h-[60vw] md:h-[80vh] object-cover"
          alt="Artist"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-end">
        <img
          src={img_9}
          className="w-full h-[60vw] md:h-[80vh] object-cover"
          alt="Artist"
        />
      </div>
    </div>
  );
}
export default Page2;