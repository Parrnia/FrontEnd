import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "./assets/img/main/c5.jpg"
import img2 from "./assets/img/main/c6.jpg"
import img3 from "./assets/img/main/c1.jpg"
import img4 from "./assets/img/main/c2.jpg"
import img5 from "./assets/img/main/c3.jpg"
import img6 from "./assets/img/main/c4.jpg"
import './style.css'
export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    };
    return (
      
      <div className="slider-container">
  <link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />

  <Slider  class="sslide" ref={slider => (this.slider = slider)} {...settings}>
    <div className="slider-slide">
    <img src={img2} alt="coffee"/>
    </div>

    <div className="slider-slide">
    <img src={img1} alt="coffee"/>
    </div>
    <div className="slider-slide">
    <img src={img3} alt="coffee"/>
    </div>
    <div class="slider-slide">
    <img src={img4} alt="coffee"/>
</div>

    <div className="slider-slide">
    <img src={img5} alt="coffee"/>
    </div>
    <div className="slider-slide">
    <img src={img6} alt="coffee"/>
    </div>
  </Slider>
</div>
    );
  }
}