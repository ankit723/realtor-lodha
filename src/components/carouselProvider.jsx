import React, { useState, useEffect } from 'react';

const CarouselProvider = ({ children, className, sx, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children); // Converts children into an array

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevValue) =>
        prevValue === childrenArray.length - 1 ? 0 : prevValue + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [childrenArray.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div
      className={`relative w-full h-[600px] overflow-hidden ${className}`}
      style={sx}
      tabIndex={0}
      onKeyDown={handleKeyDown} // Adds keyboard navigation support
    >
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
            style={{ minWidth: '100%' }}
          >
            {child}
          </div>
        ))}
      </div>

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
        {childrenArray.map((_, index) => (
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

export default CarouselProvider;
