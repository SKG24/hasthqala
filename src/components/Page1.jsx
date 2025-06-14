import React from "react";
import artist from "./images/artist.jpeg";

function Page1() {
  return (
    <div
      data-scroll-section
      data-scroll-speed="0.6"
      className="flex flex-col md:flex-row w-full h-auto md:h-screen items-center bg-black text-white"
    >
      <div
        className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:pl-16 md:pr-8 py-8 md:py-0"
        
      >
        <h2
          className="text-2xl sm:text-3xl md:text-[4vw] font-bold mb-8 font-['Italiana'] leading-tight md:leading-[4.5vw] tracking-tight opacity-0 translate-x-[-60px] transition-all"
          data-scroll
          data-scroll-call="reveal"
          data-scroll-repeat
        >
          <span className="block">FORGET TRENDS,</span>
          <span className="block">OWN ART THAT WILL BE</span>
          <span className="block">A CONVERSATION PIECE</span>
        </h2>
        <p
          className="text-base sm:text-lg md:text-[1.8vw] font-light font-['Roboto'] text-zinc-300 mb-4 leading-relaxed opacity-0 translate-x-[-40px] transition-all duration-700 delay-150"
          data-scroll
          data-scroll-call="reveal"
          data-scroll-repeat
        >
          At <span className="font-semibold text-white">Hasthqala</span>, we
          celebrate the beauty of handmade paintings, inspired by a bold woman
          to pursue her passion for art.
        </p>
        <p
          className="text-sm sm:text-base md:text-[1.3vw] font-light font-['Roboto'] italic text-zinc-400 border-l-4 border-white pl-4 opacity-0 translate-x-[-20px] transition-all duration-700 delay-300"
          data-scroll
          data-scroll-call="reveal"
          data-scroll-repeat
        >
          "I believe every home deserves an art piece that reflects the soul of
          Indian culture — a silent storyteller of our rich heritage."
        </p>
      </div>
      <div
        className="w-full md:w-1/2 flex items-center justify-end h-auto md:h-screen"
        
      >
        <img src={artist} className="w-full h-full object-cover" alt="Artist" />
      </div>
      <style>
        {`
          [data-scroll][data-scroll-call="reveal"].is-inview {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
        `}
      </style>
    </div>
  );
}
export default Page1;
