import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
const CatagoriesTabSwitch = ({ catagory }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDiv = useRef();

  const handleScroll = () => {
    !scrolled
      ? scrollDiv.current.scrollBy({
          left: scrollDiv.current.scrollWidth,
          behavior: "smooth",
        })
      : scrollDiv.current.scrollBy({
          left: -scrollDiv.current.scrollWidth  ,
          behavior: "smooth",
        });
    setScrolled(!scrolled);
  };

  useEffect(()=>{
    scrollDiv.current.addEventListener('scroll' ,(e)=>{
      if(e.target.scrollLeft === 0) {
        setScrolled(false) 
      }
      if(e.target.scrollLeft === scrollDiv.current.scrollWidth) {
        setScrolled(true) 
      }
      e.stopPropagation();
    })
  })

  return (
    <div className="max-w-xl relative">
      <FontAwesomeIcon
        className="absolute -top-1 -left-0 p-2 rounded-4xl border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
        style={{ display: `${!scrolled ? "none" : "block"}` }}
        onClick={handleScroll}
        icon={faArrowLeft}
      />
      <div
        ref={scrollDiv}
        className="flex w-full h-9 border-b-2 border-slate-600 mb-3 text-white scroll-hide overflow-y-hidden overflow-x-auto"
      >
        {catagory.map((c, i) => (
          <div
            key={i}
            className="px-3 cursor-pointer hover:text-white shrink-0"
          >
            {c.heading}
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        className="absolute -top-1 -right-0 p-2 rounded-4xl border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
        icon={faArrowRight}
        style={{ display: `${scrolled ? "none" : "block"}` }}
        onClick={handleScroll}
      />
    </div>
  );
};

export default CatagoriesTabSwitch;
