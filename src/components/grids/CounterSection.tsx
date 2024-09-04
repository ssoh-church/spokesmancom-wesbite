import React from 'react';

// Define an interface for the counter data
interface CounterData {
  iconClass: string;
  count: number;
  label: string;
}

// Define an interface for the CounterSection props
interface CounterSectionProps {
  countersData: CounterData[];
}

// CounterSection component
const CounterSection: React.FC<CounterSectionProps> = ({ countersData }) => {
  return (
    <section id="counter" className="counter-section">
      <div className="container">
        <ul className="row counters">
          {/* Map through the countersData array and create counter items */}
          {countersData.map((counter, index) => (
            <li key={index} className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className={counter.iconClass}></i>
                <h3 className="counter">{counter.count}</h3>
                <h4 className="text-white">{counter.label}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CounterSection;
