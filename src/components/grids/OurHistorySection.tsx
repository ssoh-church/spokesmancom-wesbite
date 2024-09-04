// pages/about.js

'use client'
import Banner from '@/components/Banner';
import CampaignsSection from '@/components/grids/CampaignSection';
import MinistryArm from '@/components/grids/MinistryArm';
import MissionVision from '@/components/grids/MissionVisionSection';
import data from "@/data/basic-data.json"
import React from 'react';
import StoryDetails from '../regular/StoryDetails';

const OurHistorySection = () => {
const {storyDetails} = data

    return (
        <div>
            <CampaignsSection />
            <div className="section-heading text-center mt-40">
                    <h2>Our Stories</h2>
                    <span className="heading-border"></span>
                    <p>Get to know about how we evolved into what we are</p>
                </div>
            <div className="causes-wrap row">
                {storyDetails.map((storyDetail, index) => (
                    <div className="col-md-4 xs-padding" key={index}>
                    <StoryDetails
                        imageSrc={storyDetail.imageSrc}
                        status={storyDetail.status}
                        description={storyDetail.description}
                    />
                </div>
                ))}
                
            </div>
        </div>
    );
};

export default OurHistorySection;
