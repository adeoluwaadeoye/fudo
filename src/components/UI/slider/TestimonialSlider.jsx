import React from "react";
import Slider from "react-slick";

import avatar1 from "../../../assets/images/avatar1.jpg";
import avatar2 from "../../../assets/images/avatar2.jpg";
import avatar3 from "../../../assets/images/avatar3.jpg";
import avatar4 from "../../../assets/images/avatar4.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "I absolutely loved the pizza from Tasty Treat! The flavors were
          amazing, and the crust was perfectly crispy. Will definitely order
          again!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={avatar1} alt="customer" className="rounded" />
          <h6>Jane Doe</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          "The variety of dishes at Tasty Treat is incredible. I tried their
          burgers, and they were mouthwatering! Great service too."
        </p>
        <div className="slider__content d-flex align-items-center gap-">
          <img src={avatar2} alt="customer" className="rounded" />
          <h6>David Morales</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          "Tasty Treat's pizza is the best I've ever had. The cheese, the sauce,
          everything is just perfect. Highly recommended!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={avatar3} alt="customer" className="rounded" />
          <h6>Dani Almarie</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          "Luno Johnson here! The food at Tasty Treat is consistently amazing. I
          can't get enough of their delicious offerings. Keep it up!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={avatar4} alt="customer" className="rounded" />
          <h6>Luno Johnson</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
