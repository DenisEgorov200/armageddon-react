import { Header } from './components/layout/Header.jsx';
import { AsteroidList } from './components/Asteroid/AsteroidList.jsx';
import { Cart } from './components/Cart/Cart.jsx';

export const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex justify-center items-start">
        <AsteroidList />
        <Cart />
      </main>
    </div>
  );
};
