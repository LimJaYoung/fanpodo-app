import React from 'react';
import {useNavigate} from 'react-router-dom';
import './SchoolHeader.css'

const SchoolHeader = () => {
    const navigate = useNavigate();

  return (
    <header className='school-header-wrapper'>
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1 className="school-title">포도스쿨</h1>
      <button className="icon-button">🏫</button>
    </header>
  )
}

export default SchoolHeader
