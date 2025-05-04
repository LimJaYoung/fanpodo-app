import React from 'react';
import './ChargeBox.css';

const ChargeBox = () => {
  return (
    <div className="charge-box">
      <div className="charge-header">
        <h3>무료충전소</h3>
        <a href="#">적립/이용안내</a>
      </div>

      <div className="charge-points">
        <div className="point-box purple">
          <span className="icon">💜</span>
          <span className="value">300</span>
        </div>
        <div className="point-box pink">
          <span className="icon">⚡</span>
          <span className="value">0</span>
        </div>
      </div>

      <div className="charge-buttons">
        <button className="watch-ad">📺 광고 시청</button>
        <button className="free-charge">🔋 무료 충전</button>
      </div>

      <p className="charge-info">① 광고를 보고 300알을 받으세요!</p>
    </div>
  );
};

export default ChargeBox;