import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export function LeftScroller({ scrollDiv }) {
  const [scrolled, setScrolled] = useState(false);
  // const scrollDiv = useRef();

  const handleScrollLeft = () => {
    scrollDiv.current.scrollBy({
      left: -scrollDiv.current.scrollWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollDiv.current.addEventListener("scroll", (e) => {
      if (scrollDiv.current.scrollLeft === 0) {
        setScrolled(false);
      }
      if (
        scrollDiv.current.scrollLeft >
        scrollDiv.current.scrollWidth - scrollDiv.current.clientWidth
      ) {
        setScrolled(!scrolled);
      }
    });
  });

  return (
    <FontAwesomeIcon
      className="absolute -top-0 -left-0 p-2 rounded-full border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
      style={{ display: `${!scrolled ? "none" : "block"}` }}
      onClick={handleScrollLeft}
      icon={faArrowLeft}
    />
  );
}

export function RightScroller({ scrollDiv }) {
  const [scrolled, setScrolled] = useState(false);
  // const scrollDiv = useRef();

  const handleScrollRight = () => {
    scrollDiv.current.scrollBy({
      left: scrollDiv.current.scrollWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollDiv.current.addEventListener("scroll", (e) => {
      if (scrollDiv.current.scrollLeft === 0) {
        setScrolled(false);
      }
      if (
        scrollDiv.current.scrollLeft >
        scrollDiv.current.scrollWidth - scrollDiv.current.clientWidth
      ) {
        setScrolled(!scrolled);
      }
    });
  });

  return (
    <FontAwesomeIcon
      className="absolute -top-0 -right-0 p-2 rounded-full border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
      style={{ display: `${scrolled ? "none" : "block"}` }}
      onClick={handleScrollRight}
      icon={faArrowRight}
    />
  );
}
