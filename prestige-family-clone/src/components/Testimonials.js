// src/components/Testimonials.js
import React, { Component } from "react";

import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set the delay between each auto-scroll (in milliseconds)
    };
    return (
      <section>
        <div id="testimonials">
          <h2> Testimonials</h2>
          <h4>Some of the clients we've helped.</h4>
          <Slider {...settings}>
            <div>
              <h3>
                "Asset Recovery 5.0 turned a complex situation into a simple and
                successful recovery. Absolutely top-notch service!" - Jamie L.
              </h3>
            </div>
            <div>
              <h3>
                "I was amazed at how quickly Asset Recovery 5.0 worked to
                recover my assets. Their expertise is unmatched." - Samir A.
              </h3>
            </div>
            <div>
              <h3>
                "Professional and thorough from start to finish. Asset Recovery
                5.0 knows the ins and outs of asset recovery like no other." -
                Casey H.
              </h3>
            </div>
            <div>
              <h3>
                "The attention to detail and the personalized service I received
                from Asset Recovery 5.0 were beyond my expectations." - Priya M.
              </h3>
            </div>
            <div>
              <h3>
                "Thanks to Asset Recovery 5.0, I retrieved funds I didn't even
                know I was entitled to. They are the real deal!" - Eduardo G.
              </h3>
            </div>
            <div>
              <h3>
                "Asset Recovery 5.0's team provided exceptional service and were
                dedicated to my case. Highly recommended for their integrity and
                results." - Anne S.
              </h3>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
