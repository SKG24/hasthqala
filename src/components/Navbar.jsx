import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const lastY = useRef(0);
  const handlerRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let prevInstance = null;
    function attachHandler() {
      const scrollInstance = window.locomotive;
      if (!scrollInstance) return;
      // Remove previous handler if any
      if (handlerRef.current && prevInstance && prevInstance.off) {
        prevInstance.off("scroll", handlerRef.current);
      }
      handlerRef.current = (obj) => {
        const currentY = obj.scroll.y;
        if (currentY > lastY.current && currentY > 50) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastY.current = currentY;
      };
      scrollInstance.on("scroll", handlerRef.current);
      scrollInstanceRef.current = scrollInstance;
      prevInstance = scrollInstance;
    }

    attachHandler();

    // Watch for LocomotiveScroll re-initialization
    const id = setInterval(() => {
      if (
        window.locomotive &&
        window.locomotive !== scrollInstanceRef.current
      ) {
        attachHandler();
      }
    }, 500);

    return () => {
      clearInterval(id);
      if (
        scrollInstanceRef.current &&
        handlerRef.current &&
        scrollInstanceRef.current.off
      ) {
        scrollInstanceRef.current.off("scroll", handlerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed z-[999] w-full px-4 sm:px-10 md:px-20 flex justify-end items-center backdrop-blur-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="text-xl sm:text-2xl md:text-[3vw] font-['Italiana'] font-bold px-3 sm:px-4 py-2 drop-shadow-2xl">
          MENU
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-0 w-40 bg-black/60 rounded shadow-lg py-2 z-[10000]">
            <button
              onClick={() => navigate("/")}
              className="block w-full text-base sm:text-lg md:text-[1.4vw] text-left px-4 py-2 hover:text-[1.1rem] md:hover:text-[1.6vw] transition font-['Italiana']"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/collection")}
              className="block w-full text-base sm:text-lg md:text-[1.4vw] text-left px-4 py-2 hover:text-[1.1rem] md:hover:text-[1.6vw] transition font-['Italiana']"
            >
              Collection
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="block w-full text-base sm:text-lg md:text-[1.4vw] text-left px-4 py-2 hover:text-[1.1rem] md:hover:text-[1.6vw] transition font-['Italiana']"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
