import { AsteroidItem } from './AsteroidItem.jsx';

export const AsteroidList = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="max-w-[400px] font-helvetica text-3xl font-bold mb-2">
          Ближайшие подлёты астероидов
        </h2>
        <button>в километрах | в лунных орбитах</button>
      </div>
      <ul className="flex flex-col gap-y-6">
        <li>
          <AsteroidItem />
        </li>
      </ul>
    </div>
  );
};
