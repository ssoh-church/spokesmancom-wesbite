import React from 'react';

// Define an interface for the banner data
interface BannerData {
  title: string;
  description: string;
  backgroundImage?: string;
  breadcrumbs: {
    name: string;
    link: string;
  }[];
}

// Define the Banner component
const Banner: React.FC<BannerData> = ({ title, description, breadcrumbs, backgroundImage }) => {
  const bannerStyle = backgroundImage
  ? { backgroundImage: `url(${backgroundImage})` }
  : {};
  return (
    <div className="pager-header" style={bannerStyle}>
      <div className="container">
        <div className="page-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <ol className="breadcrumb">
            {breadcrumbs.map((item, index) => (
              <li key={index} className={index === breadcrumbs.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Banner;
