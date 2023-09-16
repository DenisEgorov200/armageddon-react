import { AsteroidItem } from './AsteroidItem.jsx';
import { SwitchButton } from '../ui/SwitchButton/SwitchButton.jsx';
import { useState } from 'react';

const units = ['в километрах', 'в лунных орбитах'];

export const AsteroidList = ({ asteroids }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickButton = (index) => {
    setActiveIndex(index);
  };

  if (!asteroids) return null;

  const allAsteroids = Object.values(asteroids).flat();

  allAsteroids.sort((a, b) => {
    const dateA = new Date(a.close_approach_data[0].close_approach_date_full);
    const dateB = new Date(b.close_approach_data[0].close_approach_date_full);
    return dateB - dateA;
  });

  return (
    <div>
      <div className="mb-6">
        <h2 className="max-w-[400px] font-helvetica text-3xl font-bold mb-2">
          Ближайшие подлёты астероидов
        </h2>
        <SwitchButton activeIndex={activeIndex} items={units} onClickButton={onClickButton} />
      </div>
      <ul className="flex flex-col gap-y-6">
        {allAsteroids.map((asteroid) => (
          <li key={asteroid.id}>
            <AsteroidItem asteroid={asteroid} unit={activeIndex} />
          </li>
        ))}
      </ul>
    </div>
  );
};
