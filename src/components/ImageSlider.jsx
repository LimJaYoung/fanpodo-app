// components/ImageSlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css'

import img1 from '../assets/banner_01.png';
import img2 from '../assets/banner_02.png';
import img3 from '../assets/banner_03.png';
import img4 from '../assets/banner_04.png';
import img5 from '../assets/banner_05.png';

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      style={{ marginBottom: '32px' }}
    >
      <SwiperSlide><img src={img1} alt="slide1" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="slide2" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="slide3" /></SwiperSlide>
      <SwiperSlide><img src={img4} alt="slide4" /></SwiperSlide>
      <SwiperSlide><img src={img5} alt="slide5" /></SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
