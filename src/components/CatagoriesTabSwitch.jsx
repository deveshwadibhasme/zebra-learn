import { useRef} from "react";
import { useSearchParams } from "react-router-dom";
import { LeftScroller, RightScroller } from "../utils/Scroller.jsx";
const CatagoriesTabSwitch = ({ headings, handleFilter }) => {
  
  const { 0: searchParams } = useSearchParams();
  const filter = searchParams.get("filter") || "All";

  const scrollDiv = useRef(null);

  return (
    <div className="max-w-xl w-full relative h-full pt-1">
      <LeftScroller scrollDiv={scrollDiv} />
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
              borderBottom: `${filter === c.heading ? "2px solid white" : ""}`,
            }}
          >
            {c.heading}
          </div>
        ))}
      </div>
      <RightScroller scrollDiv={scrollDiv} />
    </div>
  );
};

export default CatagoriesTabSwitch;
