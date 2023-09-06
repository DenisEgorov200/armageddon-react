export const AsteroidItem = () => {
  return (
    <>
      <h3 className="text-[24px] font-bold mb-2">12 сент 2023</h3>
      <div className="flex items-center mb-4">
        <div className="flex flex-col items-center">
          <span className="pb-2">5 652 475 км</span>
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
        <img src="/asteroid.png" alt="asteroid" className="px-2" />
        <div className="flex flex-col">
          <span className="font-bold underline">2021 FQ</span>
          <span className="text-xs">Ø 85 м</span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="py-1 px-3 bg-orange-smooth text-orange rounded-2xl text-sm tracking-[1px] font-bold uppercase ease-in duration-300 mr-2.5">
          заказать
        </button>
        <div className="flex items-center">
          <img src="/danger.png" alt="danger" className="mr-1" />
          <span className="text-gray">Опасен</span>
        </div>
      </div>
    </>
  );
};
