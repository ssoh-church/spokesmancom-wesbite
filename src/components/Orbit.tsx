import React from 'react';

interface OrbitProps {
  items: { src: string; title: string; link: string }[];
}

const Orbit: React.FC<OrbitProps> = ({ items }) => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Central Glowing Sphere */}
      <div className="w-30 h-30 bg-blue-500 rounded-full animate-pulse">
        <img
          src='/img/ministries/spokesman.png'
          alt="Spokesman Communicatino Ministries"
          className="w-30 h-30 rounded-full"
          title='Spokesman Communicatino Ministries'
        />
      </div>

      {/* Orbiting Icons */}
      <div className="absolute w-[60vh] h-[60vh]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 transform-gpu group`} // Added `group` for handling hover states
            style={{
              transform: `rotate(${(360 / items.length) * index}deg) translateX(30vh) rotate(-${(360 / items.length) * index}deg)`,
              animation: `orbit 10s infinite linear`,
              animationDelay: `${index * (10 / items.length)}s`,
            }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.src}
                alt={item.title}
                className="w-20 h-20 rounded-full"
                title={item.title}
              />
              <span className="invisible group-hover:visible absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                {item.title}
              </span>
            </a>
          </div>

        ))}
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(30vh) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(30vh) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Orbit;
