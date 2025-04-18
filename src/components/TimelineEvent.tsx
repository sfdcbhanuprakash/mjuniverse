
import React from 'react';

interface TimelineEventProps {
  year: number;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ 
  year, 
  title, 
  description 
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default TimelineEvent;
