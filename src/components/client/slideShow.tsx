import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const slideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    { id: 1, src: 'https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558', alt: 'Image 1' },
    { id: 2, src: 'https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558', alt: 'Image 2' },
    { id: 3, src: 'https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558', alt: 'Image 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`slide ${slide.id === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
    </div>
  );
};

export default slideShow;
