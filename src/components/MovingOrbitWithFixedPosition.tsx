import React, { useState, useEffect } from 'react';

export interface Item {
  src: string;
  title: string;
  link: string;
  size?: number; // Optional size of the item
  x?: number; // Optional X position of the item
  y?: number; // Optional Y position of the item
  bgColor?: string; // Optional background color for the item div
  borderColor?: string; // Optional border color for the item div
}

interface MovingOrbitWithFixedPositionProps {
  center: [number, number];
  initialItems: Item[];
  backgroundImage: string;
}

const MovingOrbitWithFixedPosition: React.FC<MovingOrbitWithFixedPositionProps> = ({
  center,
  initialItems,
  backgroundImage,
}) => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const centerSize = windowWidth < 768 ? 60 : 96; // Center size
  const itemSize = windowWidth < 768 ? 40 : 180; // Item size

  useEffect(() => {
    const updateCenterPosition = () => {
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;
      center[0] = centerX;
      center[1] = centerY;
    };

    updateCenterPosition();
  }, [windowWidth, windowHeight, center]);

  // Function to set positions in a polygonal layout for mobile screens
  const calculatePositions = () => {
    const angleStep = (2 * Math.PI) / items.length;
    const radius = Math.min(windowWidth, windowHeight) / 3; // Adjust radius for layout

    return items.map((item, index) => {
      const angle = index * angleStep;
      return {
        ...item,
        x: center[0] + radius * Math.cos(angle) - itemSize / 2,
        y: center[1] + radius * Math.sin(angle) - itemSize / 2,
        size: itemSize, // Ensure size is set
      };
    });
  };

 

  const addItem = () => {
    setItems((prevItems) => {
      const newItem: Item = {
        src: '/img/ministries/gepi.png',
        title: 'Logo 3',
        link: 'https://example.com',
        size: itemSize,
        x: 0, // Placeholder, will be updated
        y: 0, // Placeholder, will be updated,
        bgColor: 'white', // Default background color
        borderColor: 'black', // Default border color
      };
      return [...prevItems, newItem];
    });
  };

  useEffect(() => {
    if (windowWidth < 768) {
      const newItems = calculatePositions();
      setItems(newItems);
    } 
  }, [windowWidth, windowHeight]);

  // Initial calculation of positions when the component mounts
  useEffect(() => {
    if (windowWidth < 768) {
      const newItems = calculatePositions();
      setItems(newItems);
    }
  }, []); // Only run on mount

  const handleMouseEnter = (item: Item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleClick = (item: Item) => {
      setActiveItem(item);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <img
            src="/img/ministries/spokesman.png"
            alt="Center Logo"
            className="rounded-full animate-pulse"
            style={{ width: centerSize, height: centerSize }}
          />
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center justify-center text-center rounded-full"
            style={{
              width: `${item.size || itemSize}px`,
              height: `${item.size || itemSize}px`,
              top: `${item.y || 0}px`,
              left: `${item.x || 0}px`,
              backgroundColor: item.bgColor || 'white',
              borderColor: item.borderColor || 'black',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
            onMouseEnter={() => setActiveItem(item)}
            onMouseLeave={() => setTimeout(() => setActiveItem(null), 200)}
            onClick={() => handleClick(item)}
          >
            
              <img
                src={item.src}
                alt={item.title}
                className="flex flex-col items-center justify-center w-full h-full w-3/4 h-3/4"
              />
          </div>
        ))}
        <button
          onClick={addItem}
          className="absolute top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
        {activeItem && (
          <div
            className="absolute flex flex-col items-center justify-center text-center bg-black text-white border border-black p-4 rounded"
            style={{
              top: windowWidth < 768 ? '50%' : `${activeItem.y}px`,
              left: windowWidth < 768 ? '50%' : `${activeItem.x}px`,
              transform: windowWidth < 768 ? 'translate(-50%, -50%)' : 'none',
            }}
          >
            <h3>{activeItem.title}</h3>
            <p>Additional info about {activeItem.title}</p>
            <a
              href={activeItem.link}
              title={activeItem.title}
              className=""
            >Visit</a>
            {windowWidth < 768 && (
              <button
                onClick={handleClose}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovingOrbitWithFixedPosition;


// Prompt message
// Ok one more thing before we conclude this, when each item is hovered on can it bring up a toolbox
// for desktop: the toolbox should only stay when the specific item is hovered on but for mobile the toolbox should show at the center when the specific item is clicked but with a close button so that it can be closed

// overall tool box must not leave screen 

