// EventSection.tsx

import React from 'react';

 interface EventPost {
    imageSrc: string;
    title: string;
    startedOn: string;
    location: string;
    link: string;
  }
  
   interface EventSectionProps {
    eventData: EventPost[];
    limit?: number; 
  }

const EventSection: React.FC<EventSectionProps> = ({ eventData, limit }) => {
  const limitedEventData = limit ? eventData.slice(0, limit) : eventData;

  return (
    <section className="blog-section bg-grey bd-bottom padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h2>Upcoming Events</h2>
          <span className="heading-border"></span>
          <p>Help today because tomorrow you may be the one who needs more helping!</p>
        </div>
        <div className="row">
          <div className="col-lg-12 xs-padding">
            <div className="blog-items grid-list row">
              {limitedEventData.map((item: EventPost, index: number) => (
                <div key={index} className="col-md-4 padding-15">
                  <div className="blog-post">
                    <img src={item.imageSrc} alt="blog post" />
                    <div className="blog-content">
                      <h3><a href="#">{item.title}</a></h3>
                      <p><i className="ti-calendar mx-1"></i>Started On: {item.startedOn}</p>
                      <p><i className="ti-location-pin mx-1"></i>{item.location}</p>
                      <a href={item.link} className="post-meta">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
