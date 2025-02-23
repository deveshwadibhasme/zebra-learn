import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
const CatagoriesTabSwitch = ({ headings , handleFilter }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDiv = useRef();

  const { 0: searchParams } = useSearchParams();
  const filter = searchParams.get("filter") || "All";
  

  const handleScrollLeft = () => {
    scrollDiv.current.scrollBy({
      left: -scrollDiv.current.scrollWidth,
      behavior: "smooth",
    })
  };
  const handleScrollRight = () => {
    scrollDiv.current.scrollBy({
      left: scrollDiv.current.scrollWidth,
      behavior: "smooth",
    })
  };

  useEffect(() => {
    scrollDiv.current.addEventListener('scroll',(e)=>{
      if(scrollDiv.current.scrollLeft === 0) {
        setScrolled(false)
      }
      if(scrollDiv.current.scrollLeft > scrollDiv.current.scrollWidth - scrollDiv.current.clientWidth) {
        setScrolled(!scrolled)
      }
    })
  })


  return (
    <div className="max-w-xl w-full relative h-full pt-1">
      <FontAwesomeIcon
        className="absolute -top-0 -left-0 p-2 rounded-full border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
        style={{ display: `${!scrolled ? "none" : "block"}` }}
        onClick={handleScrollLeft}
        icon={faArrowLeft}
      />
      <div
        ref={scrollDiv}
        className="flex w-full h-9 border-b-2 border-slate-600 mb-3 text-white scroll-hide overflow-y-hidden overflow-x-auto"
      >
        {headings.map((c, i) => (
          <div
            onClick={() => handleFilter(c.heading)}
            key={i}
            className="px-5 cursor-pointer hover:text-white shrink-0 transition-all"
            style={{
              borderBottom: `${filter === c.heading  ? "2px solid white" : ""}`,
            }}
          >
            {c.heading} 
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        className="absolute -top-0 -right-0 p-2 rounded-4xl hover:border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
        icon={faArrowRight}
        style={{ display: `${scrolled ? "none" : "block"}` }}
        onClick={handleScrollRight}
      />
    </div>
  );
};

export default CatagoriesTabSwitch;
