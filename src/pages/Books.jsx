import Carousel from '../components/Carousel'

const Books = () => {
  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F670d1c406dac25f050535d02%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F6729e7e443b2863157c118e7%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F6729e84843b2863157c11c55%2FwebLarge&w=1200&q=75",
  ];

  return (
    <div>
      <Carousel slides={slides}/>
      
    </div>
  )
}

export default Books