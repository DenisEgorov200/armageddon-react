export const Cart = () => {
  return (
    <div className="fixed right-1/4 p-4 rounded-3xl bg-dark">
      <div className="mb-8">
        <h4 className="text-lg font-bold">Корзина</h4>
        <span>2 астероида</span>
      </div>
      <button className="px-4 py-3 bg-orange rounded-[40px] text-sm tracking-[1px] font-bold ease-in duration-300">
        Отправить
      </button>
    </div>
  );
};
