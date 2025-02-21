import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {

  const slides = [
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe0fbb3ab78db87d20d096%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66d9846a8e32337c4bab9e01%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe0fe13ab78db87d20d25d%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe10243ab78db87d20d483%2FwebLarge&w=1200&q=75",
    "https://zebralearn.com/_next/image/?url=https%3A%2F%2Fapi.reader.zebralearn.com%2Fapi%2Fbanner%2Fimages%2F66fe10033ab78db87d20d2f8%2FwebLarge&w=1200&q=75"
  ];

  return (
    <div>
      <Carousel slides={slides}/>
      
    </div>
  )
}

export default Home