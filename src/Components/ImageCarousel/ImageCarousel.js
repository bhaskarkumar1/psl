import React, { useState, useEffect } from "react";
import './ImageCarousel.css';

const ImageCarousel = () => {
    const images = [
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",

        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",

        "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?semt=ais_hybrid",

        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",

        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80"
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
    
      // Auto-scroll functionality
      useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
    
      return (
        <div className="scroller-container">
          <button className="scroll-btn prev" onClick={prevImage}>
            &#8592;
          </button>
    
          <div className="scroller-images">
            <img src={images[currentIndex]} alt="scroller" className="scroller-image" />
          </div>
    
          <button className="scroll-btn next" onClick={nextImage}>
            &#8594;
          </button>
        </div>
      );
}

export default ImageCarousel
