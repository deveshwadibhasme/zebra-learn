import Carousel from '../components/Carousel'

const Course = () => {
  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F670d1f2b6dac25f050536aa3%2FwebLarge&w=1200&q=75",
  ];

  return (
    <div>
      <Carousel slides={slides}/>
      
    </div>
  )
}

export default Course