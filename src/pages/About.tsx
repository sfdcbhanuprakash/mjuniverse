
import React from 'react';
import PageBanner from '@/components/PageBanner';
import { BIO_CONTENT } from '@/lib/constants';
import { Award, Star, Heart, Music } from 'lucide-react';

const About = () => {
  const achievements = [
    { 
      icon: <Music className="w-10 h-10 text-gold" />,
      title: "13 Billboard Hot 100 #1 Singles",
      description: "More than any other male artist in the Hot 100 era"
    },
    { 
      icon: <Award className="w-10 h-10 text-gold" />,
      title: "13 Grammy Awards",
      description: "Including Album of the Year for 'Thriller'"
    },
    { 
      icon: <Star className="w-10 h-10 text-gold" />,
      title: "400+ Million Albums Sold",
      description: "Making him one of the best-selling music artists of all time"
    },
    { 
      icon: <Heart className="w-10 h-10 text-gold" />,
      title: "Over $500 Million in Charity",
      description: "Donated to various causes throughout his career"
    }
  ];

  return (
    <div>
      <PageBanner 
        title="About Michael Jackson" 
        subtitle="The Life and Legacy of a Global Icon"
        backgroundImage="/images/about-banner.jpg"
      />
      
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <div className="sticky top-8">
                <div className="p-1 bg-gold-gradient rounded-lg mb-6">
                  <img 
                    src="/images/mj-about.jpg" 
                    alt="Michael Jackson" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="bg-mjblack-light border border-gold-dark rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gold">Quick Facts</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong className="text-gold">Born:</strong> August 29, 1958</li>
                    <li><strong className="text-gold">Birthplace:</strong> Gary, Indiana, USA</li>
                    <li><strong className="text-gold">Died:</strong> June 25, 2009</li>
                    <li><strong className="text-gold">Nicknames:</strong> King of Pop, MJ</li>
                    <li><strong className="text-gold">Genres:</strong> Pop, R&B, Rock, Soul, Disco</li>
                    <li><strong className="text-gold">Occupations:</strong> Singer, Songwriter, Dancer, Philanthropist, Businessman</li>
                    <li><strong className="text-gold">Years Active:</strong> 1964–2009</li>
                    <li><strong className="text-gold">Labels:</strong> Motown, Epic, Legacy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="section-heading">The Life Journey</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-gold-light">Early Life and The Jackson 5</h3>
              <p className="text-gray-300 mb-4">{BIO_CONTENT.early_life}</p>
              <p className="text-gray-300 mb-6">
                The Jackson 5 quickly rose to fame with hits like "I Want You Back," "ABC," and "The Love You Save." Michael's exceptional talent was evident even at a young age, as he served as the group's lead vocalist and captivated audiences with his charisma and dance moves.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3 text-gold-light">Solo Career and Global Stardom</h3>
              <p className="text-gray-300 mb-4">{BIO_CONTENT.solo_career}</p>
              <p className="text-gray-300 mb-6">
                His 1982 album 'Thriller' remains a cultural landmark that transformed the music industry. The album's innovative videos, particularly the title track's 14-minute mini-movie, revolutionized the medium. By the mid-1980s, Michael had become the biggest star in the world, breaking racial barriers and setting new standards for entertainment.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3 text-gold-light">Musical Innovation and Artistry</h3>
              <p className="text-gray-300 mb-6">
                Michael's contributions to music were revolutionary. He blended R&B, pop, rock, and dance music in ways never done before. His distinctive vocal style—with its hiccups, gasps, and precise phrasing—became instantly recognizable. As a songwriter, he created complex rhythms and melodies that remain influential decades later.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3 text-gold-light">Dance and Performance</h3>
              <p className="text-gray-300 mb-6">
                Perhaps most iconic was Michael's dancing. He popularized the moonwalk in 1983, creating an optical illusion that stunned the world. His razor-sharp movements, precise choreography, and seemingly impossible leans (later revealed to be aided by specially designed shoes) set a new standard for performance. Michael's concerts were legendary events combining music, dance, and theatrical elements into immersive experiences.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3 text-gold-light">Humanitarian Work</h3>
              <p className="text-gray-300 mb-6">
                Beyond entertainment, Michael was deeply committed to humanitarian causes. He co-wrote "We Are the World" to raise money for famine relief in Africa. Throughout his career, he supported more than 39 charities and founded the "Heal the World Foundation." His concern for children and the environment was a constant theme in both his charitable work and his music.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3 text-gold-light">Legacy and Influence</h3>
              <p className="text-gray-300 mb-4">{BIO_CONTENT.legacy}</p>
              <p className="text-gray-300 mb-6">
                Every major pop performer since the 1980s—from Madonna to Beyoncé, Justin Timberlake to Bruno Mars—acknowledges Michael's influence. His album 'Thriller' remains the blueprint for pop success, while his philanthropic efforts set a standard for celebrity activism. Michael Jackson didn't just make music; he made history.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mjblack-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Achievements & Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-mjblack p-6 border border-gold-dark rounded-lg text-center hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow"
              >
                <div className="mb-4 inline-block">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mj-hero bg-cover bg-fixed bg-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">In His Own Words</h2>
          <blockquote className="text-xl md:text-2xl italic text-white max-w-4xl mx-auto">
            "In a world filled with hate, we must still dare to hope. In a world filled with anger, we must still dare to comfort. In a world filled with despair, we must still dare to dream. And in a world filled with distrust, we must still dare to believe."
          </blockquote>
          <p className="text-gold mt-4">— Michael Jackson</p>
        </div>
      </section>
    </div>
  );
};

export default About;
