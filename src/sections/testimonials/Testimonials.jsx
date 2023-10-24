import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination, Autoplay, Keyboard, } from "swiper/modules";

import testimonials from "./data";
import Testimonial from "./Testimonial";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Colleagues Say about me</h2>
      <p>Some of my old Colleagues said some nice things...</p>
      <div className="container test">
        <div className="test" style={{margin: "0 auto"}}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Pagination, Autoplay, Keyboard]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Testimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
