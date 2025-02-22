import Carousel from "../components/Carousel";
import Skeleton from "../components/Skeleton";
import SearchBar from "../components/SearchBar";
import CatagoriesTabSwitch from "../components/CatagoriesTabSwitch";
import Catagories from "../jsons/booksCatagories.json";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F670d1c406dac25f050535d02%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F6729e7e443b2863157c118e7%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F6729e84843b2863157c11c55%2FwebLarge&w=1200&q=75",
  ];

  const { 0: searchParams } = useSearchParams();
  const params = searchParams.get("search") || "";

  return (
    <div className="mx-auto max-w-screen px-6 flex flex-col gap-1.5">
      <>
        {
          <Skeleton width={"max-w-4xl"} height={"min-h-96"} /> && (
          <Carousel slides={slides} />
        )}
      </>
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
      <CatagoriesTabSwitch catagory={Catagories.categories} />
      <SearchBar width={'max-w-xl w-full'}/>
      </div>

      
    </div>  
  );
};

export default Books;
