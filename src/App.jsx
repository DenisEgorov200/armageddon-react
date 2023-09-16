import { useEffect, useState } from 'react';

import { fetchDataFromApi } from './utils/api.js';
import { formatDate } from './utils/date.js';
import { Header } from './components/layout/Header.jsx';
import { AsteroidList } from './components/Asteroid/AsteroidList.jsx';
import { Cart } from './components/Cart/Cart.jsx';

export const App = () => {
  const [asteroidData, setAsteroidData] = useState([]);
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
  const [shouldFetchMoreData, setShouldFetchMoreData] = useState(true);

  const getAsteroidData = async () => {
    try {
      const res = await fetchDataFromApi(currentDate);
      setAsteroidData(res);

      const previousDate = new Date(currentDate);
      previousDate.setDate(previousDate.getDate() - 1);
      setCurrentDate(formatDate(previousDate));
    } catch (err) {
      console.log(err);
    } finally {
      setShouldFetchMoreData(false);
    }
  };

  useEffect(() => {
    if (shouldFetchMoreData) {
      getAsteroidData();
    }
  }, [shouldFetchMoreData]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setShouldFetchMoreData(true);
    }
  };

  return (
    <div className="h-screen">
      <img className="background" src="/background.jpg" alt="backgorund" />
      <Header />
      <main className="flex flex-col justify-start items-center">
        <AsteroidList asteroids={asteroidData.near_earth_objects} />
        <Cart />
      </main>
    </div>
  );
};
