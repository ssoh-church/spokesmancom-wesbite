import React, { useState, useContext, useEffect } from 'react';
import ScreenSizeContext from '@/utils/ScreenSizeContext';

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
  const screenSize = useContext(ScreenSizeContext);
  const [items, setItems] = useState<Item[]>(initialItems);
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  if (!screenSize) {
    return null; // or handle this case as needed
  }

  const centerSize = screenSize.width < 768 ? 60 : 96; // Center size
  const itemSize = screenSize.width < 768 ? 40 : 180; // Item size

  useEffect(() => {
    const updateCenterPosition = () => {
      const centerX = screenSize.width / 2;
      const centerY = screenSize.height / 2;
      center[0] = centerX;
      center[1] = centerY;
    };

    updateCenterPosition();
  }, [screenSize.width, screenSize.height, center]);

  // Function to set positions in a polygonal layout for mobile screens
  const reAdjustXPosition = () => {
    const angleStep = (2 * Math.PI) / items.length;
    const radius = Math.min(screenSize.width, screenSize.height) / 3; // Adjust radius for layout

    return items.map((item, index) => {
      const angle = index * angleStep;
      return {
        ...item,
        x: item.x? (item.x/1280*screenSize.width): center[0] + radius * Math.cos(angle) - itemSize / 2,
        // y: item.y? (item.y/1280*screenSize.width): center[1] + radius * Math.cos(angle) - itemSize / 2,
      };
    });
  };

  const calculatePositions  = () => {
    const angleStep = (2 * Math.PI) / items.length;
    const radius = Math.min(screenSize.width, screenSize.height) / 3; // Adjust radius for layout

    return items.map((item, index) => {
      const angle = index * angleStep;
      return {
        ...item,
        x: center[0] + radius * Math.cos(angle) - itemSize / 2,
        y: center[1] + radius * Math.sin(angle) - itemSize / 2,
        size: itemSize, // Ensure size is set
      };
    });
  }

 

  useEffect(() => {
    if (screenSize.width < 768) {
      const newItems = calculatePositions();
      setItems(newItems);
    } else if (screenSize.width >= 768 && screenSize.width < 1920) {
      // Update positions only if in range (768px to 1920px)
      const newItems = reAdjustXPosition();
      setItems(newItems);
      
    }
  }, [screenSize.width, screenSize.height]);

  // Initial calculation of positions when the component mounts
  useEffect(() => {
    if (screenSize.width < 768) {
      const newItems = calculatePositions();
      setItems(newItems);
    }
  }, []); // Only run on mount

  const handleMouseEnter = (item: Item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = (item: Item) => {
    setTimeout(() => {
      if (activeItem?.title === item?.title) {
        setActiveItem(null);
      }
    }, 200); // Slight delay to allow for potential mouse re-enter
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
              borderWidth: '10px',
              borderStyle: 'solid',
            }}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
            onClick={() => handleClick(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="flex flex-col items-center justify-center rounded-full w-full h-full w-3/4 h-3/4"
            />
          </div>
        ))}
        
        {activeItem && (
          <div
            className="absolute flex flex-col items-center justify-center text-center bg-black text-white border border-black p-4 rounded"
            style={{
              top: screenSize.width < 768 ? '50%' : `${activeItem.y}px`,
              left: screenSize.width < 768 ? '50%' : `${activeItem.x}px`,
              transform: screenSize.width < 768 ? 'translate(-50%, -50%)' : 'none',
            }}
          >
            <h3>{activeItem.title}</h3>
            {/* <p>Additional info about {activeItem.title}</p> */}
            <a href={activeItem.link} title={activeItem.title} className="text-blue-500">
              Visit
            </a>
            {screenSize.width < 768 && (
              <button
                onClick={handleClose}
                className="mt-2 bg-red-500  px-4 py-2 rounded"
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
