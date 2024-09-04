// pages/about.js

'use client'
import Banner from '@/components/Banner';
import CampaignsSection from '@/components/grids/CampaignSection';
import EventSection from '@/components/grids/EventSection';
import MinistryArm from '@/components/grids/MinistryArm';
import MissionVision from '@/components/grids/MissionVisionSection';
import data from "@/data/basic-data.json"
import React from 'react';


const EventPage = () => {
const {eventData} = data
  const title = "About Us";
  const description = "";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Events", link: "#" }
  ];
  const { ministryArms } = data
 

  return (
    <div>
      
      <Banner title={title} description={description} breadcrumbs={breadcrumbs} />
      <EventSection eventData={eventData} limit={3}/>
      {/* <WhoWeAre/> */}
      {/* <CampaignsSection /> */}
      <MinistryArm data={ministryArms} />
    </div>
  );
};

export default EventPage;
