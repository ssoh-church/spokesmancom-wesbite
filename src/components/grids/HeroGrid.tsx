// HeroGrid.tsx

import React from 'react';
import Image from 'next/image';

interface SlideData {
  imageUrl: string;
  subtitle: string;
  title: string;
  description: string;
}

interface HeroGridProps {
  data: SlideData[];
}

const HeroGrid: React.FC<HeroGridProps> = ({ data }) => {
  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        <div id="main-slider" className="nivoSlider">
          {data.map((item, index) => (
            <div key={index}>
              <Image src={`/${item.imageUrl}`} alt="" width={1920} height={1080} />
              <div className="nivo-html-caption slider-caption" id={`slider-caption-${index + 1}`}>
                <div className="display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="slider-text">
                        <h5 className="wow cssanimation fadeInBottom">{item.subtitle}</h5>
                        <h1 className="wow cssanimation leFadeInRight sequence">{item.title}</h1>
                        <p className="wow cssanimation fadeInTop" data-wow-delay="1s">{item.description}</p>
                        <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Participate</a>
                        <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGrid;
