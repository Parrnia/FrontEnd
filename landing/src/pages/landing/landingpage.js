import React from 'react';
import './assets/css/animate.css'
import './assets/css/main.css'
import './FlexLayout.css';
import './style.css'
import v from './computer.mp4'
import {Video} from "./video";
import ReactPlayer from 'react-player';
import NavigationMenu from  './navbar'
import img1 from "./assets/img/main/c1.jpg"
import img2 from "./assets/img/main/c2.jpg"
import img6 from "./assets/img/main/d1.jpeg"
import img4 from "./assets/img/main/c4.jpg"
import img5 from "./assets/img/main/c5.jpg"
import cup from './assets/img/main/coffee-cup.svg'
import laptop from './assets/img/main/laptop.svg'
import layout from "./assets/img/main/layout.svg"
import img3 from "./assets/img/main/c6.jpg"
import main from "./assets/img/main/h1.png"
import main1 from "./assets/img/main/main1.jpeg"
import main2 from "./assets/img/main/main2.jpeg"
import about1 from"./assets/img/about/about-left-shape.svg" ;
import about12 from "./assets/img/about/left-dots.svg"
import about2 from"./assets/img/about/about-right-shape.svg" ;
import about21 from "./assets/img/about/right-dots.svg"
import SliderPage from "./arrow";
import Select from "react-select";
import { Link } from 'react-router-dom';
import landing  from  './assets/img/hero/hero-img.png'
import footer from './assets/img/footer.png';
import main5 from './assets/img/landing.jpeg'

