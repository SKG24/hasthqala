import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import CollectionPage from "./components/CollectionPage";

function ScrollWrapper({ children }) {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Wait for DOM update, then initialize LocomotiveScroll
    const raf = requestAnimationFrame(() => {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      window.locomotive = scroll;
      scroll.update();
    });

    return () => {
      cancelAnimationFrame(raf);
      if (window.locomotive) {
        window.locomotive.destroy();
        window.locomotive = null;
      }
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      className="w-full min-h-screen text-white bg-black"
    >
      {children}
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function App() {
  const isMobile = useIsMobile();
  return (
    <BrowserRouter>
      <ScrollWrapper>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Page1 />
                {!isMobile && (
                  <>
                    <Page2 />
                    <Page3 />
                    <Page4 />
                    <Page5 />
                    <Page6 />
                    <Page7 />
                    <Page8 />
                    <Page9 />
                    <Page10 />
                  </>
                )}
                <Page11 />
              </>
            }
          />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/contact" element={<Page11 />} />
        </Routes>
      </ScrollWrapper>
    </BrowserRouter>
  );
}

export default App;
