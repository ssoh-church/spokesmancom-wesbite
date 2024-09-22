import React, { useState, useEffect } from 'react';

interface Item {
  src: string;
  title: string;
  link: string;
  size?: number; // Optional size of the item
}

interface MovingOrbitProps {
  center: [number, number];
  initialItems: Item[];
  backgroundImage: string;
}

const MovingOrbit: React.FC<MovingOrbitProps> = ({
  center,
  initialItems,
  backgroundImage,
}) => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isClient, setIsClient] = useState(false);
  const centerSize = 96; // Size of the center image
  const radius = 200; // Radius of the circle for item positioning

  // Determine default size based on screen width
  const getDefaultSize = () => {
    return window.innerWidth < 768 ? 40 : 180; // Mobile size: 40, Larger screen size: 180
  };

  useEffect(() => {
    setIsClient(true); // Set the flag to true when the component mounts

    // Assign default size to items
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        size: item.size ?? getDefaultSize(),
      }))
    );
  }, []);

  const calculatePosition = (index: number, totalItems: number) => {
    const angle = (2 * Math.PI * index) / totalItems;
    const x = center[0] + radius * Math.cos(angle) - getDefaultSize() / 2;
    const y = center[1] + radius * Math.sin(angle) - getDefaultSize() / 2;
    return { x, y };
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        src: '/img/ministries/gepi.png',
        title: 'Logo 3',
        link: 'https://example.com',
        size: getDefaultSize(),
      },
    ]);
  };

  useEffect(() => {
    const updateCenterPosition = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      center[0] = centerX;
      center[1] = centerY;
    };

    if (isClient) {
      updateCenterPosition();
      window.addEventListener('resize', updateCenterPosition);

      return () => window.removeEventListener('resize', updateCenterPosition);
    }
  }, [center, isClient]);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full flex items-center justify-center">
          <img
            src="/img/ministries/ssoh.png"
            alt="Center Logo"
            className="w-24 h-24 rounded-full animate-pulse"
          />
        </div>
        {items.map((item, index) => {
          const { x, y } = calculatePosition(index, items.length);
          return (
            <a
              key={index}
              href={item.link}
              title={item.title}
              className="absolute"
              style={{
                width: `${item.size ?? getDefaultSize()}px`,
                height: `${item.size ?? getDefaultSize()}px`,
                top: `${y}px`,
                left: `${x}px`,
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full"
              />
            </a>
          );
        })}
        <button
          onClick={addItem}
          className="absolute top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default MovingOrbit;
