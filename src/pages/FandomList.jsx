import React from 'react';
import './FandomList.css'

const FandomList = () => {
    const fandoms = [
        {
            name: 'BTS',
            icon:'🦋'
        },
        {
            name: 'IU',
            icon:'🎤'
        },
        {
            name: 'NewJeans',
            icon:'🌟'
        },
        {
            name: 'BLACKPINK',
            icon:'💖'
        },
        {
            name: 'SEVENTEEN',
            icon:'🐰'
        },
        {
            name: 'EXO',
            icon:'🦊'
        },
    ]

  return (
    <div className="fandom-container">
        <h1 className="fandom-title"> 전체 팬클럽 리스트</h1>
        <div className="fandom-grid">
            {fandoms.map((fandom, index)=> (
                <div key={index} className="fandom-card">
                    <span className="fandom-icon">{fandom.icon}</span>
                    <span className="fandom-name">{fandom.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FandomList