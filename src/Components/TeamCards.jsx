// TeamCards.jsx
import React from 'react';
import ghys from '../assets/ghys.jpeg';
import ibrahim from '../assets/ibrahim.jpeg';    
import habib from '../assets/habib.jpg';

const TeamCards = () => {
  const teamData = [
    {
      role: 'Employee',
      name: 'MUHAMMAD IBRAHIM',
      position: 'Web Developer',
      image: ibrahim,
    },
    {
      role: 'Owner',
      name: 'GHAYAS AHMED',
      position: 'GHL Expert',
      image: ghys,
    },
    {
      role: 'Employee',
      name: 'HABEEB',
      position: 'GHL Expert',
      image: habib,
    },
  ];

  return (
    <>
        <h1 className='text-4xl text-center font-semibold ' >OUR TEAM</h1>
    <div className="flex    justify-center items-center gap-6 mt-40 flex-wrap">
      {teamData.map((person, index) => (
        <div
          key={index}
          className={`
            relative  border-1 border-gray-200 rounded-lg shadow-md w-64 pt-16 pb-6 px-4 text-center transition-all duration-300
            ${index === 1 ? '-mt-40 z-10' : 'mt-0'}
          `}
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
          <p className="text-gray-500">{person.position}</p>
          {/* <span className="mt-2 inline-block text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
            {person.role}
          </span> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default TeamCards;