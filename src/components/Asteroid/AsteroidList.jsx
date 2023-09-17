import { useState } from 'react';

import { AsteroidItem } from './AsteroidItem.jsx';
import { SwitchButton } from '../ui/SwitchButton/SwitchButton.jsx';

const units = [
  { id: 0, value: 'kilometers', unitLabel: 'км', label: 'в километрах' },
  { id: 1, value: 'lunar', unitLabel: 'лунных орбит', label: 'в лунных орбитах' },
];

export const AsteroidList = ({ asteroids }) => {
  const [activeUnit, setActiveUnit] = useState(units[0]);

  const onClickButton = (unit) => {
    setActiveUnit(unit);
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
        <SwitchButton activeItem={activeUnit} items={units} onClickButton={onClickButton} />
      </div>
      <ul className="flex flex-col gap-y-6">
        {allAsteroids.map((asteroid) => (
          <li key={asteroid.id}>
            <AsteroidItem asteroid={asteroid} unit={activeUnit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
