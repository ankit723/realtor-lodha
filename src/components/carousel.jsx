import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-[85%] h-[600px] overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-300"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-30 text-white cursor-pointer"
        onClick={goToPrevious}
      >
        &#10094;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-30 text-white cursor-pointer"
        onClick={goToNext}
      >
        &#10095;
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer rounded-full w-3 h-3 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
