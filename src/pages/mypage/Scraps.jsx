import React from 'react';
import './Scraps.css'

const Scraps = () => {
  return (
    <div className="scraps-container">
      <h1 className="scraps-title">📌 스크랩한 글</h1>

      <div className="scrap-card">
        <h3 className="scrap-title">BTS데뷔10주년 소식 🎉</h3>
        <p className="scrap-preview">함께 축하해요! 감동적인 순간이에요 💜</p>
      </div>

      <div className="scrap-card">
        <h3 className="scrap-title">NewJeans 포토카드 교환 ✨</h3>
        <p className="scrap-preview">남는 포카 있으신 분 DM 주세요~</p>
      </div>
    </div>
  )
}

export default Scraps