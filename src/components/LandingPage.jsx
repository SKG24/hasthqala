import React, { useState } from "react";
import bg_2 from "./images/bg_2.jpg"; // Adjust the path as necessary

function LandingPage() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      data-scroll-section
      className="relative w-full h-auto md:h-screen z-[3] bg-cover bg-center"
    >
      {/* Responsive image height: 80vh on mobile, 100vh on desktop */}
      <img
        src={bg_2}
        className="w-full h-[80vh] md:h-full object-cover"
        alt="Background"
        onLoad={() => setImgLoaded(true)}
      />
      {/* Overlay text absolutely centered on image for all screens */}
      <div
        data-scroll
        data-scroll-speed="0.2"
        className="absolute top-0 left-0 w-full h-[80vh] md:h-full flex items-center justify-center pointer-events-none"
        style={{
          zIndex: 2,
        }}
      >
        {imgLoaded && (
          <h3
            className="hasthqala text-[14vw] sm:text-[10vw] md:text-[16vw] font-bold text-center font-['Roboto'] drop-shadow-2xl transition-transform leading-[1.05] tracking-tight"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <span className="inline-block animate-simple-fade-up">hasthqala</span>
          </h3>
        )}
      </div>
      {/* Enhanced animation style and improved mobile clarity */}
      <style>
        {`
    @keyframes simple-fade-up {
      0% {
        opacity: 0;
        transform: translateY(120px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-simple-fade-up {
      animation: simple-fade-up 2s cubic-bezier(0.23, 1, 0.32, 1) both;
    }
    .hasthqala {
      color: #fff;
      text-shadow: 0 2px 8px rgba(0,0,0,0.5);
      letter-spacing: -1px;
      line-height: 1.05;
    }
    @media (max-width: 767px) {
      .hasthqala {
        font-size: 14vw !important;
        padding: 0 2vw;
      }
      .absolute.top-0.left-0.w-full.h-\\[80vh\\].md\\:h-full.flex.items-center.justify-center.pointer-events-none {
        height: 80vh !important;
        align-items: center !important;
        justify-content: center !important;
      }
    }
  `}
      </style>
    </div>
  );
}
export default LandingPage;