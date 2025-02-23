import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Skeleton from "../components/Skeleton";
import SearchBar from "../components/SearchBar";
import booksJson from "../jsons/books.json";

const Home = () => {
  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe0fbb3ab78db87d20d096%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66d9846a8e32337c4bab9e01%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe0fe13ab78db87d20d25d%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe10243ab78db87d20d483%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe10033ab78db87d20d2f8%2FwebLarge&w=1200&q=75",
  ];

  // const { 0: searchParams } = useSearchParams();
  
  const [searchParams, setSearchParam] = useSearchParams();
  
  const params = searchParams.get("search") || "";
  // const filter = searchParams.get("filter") || "";

  const handleSearch = (e) => {
    setSearchParam({ search: e.target.value});
  };

  return (
    <div className="mx-auto max-w-screen px-6 flex flex-col gap-1.5">
      {(
        <Skeleton
          width={"max-w-3xl w-full"}
          height={"min-h-96"}
          borderRadius={"rounded-lg"}
        />
      ) && <Carousel slides={slides} />}
      <SearchBar width={"max-w-sm"} handleSearch={handleSearch} />
      <div className="w-full flex flex-col gap-1.5 mt-2">
        {booksJson.map((bd, i) => (
          <div key={i} className="min-h-96 w-full max-w-7xl mx-auto">
            <h1 className="text-white font-bold text-xl mb-2.5">
              {bd.heading}
            </h1>
            <div key={i} className="flex gap-2.5 overflow-x-auto max-w-screen w-full scroll-hide">
              {bd.content
                .filter((book) =>
                  book.title.toLowerCase().includes(params.toLowerCase())
                )
                .map((bd, i) => (
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
                        key={bd.id}
                        className="max-w-52 w-full flex flex-col gap-1.5 bg-red-400 shrink-0 p-1"
                      >
                        <img
                          src={bd.cover}
                          className="block min-h-60 w-full object-cover bg-amber-100"
                          alt=""
                        />
                        <p>{bd.pageCount}</p>
                        <h3>{bd.title}</h3>
                      </Link>
                    )}
                  </>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
