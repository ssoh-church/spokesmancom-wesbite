import { time } from 'console';
import React, { useEffect } from 'react';



interface Highlights {
    title: string;
    description: string;
}
export interface TimeLineData {
    year: string;
    highlights: Highlights[]
    imgSrc: string;
}

interface TimeLineComponentProps {
    timelineData: TimeLineData[];
    backgroundImage: string;
}

const TimelineComponent: React.FC<TimeLineComponentProps> = ({ timelineData }) => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
                <h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
                <div className="space-y-8">
                    {timelineData.map((item, index) => (
                        <div key={index}>
                            <h3 className="mb-3 text-lg font-bold md:text-xl">{item.year}</h3>
                            <ul className="space-y-4">
                                {item.highlights.map((highlight, i) => (
                                    <li key={i} className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <h4 className="font-medium">{highlight.title}</h4>
                                        </div>
                                        <p className="ml-7 dark:text-gray-600">{highlight.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}


                    {/* <div>
                        <h3 className="mb-3 text-lg font-bold md:text-xl">2020</h3>
                        <ul className="space-y-4">
                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                </div>
                                <p className="ml-7 dark:text-gray-600">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                            </li>
                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                </div>
                                <p className="ml-7 dark:text-gray-600">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                            </li>
                            <li className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">Quis velit quae similique maxime optio temporibus</h4>
                                </div>
                                <p className="ml-7 dark:text-gray-600">Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.</p>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default TimelineComponent;
