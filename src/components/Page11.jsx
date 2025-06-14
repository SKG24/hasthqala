import React from "react";
import bg_1 from "./images/bg_1.jpg"; // Adjust the path as necessary

function Page11() {
  return (
    <footer
      data-scroll-section
      className="relative w-full h-auto md:h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <img
        src={bg_1}
        className="absolute inset-0 w-full h-auto md:h-screen object-cover opacity-60 blur-sm bg-black"
        alt="Background"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-20 flex flex-col md:flex-row items-center md:items-center justify-between w-full h-full px-4 md:px-8 py-8 md:py-8">
        {/* Left Section */}
        <div className="footer-main-text flex flex-col items-start md:items-start justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="hasthqala text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg font-['Italiana'] text-center md:text-left w-full">
            Own Your Favorite Art Collection
          </h3>
          <p className="mb-2 text-base sm:text-lg md:text-[1.5vw] max-w-xl text-gray-200 drop-shadow font-['Roboto'] font-light text-center md:text-left w-full">
            Each painting is handcrafted and unique. Use the artwork code when
            inquiring about a specific piece. We offer options in print, canvas,
            and paper formats.
          </p>
          <p className="mb-2 text-base sm:text-lg md:text-[1.5vw] max-w-xl text-gray-200 font-['Roboto'] font-light text-center md:text-left w-full">
            Every artwork is individually handmade, so slight variations are
            natural. We celebrate originality and do not replicate pieces
            exactly.
          </p>
        </div>
        {/* Right Section */}
        <div className="footer-contact flex flex-col items-end md:items-end justify-center w-full md:w-1/2">
          <p className="mb-4 text-xl sm:text-2xl md:text-[2.5vw] text-gray-100 font-bold font-['Italiana'] text-center md:text-right w-full">
            Contact Us
          </p>
          <div className="footer-links flex flex-col gap-3 mb-8 md:mb-20 text-base sm:text-lg md:text-[1.2vw] w-full items-center md:items-end justify-center md:justify-end">
            <a
              href="https://www.instagram.com/hasthqala?igsh=MnhqbjJkemh0ZGRu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-light font-['Roboto'] px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition"
              style={{ wordBreak: "break-all" }}
            >
              Instagram
            </a>
            <a
              href="mailto:hasthqala@gmail.com"
              className="font-light font-['Roboto'] px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition"
              style={{ wordBreak: "break-all" }}
            >
              hasthqala@gmail.com
            </a>
          </div>
        </div>
        {/* Bottom right site credit */}
        <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 z-30 text-xs sm:text-sm site-credit-mobile-hide">
          <span className="text-gray-200 drop-shadow font-['Roboto']">
            Site by Sanat Kumar Gupta
          </span>
          <span className="text-gray-200 drop-shadow font-['Roboto']">
            @hasthqala
          </span>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            footer {
              height: auto !important;
              min-height: 0 !important;
              max-height: none !important;
              padding: 1.5rem 0.5rem !important;
            }
            footer > img {
              height: 80vh !important;
              min-height: 80vh !important;
              max-height: 80vh !important;
            }
            footer > div {
              height: auto !important;
              min-height: 0 !important;
              max-height: none !important;
              justify-content: flex-start !important;
              padding-bottom: 1rem !important;
              padding-left: 0.5rem !important;
              padding-right: 0.5rem !important;
            }
            .footer-main-text {
              align-items: center !important;
              text-align: center !important;
            }
            .footer-contact {
              align-items: center !important;
              text-align: center !important;
              width: 100% !important;
              margin-top: 2rem !important;
            }
            .footer-links {
              flex-direction: column !important;
              gap: 1.25rem !important;
              align-items: center !important;
              width: 100% !important;
            }
            .footer-links a {
              display: block !important;
              width: 90% !important;
              max-width: 320px !important;
              margin: 0 auto !important;
              font-size: 4vw !important;
              padding: 0.75rem 0 !important;
              background: rgba(255,255,255,0.12) !important;
              border-radius: 0.5rem !important;
            }
            .text-xl, .sm\\:text-2xl, .md\\:text-\\[2\\.5vw\\] {
              font-size: 5vw !important;
              text-align: center !important;
              width: 100% !important;
            }
            .absolute.bottom-4.right-4.flex.flex-col.items-end.gap-1.z-30.text-xs.sm\\:text-sm {
              right: 50% !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              align-items: center !important;
              text-align: center !important;
            }
            .site-credit-mobile-hide {
            display: none !important;
            }  
          }
        `}
      </style>
    </footer>
  );
}
export default Page11;