import logo from './assets/img/logo/logo.svg'
import Slider from 'react-slick';
import  { useEffect , useState ,useRef} from 'react';
import WOW from 'wow.js';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function MyComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [selectedItem, setSelectedItem] = useState('option1');
  const [index, setIndex] = React.useState(0);
  const [videoRatio, setVideoRatio] = useState("4_3");

  

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
    
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel)
    },
    created() {
    setLoaded(true)
    },
    })

    const [loading, setLoading] = useState(false);
  const handleSearch = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  };
  const handleKeyDown = (event) => {
  if (event.keyCode === 13) {
  loading();
  }
  };
  const options = [

    { value: 'option1', label: 'حضوری' },
    { value: 'option2', label: 'آنلاین' },
    { value: 'option3', label: 'حضوری و آنلاین' },
  ];
  const handleSelectChange = (selectedOption) => {
    setSelectedItem(selectedOption.value);
  };
  useEffect(() => {
    // Preloader
    window.onload = function () {
      window.setTimeout(fadeout, 500);
    };
    function fadeout() {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.display = 'none';
      }
    }

    // Sticky Header
  
    // Menu Scroll
    const pageLinks = document.querySelectorAll('.page-scroll');

    pageLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      });
    });

    // Section Menu Active
    function onScroll(event) {
      const sections = document.querySelectorAll('.page-scroll');
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      sections.forEach((currLink) => {
        const val = currLink.getAttribute('href');
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement &&
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector('.page-scroll.active').classList.remove('active');
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', onScroll);

    // Close navbar-collapse when a link is clicked




    // WOW active
    new WOW().init();

    // Initialize Swiper

  }, []);


  return (
    
    <div class= "land">
      <link rel="stylesheet" href="path/to/linea-icons.css"></link>
       <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
   <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
   <NavigationMenu />
        <body>
        <section id="home">
        <div id="home" class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-content">
            <h1 class="wow" data-wow-delay=".4s">
             انجمن علمی دانشکده مهندسی کامپیوتر
            </h1>
            <p class="wow" data-wow-delay=".6s">
            این سایت  که به منظور اطلاع‌رسانی درباره‌ی رویدادها 
            و رخدادهای مختلف تأسیس شده است. این سایت به کاربران امکان می‌دهد تا اطلاعات مربوط به رویدادهای مختلف را مشاهده کنند، شامل رویدادهای فرهنگی، هنری، ورزشی، سیاسی و
             سایر دسته‌بندهای مرتبط. 
            اطلاعاتی که دراین سایت  قرار می‌گیرد می‌تواند شامل تاریخ و 
            زمان برگزاری رویداد، مکان، برنامه‌ها، توضیحات و جزئیات مربوطه باشد.
            </p>
           
        
            <a
              href="javascript:void(0)"
              class="main-btn border-btn btn-hover wow fadeInUp"
              data-wow-delay=".6s"
              >درباره ی ما</a
            >
           
          </div>
        </div>
    
      </div>
    </div>
    <div class="hero-img" data-wow-delay=".5s">
             <img src = {main} alt="" />
          </div>
    </div>
    
       </section>
    
    <div>
  
      <SliderPage />
    </div>
   <div className="menu">

  <ul className="m-navbar">


    <li
      className={`m-navbar-item ${selectedItem === 'تمام رویدادها' ? 'active' : ''}`}
      onClick={() => handleItemClick('تمام رویدادها')}
    >
      تمام رویدادها
    </li>
    <li
      className={`m-navbar-item ${selectedItem === 'Item 2' ? 'active' : ''}`}
      onClick={() => handleItemClick('Item 2')}
    >
     ویژه من
    </li>
    <li
      className={`m-navbar-item ${selectedItem === 'Item 3' ? 'active' : ''}`}
      onClick={() => handleItemClick('Item 3')}
    >
      این هفته
    </li>
  
    <li>
   
    <div className="select">
            <Select options={options} onChange={handleSelectChange} />
          </div>
      </li>
  
      <li
      >
          <h2>محبوب ترین رویداد های 
    
    </h2>
    </li>

  </ul>
  <div className="content">
    <div className={`content-item ${selectedItem === 'تمام رویدادها' ? 'active' : ''}`}>
    <a href="#">
      <div className="flex-item">
        <img src={img1} alt="Image 1" />
        <h4>دوره مطالعاتی علوم اعصاب </h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img2} alt="Image 2" />
       
      
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img3} alt="Image 3" />
        <h4>فیناپ رمزارز</h4>
      </div>
      <div className="flex-item">
        <img src={img4} alt="Image 4" />
        <h4>کارگاه حضوری</h4>
      </div>
      </a>
    </div>
    <div className={`content-item ${selectedItem === 'Item 2' ? 'active' : ''}`}>
    <a href="#">
      <div className="flex-item">
        <img src={img5} alt="Image 5" />
        <h4>کارگاه حضوری</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img3} alt="Image 6" />
        <h4>فیناپ رمزارز</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img2} alt="Image 7" />
        <h4>برنامه نویسی پاییتون</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img1} alt="Image 8" />
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
    </div>
    <div className={`content-item ${selectedItem === 'Item 3' ? 'active' : ''}`}>
    <a href="#">
      <div className="flex-item">
        <img src={img4} alt="Image 9" />
        
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img2} alt="Image 10" />
        <h4>کارگاه حضوری</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img1} alt="Image 11" />
        <h4>فیناپ رمزارز</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img3}alt="Image 12" />
        <h4>برنامه نویسی پاییتون</h4>
      </div>
      </a>
    </div>
  </div>
  <div className="content">
    <div className={`content-item ${selectedItem === 'option1' ? 'active' : ''}`}>
    <a href="#">
    <div className="flex-item">
        <img src={img1} alt="Image 1" />
        <h4>دوره مطالعاتی علوم اعصاب </h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img2} alt="Image 2" />
       
      
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img3} alt="Image 3" />
        <h4>فیناپ رمزارز</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img4} alt="Image 4" />
        <h4>کارگاه حضوری</h4>
      </div>
      </a>
    </div>
    <div className={`content-item ${selectedItem === 'option2' ? 'active' : ''}`}>
    <a href="#">
    <div className="flex-item">
        <img src={img5} alt="Image 5" />
        <h4>کارگاه حضوری</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img4} alt="Image 6" />
        <h4>فیناپ رمزارز</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img2} alt="Image 7" />
        <h4>برنامه نویسی پاییتون</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img1} alt="Image 8" />
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
    </div>
    
    <div className={`content-item ${selectedItem === 'option3' ? 'active' : ''}`}>
    <a href="#">
    <div className="flex-item">
        <img src={img4} alt="Image 9" />
        
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
      <div className="flex-item">
        <img src={img2} alt="Image 10" />
        <h4>کارگاه حضوری</h4>
      </div>
      <a href="#">
      <div className="flex-item">

        <img src={img1} alt="Image 11" />
        <h4>فیناپ رمزارز</h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img5}alt="Image 12" />
        <h4>برنامه نویسی پاییتون</h4>
      </div>
      </a>
    </div>
  </div>
