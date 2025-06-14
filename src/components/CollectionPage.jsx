import React from "react";
import bg_2 from "./images/bg_2_3.jpg";
import bg_2_4 from "./images/bg_2_2.jpg";
import bg_3_1 from "./images/bg_3_1.jpg";
import bg_3_2 from "./images/bg_3_2.jpg";

import img1 from "./images/img_1.jpg";
import img2 from "./images/img_2.jpg";
import img3 from "./images/img_3.jpg";
import img4 from "./images/img_4.jpg";
import img5 from "./images/img_5.png";
import img6 from "./images/img_6.png";
import img7 from "./images/img_7.JPG";
import img8 from "./images/img_8.JPG";
import img9 from "./images/img_9.JPG";
import img10 from "./images/img_10.JPG";
import img11 from "./images/img_11.JPG";
import img12 from "./images/img_12.png";
import img13 from "./images/img_13.png";
import img14 from "./images/img_14.jpeg";
import img15 from "./images/img_15.jpeg";
import img16 from "./images/img_16.jpeg";
import img17 from "./images/img_17.jpeg";
import img18 from "./images/img_18.jpeg";
import img19 from "./images/img_19.jpeg";
import img20 from "./images/img_20.jpeg";
import img21 from "./images/img_21.jpeg";
import img22 from "./images/img_22.jpg";
import img23 from "./images/img_23.jpg";
import img24 from "./images/img_24.jpg";
import img25 from "./images/img_25.jpg";
import img26 from "./images/img_26.jpg";
import img27 from "./images/img_27.jpg";
import img28 from "./images/img_28.jpg";
import img29 from "./images/img_29.png";
import img30 from "./images/img_30.jpeg";
import img31 from "./images/img_31.jpeg";
import img32 from "./images/img_32.jpeg";

const images = [
  { src: img2, id: "#A001" },
  { src: img3, id: "#A002" },
  { src: img4, id: "#A003" },
  { src: img5, id: "#A004" },
  { src: img6, id: "#B001" },
  { src: img9, id: "#B002" },
  { src: img10, id: "#B003" },
  { src: img11, id: "#B004" },
  { src: img12, id: "#C001" },
  { src: img13, id: "#C002" },
  { src: img14, id: "#C003" },
  { src: img15, id: "#C004" },
  { src: img16, id: "#D001" },
  { src: img17, id: "#D002" },
  { src: img18, id: "#D003" },
  { src: img19, id: "#D004" },
  { src: img20, id: "#E001" },
  { src: img21, id: "#E002" },
  { src: img22, id: "#E003" },
  { src: img23, id: "#E004" },
  { src: img24, id: "#F001" },
  { src: img27, id: "#F002" },
  { src: img28, id: "#F003" },
  { src: img29, id: "#F004" },
  { src: img30, id: "#G001" },
  { src: img31, id: "#G002" },
  { src: img32, id: "#G003" },
];
// Helper to chunk images into pairs for each row
function chunkImages(arr, size = 2) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
function CollectionPage() {
  const rows = chunkImages(images, 2);

  // Parallax speeds for left/right columns
  const leftSpeeds = ["-1", "1"];
  const rightSpeeds = ["1", "-1"];

  return (
    <div
      data-scroll-section
      className="relative w-full min-h-screen text-white px-2 py-12 overflow-x-hidden"
      style={{ position: "relative" }}
    >
      {/* Intro full-screen image section */}
      <section className="relative w-full z-30 h-screen flex items-center justify-center overflow-hidden mb-16">
        <img
          src={bg_2_4}
          alt="Art Collection Intro"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-[10vw] sm:text-[7vw] md:text-[5vw] font-bold font-['Italiana'] text-white drop-shadow-2xl mb-6">
            Art Collection
          </h1>
          <p className="max-w-2xl text-center text-lg sm:text-2xl md:text-3xl font-light font-['Roboto'] text-white drop-shadow-lg">
            Discover a curated selection of original, handmade paintings. Each
            piece is a unique expression of Indian heritage and contemporary
            artistry, crafted to inspire and elevate your space.
          </p>
        </div>
      </section>
      {/* Fixed, stretched background image covering the entire page */}
      <img
        src={bg_2}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
        style={{
          filter: "grayscale(1) blur(2px)",
        }}
        data-scroll
        data-scroll-speed="-.2"
      />
      <div className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-32">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-col md:flex-row w-full gap-8 md:gap-16 items-stretch"
            >
              {/* Left image */}
              <div
                className="w-full md:w-1/2 flex flex-col justify-end"
                data-scroll
                data-scroll-speed={
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? leftSpeeds[rowIdx % leftSpeeds.length]
                    : "0"
                }
              >
                {row[0] && (
                  <div
                    className="w-full flex items-end justify-center"
                    style={{
                      borderRadius: 0,
                      height: window.innerWidth < 768 ? "auto" : "32vw",
                      maxHeight: window.innerWidth < 768 ? "none" : "48vw",
                      // Remove minHeight for mobile
                      minHeight: window.innerWidth < 768 ? "0" : 180,
                    }}
                  >
                    <img
                      src={row[0].src}
                      alt={row[0].id}
                      className="w-full object-cover rounded-none"
                      style={{
                        height: window.innerWidth < 768 ? "auto" : "100%",
                        maxHeight: window.innerWidth < 768 ? "70vw" : "100%",
                        minHeight: window.innerWidth < 768 ? "0" : 120,
                        background: "transparent",
                      }}
                      loading="lazy"
                    />
                  </div>
                )}
                {row[0] && (
                  <span className="block text-base md:text-lg font-light text-white tracking-widest font-['Roboto'] mt-4 text-center">
                    {row[0].id}
                  </span>
                )}
              </div>
              {/* Right image */}
              <div
                className="w-full md:w-1/2 flex flex-col justify-start"
                data-scroll
                data-scroll-speed={
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? rightSpeeds[rowIdx % rightSpeeds.length]
                    : "0"
                }
              >
                {row[1] && (
                  <div
                    className="w-full flex items-start justify-center"
                    style={{
                      borderRadius: 0,
                      height: window.innerWidth < 768 ? "auto" : "32vw",
                      maxHeight: window.innerWidth < 768 ? "none" : "48vw",
                      minHeight: window.innerWidth < 768 ? "0" : 180,
                    }}
                  >
                    <img
                      src={row[1].src}
                      alt={row[1].id}
                      className="w-full object-cover rounded-none"
                      style={{
                        height: window.innerWidth < 768 ? "auto" : "100%",
                        maxHeight: window.innerWidth < 768 ? "70vw" : "100%",
                        minHeight: window.innerWidth < 768 ? "0" : 120,
                        background: "transparent",
                      }}
                      loading="lazy"
                    />
                  </div>
                )}
                {row[1] && (
                  <span className="block text-base md:text-lg font-light text-white tracking-widest font-['Roboto'] mt-4 text-center">
                    {row[1].id}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <style>
          {`
      @media (max-width: 767px) {
        .gap-12 {
          row-gap: 2rem !important;
        }
        .gap-24, .md\\:gap-32 {
          row-gap: 2rem !important;
        }
      }
    `}
        </style>
      </div>
    </div>
  );
}

export default CollectionPage;
