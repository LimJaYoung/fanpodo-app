import React, {useState} from 'react';
import './FandomAccordion.css'

const FandomAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSubMenu = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    };
    const fandoms = [
      {name:'BTS',  icon: '💜', sub: ['멤버 소개', '앨범 정보','팬 미팅', '월드투어 일정','포토 갤러리', '굿즈 소개']},
      {name:'IU',  icon: '🎤', sub: ['활동 소식', '음원 목록','갤러리','팬레터 보내기','유튜브 영상', '공식 팬카페 안내']},
      {name:'NewJeans',   icon: '🌟', sub: ['최신 앨범', '무대 영상','응원 이벤트','직캠 모음','인터뷰 모음','데뷔 비하인드']},
    ];
   
    return(
        <div className="home-container">
            <h1 className="home-title" > 팬포도 홈</h1>
            <p className="home-text">여기는 팬포도 메인 피드입니다</p>
            <div className="home-section">
                <h2 className="section-title">🔥 실시간 인기 팬덤</h2>
                <ul className="fandom-list">
                  {fandoms.map((fandom , index) => (
                  <li
                  key={index}
                  className={`fandom-item ${openIndex === index ? 'open' :''}`}
                  onClick={() => toggleSubMenu(index)}
                  >
                    {fandom.icon} {fandom.name}
                    <ul className="sub-menu">
                      {fandom.sub.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </li>
                  ))}
                </ul>
            </div>
        </div>
    )
}

export default FandomAccordion;