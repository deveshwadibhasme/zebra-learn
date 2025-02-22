import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({ width }) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const filter = searchParams.get("filter") || "All";

  const handleSearch = (e) => {
    setSearchParam({ filter:filter, search: e.target.value });
  };

  return (
    <div
      className={`${width} h-10 rounded-full bg-slate-700 flex items-center gap-2 px-3 text-white`}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        name="search"
        autoComplete="off"
        id="search"
        onChange={handleSearch}
        className="w-full h-full outline-0"
        placeholder="Search Here"
      />
    </div>
  );
};

export default SearchBar;
