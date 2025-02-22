import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
const CatagoriesTabSwitch = ({ catagory }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDiv = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("filter") || "All";
  const search = searchParams.get("search") || "";

  const handleFilter = (filterName) => {
    setSearchParams({ search: search, filter: filterName });
  };

  const handleScrollLeft = () => {
    scrollDiv.current.scrollBy({
      left: -scrollDiv.current.scrollWidth,
      behavior: "smooth",
    }),
    setScrolled(!scrolled);
  };
  const handleScrollRight = () => {
    scrollDiv.current.scrollBy({
      left: scrollDiv.current.scrollWidth,
      behavior: "smooth",
    }),
      setScrolled(!scrolled);
  };

  useEffect(() => {
    scrollDiv.current.addEventListener('scroll',(e)=>{
      console.dir(e.target);
      if(scrollDiv.current.scrollLeft === 0) {
        setScrolled(false)
      }
      if(scrollDiv.current.scrollLeft > scrollDiv.current.scrollWidth - scrollDiv.current.clientWidth) {
        setScrolled(!scrolled)
      }
    })
  })


  return (
    <div className="max-w-xl w-full relative h-full">
      <FontAwesomeIcon
        className="absolute -top-1 -left-0 p-2 rounded-full border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
        style={{ display: `${!scrolled ? "none" : "block"}` }}
        onClick={handleScrollLeft}
        icon={faArrowLeft}
      />
      <div
        ref={scrollDiv}
        className="flex w-full h-9 border-b-2 border-slate-600 mb-3 text-white scroll-hide overflow-y-hidden overflow-x-auto"
      >
        {catagory.map((c, i) => (
          <div
            onClick={() => handleFilter(c.heading)}
            key={i}
            className="px-5 cursor-pointer hover:text-white shrink-0 transition-all"
            style={{
              borderBottom: `${filter === c.heading ? "2px solid white" : ""}`,
            }}
          >
            {c.heading}
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        className="absolute -top-1 -right-0 p-2 rounded-4xl hover:border-1 bg-amber-50/40 hover:border-white text-black cursor-pointer"
        icon={faArrowRight}
        style={{ display: `${scrolled ? "none" : "block"}` }}
        onClick={handleScrollRight}
      />
    </div>
  );
};

export default CatagoriesTabSwitch;
