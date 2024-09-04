// pages/about.js

import MissionVision from '@/components/grids/MissionVisionSection';
import data from "@/data/basic-data.json"

import React from 'react';

const WhoWeAre = () => {
  
  const missionVisionData = {
    title: "Who we are",
    subtitle: "Out of the broken pieces of our past, God shall build an edifice of hope",
    posts: [
      {
        title: "Our Mission Statement",
        listType: "spokesman-list",
        content: [
          "We are called to communicate divine truth with an accent of love and bring hope to our generation",
          "We are committed to the pursuit of excellence in all that pertains to life and godliness through the agency of God's Word and the Holyspirit",
          "We glorify God in all we say and do",
        ]
      },
      {
        title: "Our Vision Statement",
        listType: "spokesman-list",
        content: [
          "To see our generation transformed through the communication of divine truth and the message of hope.",
          "To bring forth a generation of God centered men who will bring Godly principles and excellence to their secular commitment.",
          "To build good Christian institutions globally that will develop and deploy men for service in all areas of their calling.",
          "To promote Christian unity and love among the body of Christ regardless of denominational persuasion.",
        ]
      },
      {
        title: "Our Dream Church",
        listType: "spokesman-list",
        content: [
          "A Multi-cultural church where all cultures can feel a part.",
          "A church for all classes of people.",
          "A church of caring people.",
          "A church that promotes congeniality and good humour.",
          "A church that is charged with the atmosphere of worship and prayer energized by the holy spirit.",
          "A church where everyone can have the fulfilment of his / her calling.",
          "A church that believes in divine change and changing into his likeness. Character is more important than competence.",
          "A church in which every member is called to contribute his/her portion and celebrate his/her gift towards the overall growth and fulfilment of our goals.",
          "A church that is eternally committed to win souls. We bring souls to build them so that they can bring souls.",
          "A church that communicates divine truth with an accent of love and brings hope to our generation.",
        ]
      }
    ]
  };
  const { ministryArms } = data

  return (
    <div>
      <MissionVision {...missionVisionData} />
    </div>
  );
};

export default WhoWeAre;
