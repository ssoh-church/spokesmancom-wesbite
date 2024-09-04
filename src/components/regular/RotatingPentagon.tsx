import React from 'react';
import styles from '../../styles/RotatingPentagon.module.css'; // Import CSS module for styling

// interface RotatingPentagonProps {
//   link: string; // Prop for the link URL
//   text: string; // Prop for the text inside the pentagon
// }

const RotatingPentagon: React.FC = () => {
    return (
      <div className={styles.container}>
        <div className={styles.pentagon}>
          <a href="#" className={styles.link}>Link 1</a>
          <a href="#" className={styles.link}>Link 2</a>
          <a href="#" className={styles.link}>Link 3</a>
          <a href="#" className={styles.link}>Link 4</a>
          <a href="#" className={styles.link}>Link 5</a>
        </div>
      </div>
    );
  };
  
  export default RotatingPentagon;