</div>
<h4 className="text-2xl font-bold mr-8 mt-4 text-right right-250">پرفروش ترین رویدادها</h4>
<div className="content">

<a href="#">
      <div className="flex-item">
        <img src={img1} alt="Image 1" />
        <h4>دوره مطالعاتی علوم اعصاب </h4>
      </div>
      </a>
      <a href="#">
      <div className="flex-item">
        <img src={img2} alt="Image 2" />
       
      
        <h4>رشد و بهینه‌سازی در اپلیکیشن</h4>
      </div>
      </a>
      <a href="#" >
      <div className="flex-item">
  
        <img src={img3} alt="Image 3" />
        <h4>فیناپ رمزارز</h4>
      </div>
      </a>
    </div>

    
    <div className="card-container">
      <div className="card">
        <div className="card-content">
        <div class="icon">
        <div className="circle">
         
          <img src={cup} alt =""/>
           </div>
          </div>
          <h3>دسترسی راحت</h3>
             <p>
               شما با استفاده از این سایت  به راحتی و در کمترین زمان مبتوانید رویداد
                دلخواه خود را شرکت کنید 
             </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
        <div class="icon">
        <div className="circle">
          <img src={laptop} alt =""/>
        
           </div>
           </div>
           <h3>ثبت نام و بلیط‌ فروشی آنلاین</h3>
             <p>
             این سایت  به سازمان‌دهندگان رویداد امکان می‌دهد برای رویدادهای خود سیستم ثبت نام و بلیط‌فروشی آنلاین را 
             فعال کنند. شرکت‌کنندگان می‌توانند به راحتی از طریق 
             سایت ایونر بلیط‌های رویداد را خریداری کنند و ثبت نام کنند
             </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
        <div class="icon">
        <div className="circle">
          <img src={layout} alt =""/>
           </div>
           </div>
           <h3>مدیریت برنامه‌های رویداد</h3>
             <p>
             ایوند امکان مدیریت برنامه‌های رویداد را فراهم می‌کند
             سازمان‌دهندگان می‌توانند زمانبندی رویدادها را مشخص کرده و جلسات، سخنرانی‌ها، کارگاه‌ها و 
             سایر فعالیت‌های مرتبط را برنامه‌ریزی و مدیریت کنند
             </p>
        </div>
      
      </div>
    </div>

    <div className="App">
    <div className="videoContainer">
        <video src={v}
               id="myVideo1"
               muted={true}
               autoplay={true}
               ratio={videoRatio}
               loop={true}
        />
    </div>
    <div className="textContainer">
    <p>علمی، دانشگاه علم و صنعت ایران به‌عنوان فعال‌ترین دانشگاه در زمینه ایجاد و سازماندهی انجمن‌های علمی دانشجویان طی سال‌های گذشته در بین دانشگاه‌های کشور بوده است. از اهداف مهم انجمن‌های علمی دانشجویان، ایجاد روحیه همکاری در بدنه دانشجویی دانشگاه است. این انجمن‌ها به دنبال شرکت در مسابقات علمی، چاپ نشریات علمی در دانشکده‌ها، انجام طرح‌های پژوهشی و سایر فعالیت‌های مرتبط می‌باشند.</p>
        <p>حوزه فعالیت‌های انجمن علمی شامل مناظره و نقد علمی، هم‌اندیشی و نشست‌های تخصصی، مطالعات و پژوهش‌های علمی، نشر و ترویج یافته‌های علمی و فعالیت‌های کمک آموزشی است. برگزاری دوره‌های آموزشی، برگزاری جشنواره‌ها، سمینارها و مسابقات علمی، برنامه‌ریزی و اجرای بازدیدهای علمی از مراکز علمی، صنعتی و فناوری و آشنایی دانشجویان با فعالیت‌های علمی دانشکده نیز جزء این فعالیت‌ها می‌باشد.</p>
    </div>
