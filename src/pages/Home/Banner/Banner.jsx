import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';

const Banner = () => {
    return (
        <div>
            <Swiper
             slidesPerView={2}
             spaceBetween={30}
            autoplay
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img  src="Flute.jpg" alt="" />
            <h3 className="text-3xl text-center font-bold my-3">Flute</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img  src="Guitar.jpg" alt="" />
            <h3 className="text-3xl text-center font-bold my-3">Guitar</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img  src="Piano.jpg" alt="" />
            <h3 className="text-3xl text-center font-bold my-3">Piano</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img  src="Saxofone.jpg" alt="" />
            <h3 className="text-3xl text-center font-bold my-3">Saxofone</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img  src="Violin.jpg" alt="" />
            <h3 className="text-3xl text-center font-bold my-3">Violin</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;