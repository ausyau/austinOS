import {useState, useEffect} from "react";

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {
      width: 100,
      height: 1000,
    };
  }
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
