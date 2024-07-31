import '../App.css'
import Footer from './footer';
import Navbar from './navbar';
import "../styles/app.css"
import React, { useState, useEffect } from 'react';
import logo from  './ph.jpeg';
import image1 from './ph1.jpeg';
import image2 from './ph2.jpeg';
import image3 from './ph3.jpeg';
import backgroundImage from './ph4.jpeg';
import { Link } from 'react-router-dom';
const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const componentPosition = document.querySelector('.box').offsetTop;
      const imageBoxPosition = document.querySelector('.image-box').offsetTop;

      if (scrollPosition >= componentPosition - window.innerHeight / 2) {
        setShowContent(true);
      }

      if (scrollPosition >= imageBoxPosition - window.innerHeight / 2) {
        setShowImages(true);
        document.querySelectorAll('.image-container img').forEach((element, index) => {
          element.classList.add(`slide-in-${index + 1}`);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.image-container img').forEach((element, index) => {
        element.classList.remove(`slide-in-${index + 1}`);
      });
    };
  }, []);

  return (
    <div>
       <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    > 
     
<div className={`right-section ${showContent ? 'fade-in fade-in-top' : ''} `}>
  <h3>آزمون تاب آوری</h3>
  <p>تاب آوري مجموعه اي از ويژگي هاي نامبرده است كه در تعامل با يكديگر نتيجه مطلوب را به بار مي آورد. براي مثال اگر فردي داراي عزت نفس باشد، اما كسي را براي دريافت كمك و حمايت نداشته باشد و توانايي حل مسئله را نيز نداشته باشد، نمي تواند فرد تاب آوري باشد. تفسیر نتایج تست تاب‌آوری شامل دامنه‌ای از60 تا 300 است که هر مقدار امتیاز بالاتر باشد، بیانگر میزان تاب‎آوری بیشتر فرد پاسخ دهنده خواهد بود و برعکس، نقطه برش این پرسشنامه امتیاز 180 می‌باشد. به عبارتی، نمره پایین‌تر از 180 نشانگر عدم تاب‌آوری افراد</p>
  <Link to="/quiz1" className="button-29" role="button">
  شروع آزمون
</Link>
</div>
    </div>
      <Navbar />
      <div className="app">
        <div className="box">
        </div>
        <div className="image-box">
          <div className="image-container">
            <img
              src={image1}
              alt="Image 1"
              className={`${showImages ? 'slide-in-1' : ''} ${hoveredImage === 1 ? 'hovered' : ''}`}
              onMouseEnter={() => handleImageHover(1)}
              onMouseLeave={handleImageLeave}
            />
            <img
              src={image2}
              alt="Image 2"
              className={`${showImages ? 'slide-in-2' : ''} ${hoveredImage === 2 ? 'hovered' : ''}`}
              onMouseEnter={() => handleImageHover(2)}
              onMouseLeave={handleImageLeave}
            />
            <img
              src={image3}
              alt="Image 3"
              className={`${showImages ? 'slide-in-3' : ''} ${hoveredImage === 3 ? 'hovered' : ''}`}
              onMouseEnter={() => handleImageHover(3)}
              onMouseLeave={handleImageLeave}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Home;