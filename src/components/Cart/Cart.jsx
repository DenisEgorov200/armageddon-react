export const Cart = () => {
  return (
    <div className="absolute right-[200px] p-4 rounded-3xl bg-dark">
      <div className="mb-8">
        <h4 className="text-lg font-bold">Корзина</h4>
        <span>2 астероида</span>
      </div>
      <button className="px-4 py-3 bg-orange rounded-2xl text-sm tracking-[1px] font-bold uppercase ease-in duration-300 mr-2.5">
        Отправить
      </button>
    </div>
  );
};
