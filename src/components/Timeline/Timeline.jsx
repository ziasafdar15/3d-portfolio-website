import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '2025',
    title: 'Full Stack Developer Intern',
    company: 'SkyIT / GBCS Groups',
    description: 'Worked on modern React interfaces and collaborated with cross-functional teams.'
  },
  {
    year: '2024',
    title: 'Full Stack Developer Intern',
    company: 'JVR Technological Solutions',
    description: 'Developed internal tools and automation scripts.'
  },
  {
    year: '2021-Present',
    title: 'Started CS Degree',
    company: 'Your University',
    description: 'Currently pursuing degree in Computer Science and worked on personal web projects.'
  }
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
