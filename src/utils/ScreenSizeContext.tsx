import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context value
interface ScreenSize {
  width: number;
  height: number;
}

// Create the context
const ScreenSizeContext = createContext<ScreenSize | undefined>(undefined);

// Define the provider's props
interface ScreenSizeProviderProps {
  children: ReactNode;
}

// Create a provider component
export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContext;
