'use client';
import React from 'react';
import MovingOrbitWithFixedPosition, { Item } from '@/components/MovingOrbitWithFixedPosition';
import { ScreenSizeProvider } from '@/utils/ScreenSizeContext';

const Home: React.FC = () => {
  const initialItems: Item[] = [
    { src: '/img/ministries/gemi.png', title: 'Greg Erhabor Personal Website', link: 'https://gregerhabor.com', size: 180, x: 137, y: 462, bgColor: '#073D70', borderColor: '#045DAC' },
    // { src: '/img/ministries/ilcon.png', title: 'Object 2', link: 'https://example.com', size: 100, x: 200, y: 302, bgColor: 'white', borderColor: 'black' },
    // { src: '/img/ministries/gepi.png', title: 'Object 3', link: 'https://example.com', size: 106, x: 227, y: 76, bgColor: 'white', borderColor: 'black' },
    { src: '/img/ministries/accf.jpg', title: 'Asthma and Chest Care Foundation', link: 'https://chestcarefoundation.org', size: 120, x: 374, y: 159, bgColor: 'white', borderColor: '#B03A2C' },
    { src: '/img/ministries/gepi.png', title: 'Greg Erhabor Partner International', link: 'https://gepi.spokesmancom.org', size: 180, x: 776, y: 81, bgColor: '#1475C1', borderColor: 'white' },
    // { src: '/img/ministries/gepi.png', title: 'Object 6', link: 'https://example.com', size: 106, x: 973, y: 167, bgColor: 'white', borderColor: 'black' },
    { src: '/img/ministries/ssoh.png', title: 'Spokesman Sanctuary of Hope Church', link: 'https://example.com', size: 130, x: 1000, y: 374, bgColor: 'white', borderColor: '#1475C1' },
    // { src: '/img/ministries/gepi.png', title: 'Object 8', link: 'https://example.com', size: 116, x: 877, y: 526, bgColor: 'white', borderColor: '#1475C1'  },
  ];
  

  return (
    <div>
      <ScreenSizeProvider>
        <MovingOrbitWithFixedPosition
          center={[250, 250]}
          backgroundImage='/img/sky.jpg'
          initialItems={initialItems}
        />
      </ScreenSizeProvider>

    </div>
  );
};

export default Home;
