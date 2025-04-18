
import React from 'react';
import PageBanner from '@/components/PageBanner';
import TimelineEvent from '@/components/TimelineEvent';
import { TIMELINE_EVENTS } from '@/lib/constants';

const Timeline = () => {
  return (
    <div>
      <PageBanner 
        title="The MJ Timeline" 
        subtitle="A journey through the key moments in Michael Jackson's extraordinary life"
        backgroundImage="/images/timeline-banner.jpg"
      />
      
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-12 text-center">
              From child prodigy to the King of Pop, this interactive timeline traces Michael Jackson's 
              remarkable journey through the defining moments that shaped his career and legacy.
            </p>
            
            <div className="timeline-container">
              {TIMELINE_EVENTS.map((event, index) => (
                <TimelineEvent 
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mjblack-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">The Thriller Revolution</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            The 1982 release of Thriller wasn't just a pivotal moment for Michael Jackson—it was a 
            watershed for music history. The album shattered records, broke racial barriers on MTV, 
            and continues to influence artists today.
          </p>
          
          <div className="max-w-xl mx-auto p-6 bg-mjblack border border-gold-dark rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gold">Thriller by the Numbers</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-gold text-black rounded-full font-bold mr-3">1</span>
                <span className="text-gray-300">Best-selling album of all time</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-gold text-black rounded-full font-bold mr-3">8</span>
                <span className="text-gray-300">Grammy Awards won</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-gold text-black rounded-full font-bold mr-3">7</span>
                <span className="text-gray-300">Singles released from the album</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-gold text-black rounded-full font-bold mr-3">37</span>
                <span className="text-gray-300">Weeks at #1 on Billboard 200</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-gold text-black rounded-full font-bold mr-3">14</span>
                <span className="text-gray-300">Minute length of the revolutionary Thriller music video</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
