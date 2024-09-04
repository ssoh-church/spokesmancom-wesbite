import React from 'react';

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
            <img key={index} src={item.imageUrl} alt="slider animation images" title={`#slider-caption-${index + 1}`} />
          ))}
        </div>

        {data.map((item, index) => (
          <div key={`caption-${index + 1}`} id={`slider-caption-${index + 1}`} className="nivo-html-caption slider-caption">
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h5 className="wow cssanimation fadeInBottom">{item.subtitle}</h5>
                    <h1 className="wow cssanimation leFadeInRight sequence">{item.title}</h1>
                    <p className="wow cssanimation fadeInTop" data-wow-delay="1s">{item.description}</p>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom mr-3" data-wow-delay="0.8s">Participate</a>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
                    <hr />
                    <p className='wow cssanimation fadeInBottom fadeOutTop blink'>HAVE YOU REGISTERED FOR <a href='#' className='default-btn btn-danger'>ILCON <i className="fa fa-arrow-right"></i></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroGrid;