

import React, { useState } from 'react';

interface Tab {
  label: String;
  component: React.FC;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label: String) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => {
          return (
            <a
              key={index}
              className={tab.label === activeTab ? 'active' : ''}
              onClick={() => handleTabClick(tab.label)}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => {
          const ContentComponent = tab.component;
          return (
            <div
              key={index}
              className={`tab-panel ${tab.label === activeTab ? 'active' : ''}`}
            >
              {tab.label === activeTab && <ContentComponent />}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .tabs {
          margin: 20px;
        }
        .tab-buttons  {
          display: flex;
        }
        .tab-buttons a {
          padding: 10px 20px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 16px;
        }
        .tab-buttons .active {
          border-bottom: 2px solid #000;
          font-weight: bold;
        }
        .tab-content .tab-panel {
          display: none;
          padding: 20px 0;
        }
        .tab-content .tab-panel.active {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
