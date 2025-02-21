import Carousel from '../components/Carousel'
import Skeleton from "../components/Skeleton";

const Live = () => {
  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F670fc4236dac25f05061b3b9%2FwebLarge&w=1200&q=75"
  ];

  return (
    <div className="">
    <>
      {
        <Skeleton width={"max-w-4xl"} height={"min-h-96"} /> && (
        <Carousel slides={slides} />
      )}
    </>
  </div>
  )
}

export default Live