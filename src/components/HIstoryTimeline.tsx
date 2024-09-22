import React from 'react';

interface Step {
  date: string;
  title: string;
  description: string;
}

interface HistoryTimelineProps {
  steps: Step[];
}

const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ steps }) => {
  return (
    <section>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Fest
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the fest.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ right: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ left: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}
                ></div>
                {steps.map((step, index) => {
                  const alignment = index % 2 === 0 ? 'right' : 'left';
                  return (
                    <div
                      key={index}
                      className={`mb-8 flex justify-between ${alignment === 'right' ? 'flex-row-reverse' : ''} items-center w-full`}
                    >
                      <div className="order-1 w-5/12"></div>
                      <div className={`order-1 w-5/12 px-1 py-4 text-${alignment}`}>
                        <p className="mb-3 text-base text-yellow-300">{step.date}</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{step.title}</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Fest Working Process"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
