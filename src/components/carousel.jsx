import React, { useState, useEffect } from 'react';

const Carousel = ({ images, sx }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevValue) => {
        return prevValue === images.length - 1 ? 0 : prevValue + 1;
      });
    }, 3000); // Change the interval time here (3000ms = 3 seconds)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-[85%] h-[600px] overflow-hidden" style={sx}>
      <div
        className="relative w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-cover bg-center border-4 border-[#bd9234]"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-30 text-white cursor-pointer z-10"
        onClick={goToPrevious}
      >
        &#10094;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-30 text-white z-1"
        onClick={goToNext}
      >
        &#10095;
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer rounded-full w-3 h-3 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400 '
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
