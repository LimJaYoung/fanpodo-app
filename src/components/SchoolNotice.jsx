import React, { useEffect, useState } from 'react';
import './SchoolNotice.css';

const notices = [
  '📢 포도스쿨 덕력고사 개선 안내 💜',
  '📢 덕력고사 3일 뒤 오픈 예정',
  '📢 85회차 순위 업데이트 완료!',
  '📢 이벤트 응모는 이번주까지!'
];

const SchoolNotice = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="notice-wrapper">
      <div
        className="notice-track"
        style={{ transform: `translateY(-${index * 40}px)` }}
      >
        {notices.map((text, i) => (
          <div className="notice-item" key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolNotice;

