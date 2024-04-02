import React from 'react';

const PromoSection: React.FC = () => {
  return (
    <section className="promo-section bd-bottom">
      <div className="promo-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 xs-padding">
              <div className="promo-content">
                <h3 className="text-primary"><i className="fi fi-tr-handshake fa-3x"></i></h3>
                <h3>Be a Partner</h3>
                <p>By being a partner you are helping this ministry touch life! </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 xs-padding">
              <div className="promo-content">
                <h3 className="text-primary"><i className="fi fi-rr-e-learning fa-3x"></i></h3>
                <h3>Take a Course</h3>
                <p>Help today because tomorrow you may be the one who needs helping! </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 xs-padding">
              <div className="promo-content">
                <h3 className="text-primary"><i className="fi fi-ts-donate fa-3x"></i></h3>
                <h3>Make Donation</h3>
                <p>Give a little, Change a Lot!</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
