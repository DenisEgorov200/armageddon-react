import { useEffect, useState } from 'react';

import { Header } from './components/layout/Header.jsx';
import { AsteroidList } from './components/Asteroid/AsteroidList.jsx';
import { Cart } from './components/Cart/Cart.jsx';
import { fetchDataFromApi } from './utils/api.js';

export const App = () => {
  const [asteroidData, setAsteroidData] = useState([]);

  useEffect(() => {
    fetchDataFromApi().then((res) => setAsteroidData(res));
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <main className="flex justify-center items-start">
        <AsteroidList asteroids={asteroidData} />
        <Cart />
      </main>
    </div>
  );
};
