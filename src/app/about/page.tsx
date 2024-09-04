// pages/about.js

'use client'
import Banner from '@/components/Banner';
import MinistryArm from '@/components/grids/MinistryArm';
import data from "@/data/basic-data.json"
import React from 'react';
import WhoWeAre from './mission-vision';
import Tabs from '@/components/regular/Tabs';
import OurHistorySection from '@/components/grids/OurHistorySection';

const AboutPage = () => {
  const title = "About Us";
  const description = "";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "#" }
  ];
  const { ministryArms } = data
  const tabs = [
    {
      label: "Who we are",
      component: WhoWeAre,
    },
    {
      label: "History",
      component: OurHistorySection,
    },
    {
      label: "Leadership",
      component: OurHistorySection,
    },
  ];

  return (
    <div>
      
      <Banner title={title} description={description} breadcrumbs={breadcrumbs} />
      <Tabs tabs={tabs} />
      <MinistryArm data={ministryArms} />
    </div>
  );
};

export default AboutPage;
