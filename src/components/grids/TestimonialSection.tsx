import React from 'react';

interface TestimonialItem {
  text: string;
  profileImg: string;
  name: string;
  role: string;
}

interface TestimonialSectionProps {
  testimonialData: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonialData }) => {
  return (
    <section className="testimonial-section bd-bottom padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h2>What People Say</h2>
          <span className="heading-border"></span>
          <p>Help today because tomorrow you may be the one who <br /> needs more helping!</p>
        </div>
        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">
          {testimonialData.map((item, index) => (
            <div key={index} className="testimonial-item">
              <p>{item.text}</p>
              <div className="testi-footer">
                <img src={item.profileImg} alt="profile" />
                <h4>{item.name} <span>{item.role}</span></h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
