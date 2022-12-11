import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import "./homeslider.css"

import homeImg from "../../assets/images/jollofrice.png";
import solaceImg from "../../assets/images/african-lady.png";
import hairImg from "../../assets/images/woman-hair.png";

function HomeSlider() {
  return (
    <div className=" pb-20 bg-white home">
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        speed= {1000}
        effect= 'fade'
        loop= "true"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="w-full h-full swiper"

      >
        <SwiperSlide className="slide">
          <div className="w-full h-full mt-4 md:mt-6">
            <div className=" grid grid-cols-2 place-items-center gap-4 mx-1 md:mx-4">
              <div className="ml-1">
                <p className="text-[#88CD52] capitalize text-sm md:text-lg">
                  Meals & Drinks
                </p>
                <h3 className="text-[#303929] text-sm md:text-xl uppercase font-bold">
                  Jollof Rice 
                </h3>
                <p className="text-s md:text-md mb-4">
                  Click below for more delicious dishes
                </p>
                <Link
                  to="/"
                  className="btn bg-black text-white p-2.5 mt-2 hover:bg-white hover:text-black"
                  
                >
                  Check More
                </Link>
              </div>
              <img
                src={homeImg}
                alt=""
                className="w-full h-full bg-cover bg-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="w-full h-full mt-4 md:mt-6">
            <div className=" grid grid-cols-2 place-items-center gap-4 mx-1 md:mx-4">
              <div className="ml-1">
                <p className="text-[#88CD52] capitalize text-sm md:text-lg">
                  Fashion & Jewelry
                </p>
                <h3 className="text-[#303929] text-sm md:text-xl uppercase font-bold">
                  Fashion
                </h3>
                <p className="text-s md:text-md mb-4">
                  Get beautiful African fabrics and jewelries
                </p>
                <Link
                  to="/"
                  className="btn bg-black text-white p-2 mt-2 hover:bg-white hover:text-black"
                >
                  Check More
                </Link>
              </div>
              <img
                src={solaceImg}
                alt=""
                className="w-full h-full bg-cover bg-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="w-full h-full mt-4 md:mt-6">
            <div className=" grid grid-cols-2 place-items-center gap-4 mx-1 md:mx-4">
              <div className="ml-1">
                <p className="text-[#88CD52] capitalize text-sm md:text-lg">
                  Health & Beauty
                </p>
                <h3 className="text-[#303929] text-sm md:text-xl uppercase font-bold">
                  Hair Beauty
                </h3>
                <p className="text-s md:text-md mb-4">Get wigs and braids</p>
                <Link
                  to="/"
                  className="btn bg-black text-white p-2 mt-2 hover:bg-white hover:text-black"
                >
                  Check More
                </Link>
              </div>
              <img
                src={hairImg}
                alt=""
                className="w-full h-full bg-cover bg-center"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlider;
