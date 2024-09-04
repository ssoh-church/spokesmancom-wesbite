// CampaignsSection.js

import React from 'react';

const CampaignsSection = () => {
  return (
    <section className="campaigns-section bd-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 xs-padding">
            <div className="campaigns-wrap">
              <h4>Our History</h4>
              <h2>Know our history just by watching.</h2>
              <p>Greatness starts as a seed then grows into a big tree that bears much fruits</p>
            </div>
          </div>
          <div className="col-md-6 xs-padding">
            <div className="video-wrap">
              <img src="/img/video2.webp" alt="video" />
              <div className="play">
                <a className="img-popup" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=emQiBmtfljA">
                  <i className="ti-control-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
