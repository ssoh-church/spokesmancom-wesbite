import React from 'react';

// Define an interface for the mission and vision data
interface MissionVisionData {
  title: string;
  subtitle: string;
  posts: {
    title: string;
    listType: string;
    content: string[];
  }[];
}

// Define the MissionVisionSection component
const MissionVisionSection: React.FC<MissionVisionData> = ({ title, subtitle, posts }) => {
  return (
    <section className="blog-section bg-grey bd-bottom padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h2>{title}</h2>
          <span className="heading-border"></span>
          <p>{subtitle}</p>
        </div>
        <div className="row">
          <div className="col-lg-12 xs-padding">
            <div className="blog-items grid-list row">
              {posts.map((post, index) => (
                <div key={index} className="col-md-12 padding-15">
                  <div className="blog-post">
                    <div className="blog-content">
                      <h3 className='ml-3'><a href="#" className='text-primary'>{post.title}</a></h3>
                      <ul className={`list-display ${post.listType}`}>
                        {post.content.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
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

export default MissionVisionSection;
