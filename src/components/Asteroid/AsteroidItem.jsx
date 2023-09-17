import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

import { AddToCart } from '../AddToCart/AddToCart.jsx';
import { formatDistance } from '../../utils/distance.js';

export const AsteroidItem = ({ asteroid, unit }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const isCartItems = cartItems.includes(asteroid);

  const asteroidDate = asteroid.close_approach_data[0];
  const isAsteroidDanger = asteroid.is_potentially_hazardous_asteroid;
  const asteroidMagnitude = asteroid.absolute_magnitude_h;

  const handleAddToCart = () => {
    if (cartItems.includes(asteroid)) {
      removeFromCart(asteroid.id);
    } else {
      addToCart(asteroid);
    }
  };

  return (
    <>
      <h3 className="text-[24px] font-bold mb-2">
        {new Date(asteroidDate.close_approach_date)
          .toLocaleDateString('ru', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
          .replace('г.', '')
          .replace('.', '')}
      </h3>
      <div className="flex items-center mb-4">
        <div className="flex flex-col items-center">
          {/*<span className="pb-2">{formatDistance(asteroidDate.miss_distance.kilometers)} км</span>*/}
          <span className="pb-2">
            {formatDistance(asteroidDate.miss_distance[unit.value])} {unit.unitLabel}
          </span>
          <svg
            width="96"
            height="6"
            viewBox="0 0 96 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 3L5 5.88675L5 0.113249L0 3ZM96 3.00001L91 0.113257L91 5.88676L96 3.00001ZM4.5 3.5L91.5 3.50001L91.5 2.50001L4.5 2.5L4.5 3.5Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <img src="/asteroid.svg" alt="asteroid" className="px-2" />
        <div className="flex flex-col">
          <span className="font-bold underline">{asteroid.name}</span>
          <span className="text-xs">Ø {asteroidMagnitude} м</span>
        </div>
      </div>
      <div className="flex items-center">
        <AddToCart className="mr-2.5" onClick={handleAddToCart} isCartItems={isCartItems}>
          заказать
        </AddToCart>
        {isAsteroidDanger && (
          <div className="flex items-center">
            <img src="/danger.png" alt="danger" className="mr-1" />
            <span className="text-gray">Опасен</span>
          </div>
        )}
      </div>
    </>
  );
};
