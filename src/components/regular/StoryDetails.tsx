import React from 'react';

interface StoryDetailsProps {
  imageSrc: string;
  status: number;
  description: string;
}

const StoryDetails: React.FC<StoryDetailsProps> = ({ imageSrc, status, description }) => {
  return (
    <div className="causes-content">
      <div className="causes-thumb">
        <img src={imageSrc} alt={description} />
        {status === 0 && (
          <a href="#" className="donate-btn">
            Coming Soon<i className="ti-plus"></i>
          </a>
        )}
      </div>
      <div className="causes-details" style={{ height: '100px' }}>
        <p className='text-center' style={{fontSize: '24px'}}>{description}</p>
      </div>
    </div>
  );
};

export default StoryDetails;
