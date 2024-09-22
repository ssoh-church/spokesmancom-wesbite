
'use client'
import React from 'react';
import MovingOrbit from '../components/MovingOrbit';
import MovingOrbitWithFixedPosition, { Item } from '@/components/MovingOrbitWithFixedPosition';

const Home: React.FC = () => {
  const initialItems:Item[] = [
    { src: '/img/ministries/ssoh.png', title: 'Spokesman Sanctuary of Hope Church', link: 'https://google.com', size: 130, x:1400, y:374, bgColor: 'blue'},
    { src: '/img/ministries/ilcon.png', title: 'International Leadership Conference', link: 'https://google.com',  size: 140, x:6, y:227 },
    { src: '/img/ministries/accf.jpg', title: 'Asthma and Chest care foundation', link: 'https://google.com',  size: 120, x:374, y:159},
    { src: '/img/ministries/gepi.png', title: 'Greg Erhabor Partners International' , link: 'https://google.com', size: 120, x:776, y:81},
  ];

  

  return (
    <div>
      <MovingOrbitWithFixedPosition
        center={[250, 250]}
        backgroundImage='/img/sky.jpg'
        initialItems={initialItems}
      />
    </div>
  );
};

export default Home;
