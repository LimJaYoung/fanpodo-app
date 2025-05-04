import React from 'react';
import SchoolHeader from '../components/SchoolHeader';
import SchoolNotice from '../components/SchoolNotice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './FanpodoSchool.css';

const schoolCards = [
    {
        icon:'📘',
        title:'덕력고사',
        description:"나의 팬심을 테스트하고 친구들과 순위 경쟁을 해보세요!"
    },
    {
        icon:'🎓',
        title:'포도스쿨',
        description:"아이돌 지식, 역사 등을 배워보는 즐거운 공간이예요!!"
    },
    {
        icon:'🏆',
        title:'덕포인트 랭킹',
        description:"활동을 통해 포인트를 모으고 랭킹을 확인하세요." 
    },
    {
        icon:'🧠',
        title:'지식 퀴즈',
        description:"아이돌 관련 퀴즈에 도전하세요!" 
    },
    {
        icon:'🗂️',
        title:'자료실',
        description:"덕질에 필요한 정보를 모아봤어요!" 
    },
    {
        icon:'🎤',
        title:'팬미팅 일정',
        description:"다가오는 팬미팅 정보를 확인하세요" 
    },
    {
        icon:'📷',
        title:'포토 갤러리',
        description:"랜들이 공유한 사진들을 둘러보세요" 
    }
]

const FanpodoSchool = () => {
    return (
      <div className="container">
        <div className="school-header">
          <SchoolHeader />
        </div>
        <div className="school-notice">
          <SchoolNotice />
        </div>
        <div className="SwiperSlider">
            <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={3.2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
            {schoolCards.map((card, idx) => (
                <SwiperSlide key={idx}>
                <div className="school-card">
                    <div className="icon">{card.icon}</div>
                    <div className="title">{card.title}</div>
                    <div className="desc">{card.description}</div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        
      </div>
    );
  };

  export default FanpodoSchool;