</div>


    <div class="slider">
      <h2>دیگر برگزارکننده ها</h2>
  <div class="slide-track">
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
    </div>
  </div>
</div>


  <div className="under-footer">
  <footer class="footer">
  <div class="container">
    <div class="footer-container">
      <div class="footer-section">
        <p class="desc mb-30 text-black" >
        
        </p>
        <ul class="socials">
          <li>
            <a href="jvascript:void(0)">
              <i class="lni lni-facebook-filled"></i>
            </a>
          </li>
          <li>
            <a href="jvascript:void(0)">
              <i class="lni lni-twitter-filled"></i>
            </a>
          </li>
          <li>
            <a href="jvascript:void(0)">
              <i class="lni lni-instagram-filled"></i>
            </a>
          </li>
          <li>
            <a href="jvascript:void(0)">
              <i class="lni lni-linkedin-original"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="widget-title">لینک های مفید</h4>
        <ul class="footer-links">
          <li>
            <a href="javascript:void(0)">Home</a>
          </li>
          <li>
            <a href="javascript:void(0)">Features</a>
          </li>
          <li>
            <a href="javascript:void(0)">About</a>
          </li>
          <li>
            <a href="javascript:void(0)">Why</a>
          </li>
          <li>
            <a href="javascript:void(0)">Pricing</a>
          </li>
          <li>
            <a href="javascript:void(0)">Clients</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="widget-title">پشتیبانی</h4>
        <ul class="footer-links">
          <li>
            <a href="javascript:void(0)">FAQ</a>
          </li>
          <li>
            <a href="javascript:void(0)">Privacy Policy</a>
          </li>
          <li>
            <a href="javascript:void(0)">Terms of Service</a>
          </li>
          <li>
            <a href="javascript:void(0)">Documentation</a>
          </li>
          <li>
            <a href="javascript:void(0)">Contact</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="widget-title">تماس با ما</h4>
        <ul class="footer-contact">
          <li>
            <span>تلفن: ۰۲۱-۷۷۷۴۳۲۳۴</span>
            <i class="lni lni-phone"></i>
          </li>
          <li>
            <span>example@hamil.com</span>
            <span>:</span>
            <span>ایمیل</span>
            <i class="lni lni-envelope"></i>
          </li>
          <li>
            <span>دانشگاه علم و صنعت</span>
            <i class="lni lni-map-marker"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
      </body>
    </div>
  );
}

