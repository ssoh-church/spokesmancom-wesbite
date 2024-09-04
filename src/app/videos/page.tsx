// pages/about.js

'use client'
import Banner from '@/components/Banner';
import VideoWithTextUnder from '@/components/grids/VideoWithTextUnder';
import data from "@/data/basic-data.json"
import React from 'react';

const AboutPage = () => {
    const title = "Videos";
    const description = "";
    const breadcrumbs = [
        { name: "Home", link: "/" },
        { name: "Videos", link: "#" }
    ];
    const { videoList } = data


    return (

        <div>

            <Banner title={title} description={description} breadcrumbs={breadcrumbs} />
            <section className="blog-section bg-grey bd-bottom padding">
                <div className="container">
                    <div className="section-heading text-center mb-40">
                        <h2>Videos from Spokesman Communication Ministries</h2>
                        <span className="heading-border"></span>
                        {/* <p>Help today because tomorrow you may be the one who needs more helping!</p> */}
                    </div>
                    <VideoWithTextUnder videoList={videoList} />
                    
                </div>
            </section>
            {/* <MinistryArm data={ministryArms} /> */}
        </div>
    );
};

export default AboutPage;
