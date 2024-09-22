'use client'
import TimelineComponent, { TimeLineData } from "@/components/TimelineComponent";
import { title } from "process";

const HomePage = () => {
    const timelineData: TimeLineData[] = [
        {
            year: "1881",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            
            imgSrc: "http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg"
        },
        {
            year: "1893",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"
        },
        {
            year: "1905",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://www.volpeypir.com/upload/3732.jpg"
        },
        {
            year: "1908",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg"
        },
        {
            year: "1915",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg"
        },
        {
            year: "1916",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://blog.istanbul1881.com/wp-content/uploads/2016/08/atat%C3%BCrk-%C3%BCn-inan%C4%B1lmaz-karizmatik-fotograf%C4%B1_861050.jpg"
        },
        {
            year: "1919",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://manisanokta.com/wp-content/uploads/2014/07/ataturk-20.jpg"
        },
        {
            year: "1920",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://www.volpeypir.com/upload/3732.jpg"
        },
        {
            year: "1922",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "https://turkcetarih.com/wp-content/uploads/2015/05/Atat%C3%BCrkveCumhuriyet.jpg"
        },
        {
            year: "1923",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "https://pbs.twimg.com/media/Cw69H8pXUAEaSqa.jpg"
        },
        {
            year: "1934",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://www.bik.gov.tr/wp-content/uploads/2016/11/20161110_2_20037273_15856882.jpg?fit=1024%2C863"
        },
        {
            year: "1938",
            highlights: [
                {
                    title: "House Fellowship",
                    description: "He was born in 1881 (probably in the spring) in Salonica...",
                }
            ],
            imgSrc: "http://www.bik.gov.tr/wp-content/uploads/2016/11/20161110_2_20037273_15856882.jpg?fit=1024%2C863"
        }
    ];
  return (
    <div className="px-5 py-5">
      {/* <TimelineComponent timelineData={timelineData} backgroundImage="llld" /> */}
    </div>
  );
};

export default HomePage;
