import React, { useState, useEffect, useRef, ReactNode } from "react";

import styles from "../styles/components/smoothScrolling.module.css";

function useWindowSize() {

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}




interface SmoothScrollProps{
  children: ReactNode
}

const SmoothScroll = ({ children }:SmoothScrollProps) => {
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.minHeight = `${
      scrollingContainerRef.current ? scrollingContainerRef.current.getBoundingClientRect().height : 0
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className={styles.parent}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;