export default MyComponent;
function Arrow(props) {
const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

{/* <section id="features" class="feature-section pt-120">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-8 col-sm-10">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-laptop"></i>
          </div>
          <div class="content">
            <h3>ثبت نام و بلیط‌ فروشی آنلاین</h3>
            <p>
            ایوند به سازمان‌دهندگان رویداد امکان می‌دهد برای رویدادهای خود سیستم ثبت نام و بلیط‌فروشی آنلاین را 
            فعال کنند. شرکت‌کنندگان می‌توانند به راحتی از طریق 
            سایت ایونر بلیط‌های رویداد را خریداری کنند و ثبت نام کنند
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-10">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-layout"></i>
          </div>
          <div class="content">
            <h3>مدیریت برنامه‌های رویداد</h3>
            <p>
            ایوند امکان مدیریت برنامه‌های رویداد را فراهم می‌کند
            سازمان‌دهندگان می‌توانند زمانبندی رویدادها را مشخص کرده و جلسات، سخنرانی‌ها، کارگاه‌ها و 
            سایر فعالیت‌های مرتبط را برنامه‌ریزی و مدیریت کنند
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-10">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-coffee-cup"></i>
          </div>
          <div class="content">
            <h3>دسترسی راحت</h3>
            <p>
              شما با استفاده از این سایت  به راحتی و در کمترین زمان مبتوانید رویداد
               دلخواه خود را شرکت کنید 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
    <section id="about" class="about-section pt-150">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <div class="about-img">
              <img src={main1} alt="" class="w-100" />
              <img
                src={about1}
                alt=""
                class="shape shape-1"
              />
              <img
                src={about12}
                alt=""
                class="shape shape-2"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="about-content">
              <div class="section-title mb-30">
                <h2 class="mb-25 wow fadeInUp  text-right" data-wow-delay=".2s">
                ایوند برای برگزار کنندگان
                </h2>
                <p class="wow fadeInUp text-right" data-wow-delay=".4s">
                مدیریت برنامه‌های رویداد: با استفاده از ایوند، برگزارکنندگان رویداد می‌توانند برنامه‌های رویداد را به‌طور جامع و سازمان‌یافته مدیریت کنند
      این شامل زمانبندی جلسات، سخنرانی‌ها، کارگاه‌ها و سایر فعالیت‌های مرتبط با رویداد است. همچنین، می‌توانند اطلاعات و جزئیات این برنامه‌ها را به شرکت‌کنندگان ارائه دهند.
مدیریت شرکت‌کنندگان: ایوند به برگزارکنندگان رویداد امکان مدیریت شرکت‌کنندگان را می‌دهد.
 این شامل ثبت نام شرکت‌کنندگان، مدیریت اطلاعات شخصی آن‌ها، ارسال پیام‌ها و اعلان‌ها، دریافت بازخورد و
  ارائه خدمات پس از رویداد به شرکت‌کنندگان است

                </p>
              </div>
              <a
                href="javascript:void(0)"
                class="main-btn btn-hover border-btn wow fadeInUp"
                data-wow-delay=".6s"
                >ایجاد رویداد</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about-section pt-150">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <div class="about-content">
              <div class="section-title mb-30">
                <h2 class="mb-25 wow fadeInUp  text-left" data-wow-delay=".2s">
                  ایوند برای شرکت کنندگان
                </h2>
                <p class="wow fadeInUp text-left" data-wow-delay=".4s">
                ثبت نام آنلاین: با استفاده از ایوند، شرکت‌کنندگان می‌توانند به راحتی و با سرعت ثبت نام خود
                 را برای رویدادها انجام دهند. این امکان به آن‌ها این اجازه را می‌دهد تا از طریق پلتفرم آنلاین اطلاعات شخصی خود را وارد کرده و بلیط یا شرکت‌نامه رویداد را تهیه کنند.
اطلاعات جامع رویداد: ایوند به شرکت‌کنندگان اطلاعات جامع و کاملی در مورد رویدادها ارائه می‌دهد. این شامل توضیحات رویداد، برنامه‌های جلسات، لیست سخنرانان، محل برگزاری و سایر اطلاعات مرتبط با رویداد است. شرکت‌کنندگان می‌توانند
 از این اطلاعات برای برنامه‌ریزی و شرکت بهتر در رویداد استفاده کنند.
                </p>
              </div>
              <ul>
                <li>دسترسی راحت</li>
                <li>مدیریت رویداد ها</li>
                <li>پشتیبانی</li>
              </ul>
              <a
                href="javascript:void(0)"
                class="main-btn btn-hover border-btn wow fadeInUp"
                data-wow-delay=".6s"
                >ورود/عضویت</a
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 order-first order-lg-last">
            <div class="about-img-2">
              <img src={main2} alt="" class="w-100" />
              <img
                src={about2}
                alt=""
                class="shape shape-1"
              />
              <img
                src={about21}
                alt=""
                class="shape shape-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section> */}