import { Link, useSearchParams } from 'react-router-dom';
import Courses from '../jsons/courseCatagories.json'
import Carousel from '../components/Carousel'
import SearchBar from '../components/SearchBar';
import Skeleton from "../components/Skeleton";
import CatagoriesTabSwitch from '../components/CatagoriesTabSwitch';

const Course = () => {
  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F670d1f2b6dac25f050536aa3%2FwebLarge&w=1200&q=75",
  ];

  const [searchParams, setSearchParam] = useSearchParams();
  const search = searchParams.get("search") || "";
  const filter = searchParams.get("filter") || "All";

  const handleSearch = (e) => {
    setSearchParam({ search: e.target.value, filter: filter });
  };

  const handleFilter = (filterName) => {
    setSearchParam({ filter: filterName });
  };

  return (
    <div className="mx-auto max-w-screen px-6 flex flex-col gap-1.5">
    <>
      {
        <Skeleton width={"max-w-4xl"} height={"min-h-96"} /> && (
        <Carousel slides={slides} />
      )}
    </>
     <div className="flex flex-col md:flex-row gap-2 justify-between w-full mx-auto max-w-7xl">
        <CatagoriesTabSwitch
          headings={Courses.headings}
          handleFilter={handleFilter}
        />
        <SearchBar width={"max-w-xl w-full"} handleSearch={handleSearch} />
      </div>

      <div className="max-w-7xl w-full flex flex-col gap-1.5 mt-2 mx-auto">
        {Courses.categories
          .filter((c, i) => c.heading.includes(filter === "All" ? "" : filter))
          .map((category, i) => (
            <div key={i} className="w-full min-h-96">
              <h1 className="text-white font-bold text-xl mb-2.5">
                {category.heading}
              </h1>
              <div
                key={i}
                className="flex gap-2.5 overflow-x-auto max-w-screen w-full scroll-hide"
              >
                {category.courses 
                  .filter((book) =>
                    book.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((book, i) => (
                    <>
                      {(
                        <Skeleton
                          key={i}
                          width={"max-w-52"}
                          height={"min-h-56"}
                          borderRadius={"rounded-lg"}
                        />
                      ) && (
                        <Link
                          key={i}
                          className="max-w-60 w-full flex flex-col gap-1.5 bg-red-400 shrink-0 p-1 min-h-60"
                        >
                          <img
                            src={book.cover}
                            className="block min-h-60 w-full object-cover bg-amber-100"
                            alt=""
                          />
                          <p>{book.timeLong}</p>
                          <h3>{book.title}</h3>
                        </Link>
                      )}
                    </>
                  ))}
              </div>
            </div>
          ))}
      </div>
  </div>
  )
}

export default Course