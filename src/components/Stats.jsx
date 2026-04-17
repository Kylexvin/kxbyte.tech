import React from 'react';
import '../styles/Stats.css';

const stats = [
  { icon: '🖥️', value: '50+', label: 'Projects' },
  { icon: '😊', value: '98%', label: 'Satisfaction' },
  { icon: '👥', value: '40+', label: 'Clients' },
  { icon: '⚙️', value: '5+', label: 'Team Members' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((s, i) => (
          <div className="stats__item" key={i}>
            <div className="stats__icon">{s.icon}</div>
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;