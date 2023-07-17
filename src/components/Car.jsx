import React from 'react';
import CarImg from '../assets/car.png';
const Car = () => {
    
  const getRandomSpeed = () => {
    return Math.floor(Math.random(1) * 10 + 10); // Adjust the range as needed
  };
  const cars = [
    { id: 1, speed: getRandomSpeed() },
    { id: 2, speed: getRandomSpeed() },
    { id: 3, speed: getRandomSpeed() },
    { id: 4, speed: getRandomSpeed() },
    { id: 5, speed: getRandomSpeed() },
  ];

  return (
    <div className='race-track flex justify-center items-center flex-col'>
        <h1 className='text-[30px] text-white '>Car goes vroommm</h1>
      {cars.map((car) => (
        <div
          key={car.id}
          className='road flex justify-start items-center mt-[10px]'
        >
          <img src={CarImg} alt={`car-${car.id}`} className='car w-[100px] h-[30px]' style={{animationDuration: `${car.speed}s`}}/>
        </div>
      ))}
    </div>
  );
};

export default Car;