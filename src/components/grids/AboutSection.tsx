
import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section bd-bottom shape circle padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 xs-padding">
            <div className="profile-wrap">
              <img className="profile" src="/img/greg-erhabor.jpg" alt="profile" />
              <h3>Greg Erhabor <span>President of Spokesman Communication Ministries.</span></h3>
              <p>Rev. Prof. Gregory Efosa Erhabor is an ordained minister of the gospel and a trained medical practitioner. He is an internationally recognized teacher, preacher and visionary leader.</p>
              <img src="/img/sign.png" alt="sign" />
            </div>
          </div>
          <div className="col-md-8 xs-padding">
            <div className="about-wrap row">
              <div className="col-md-6 xs-padding">
                <img src="/img/history.jpg" alt="history" />
                <h3>Our History</h3>
                <p>Thirty-six years ago, Greg Erhabor initiated Spokesman Communication Ministry, a visionary endeavor inspired by divine guidance</p>
                <a href="#" className="default-btn">Read More</a>
              </div>
              <div className="col-md-6 xs-padding">
                <img src="/img/mission.jpg" alt="mission" />
                <h3>Our Mission</h3>
                <p>We are called to communicate divine truth with an accent of love and bring hope to our generation.</p>
                <a href="#" className="default-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
