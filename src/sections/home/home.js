import React, { Component } from 'react';
import './home.css'

import Slider from "react-slick";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



class Home extends Component {
    render(){

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <div className="section home">
                <Slider {...settings} className="background-slider">
                    <div className="background-image">
                        {/* <img src="/images/testing.png" /> */}
                    </div>
                    <div className="background-image">
                        {/* <img src="/images/testing.png" /> */}
                    </div>
                </Slider>
                <span className="title">Home</span>
            </div>
        );
    }
}

export default Home