import React from 'react';
import styles from './VideoWithTextUnder.module.css'
interface VideoWithText {
  imageSrc: string;
  staticSrc: string;
  title: string;
  link?: string;
}

interface VideoWithTextProps {
  videoList: VideoWithText[];
  limit?: number;
}

const VideoWithTextUnder: React.FC<VideoWithTextProps> = ({ videoList, limit }) => {
  const limitedEventData = limit ? videoList.slice(0, limit) : videoList;

  return (
    <div className="row">
      <div className="col-lg-12 xs-padding">
        <div className="blog-items grid-list row">
          {limitedEventData.map((item, index) => (
            <div key={index} className="col-md-4 padding-15">
              <div className="blog-post">
              <a href={item.link} className={styles.imageLink}>
                <img src={item.staticSrc} alt={item.title} className={styles.staticImage}/>
                <img src={item.imageSrc} alt={item.title} className={styles.animatedImage} />
                </a>
                <div className="blog-content">
                  {item.link ? (
                    <h3><a href={item.link}>{item.title}</a></h3>
                  ) : (
                    <h3>{item.title}</h3>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoWithTextUnder;
