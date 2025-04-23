'use client'
import HistoryTimeline from "@/components/HIstoryTimeline";
import TimelineComponent, { TimeLineData } from "@/components/TimelineComponent";
import { title } from "process";

const HomePage = () => {
    const processSteps = [
        {
            date: "1-6 May, 2021",
            title: "Registration",
            description: "Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)",
        },
        {
            date: "6-9 May, 2021",
            title: "Participation",
            description: "Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.",
        }, {
            date: "6-9 May, 2021",
            title: "Participation",
            description: "Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.",
        },
        {
            date: "10 May, 2021",
            title: "Result Declaration",
            description: "The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the whatsapp groups and will be mailed to you.",
        },
        {
            date: "12 May, 2021",
            title: "Prize Distribution",
            description: "The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.",
        }
    ];

    return (
        <div className="px-5 py-5">
            <HistoryTimeline steps={processSteps} />
            {/* <TimelineComponent timelineData={timelineData} backgroundImage="llld" /> */}
        </div>
    );
};

// lazy loading ... 
// add search or filter form where explore is

export default HomePage;
