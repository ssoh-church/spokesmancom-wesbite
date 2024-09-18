'use client'
import React from 'react';
import Orbit from '@/components/Orbit';
import { link } from 'fs';

export default function Home() {
  const iconData = [
    { src: '/img/ministries/ssoh.png', title: 'Spokesman Sanctuary of Hope Church' , link: 'https://google.com'},
    { src: '/img/ministries/ilcon.png', title: 'International Leadership Conference', link: 'https://google.com' },
    { src: '/img/ministries/accf.jpg', title: 'Asthma and Chest care foundation', link: 'https://google.com' },
    { src: '/img/ministries/gepi.png', title: 'Greg Erhabor Partners International' , link: 'https://google.com'},
    { src: '/img/ministries/iHope.jpg', title: 'iHope Repository' , link: 'https://google.com'},
    { src: '/img/ministries/ssoh.png', title: 'Greg Erhabor Leadership Institute' , link: 'https://google.com'},
    { src: '/img/ministries/ssoh.png', title: 'Spokesman Sanctuary of Hope Church' , link: 'https://google.com'},
    { src: '/img/ministries/ilcon.png', title: 'International Leadership Conference', link: 'https://google.com' },
    { src: '/img/ministries/accf.jpg', title: 'Asthma and Chest care foundation', link: 'https://google.com' },
    { src: '/img/ministries/gepi.png', title: 'Greg Erhabor Partners International' , link: 'https://google.com'},
  ];

  return (
    <div>
      <Orbit items={iconData} />
    </div>
      
      
  );
}
