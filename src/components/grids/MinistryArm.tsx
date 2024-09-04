import React from 'react';

interface MinistryArmItem {
    imageSrc: string
    alt: string
    link: string
  }

interface MinistryArmProps {
  data: MinistryArmItem[];
}

const MinistryArm: React.FC<MinistryArmProps> = ({ data }) => {
  return (
    <div className="sponsor-section my-3">
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '38px' }}>Our Different Ministry Arm</h2>
      </div>
      <div className="container">
        <ul id="sponsor-carousel" className="sponsor-items owl-carousel">
          {data.map((item, index) => (
            <li key={index} className="sponsor-item">
              <a href={item.link}><img src={item.imageSrc} alt={item.alt} /></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MinistryArm;
