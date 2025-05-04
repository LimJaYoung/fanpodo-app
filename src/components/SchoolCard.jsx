import React from 'react';
import './SchoolCard.css'

const SchoolCard = ({icon, title, description}) => {
  return (
    <div>
      <div className="school-card">
        <div className="school-card-icon">{icon}</div>
        <h3 className="school-card-title">{title}</h3>
        <p className="school-card-desc">{description}</p>

      </div>
    </div>
  )
}

export default SchoolCard
