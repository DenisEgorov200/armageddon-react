export const AddToCart = ({ children, className, onClick, isCartItems }) => {
  return (
    <button
      onClick={onClick}
      className={`py-1.5 px-3 bg-orange-15 text-orange-100 rounded-2xl text-xs tracking-[1px] font-bold uppercase hover:bg-orange-100 hover:text-white ease-in duration-300  ${className}`}>
      {isCartItems ? 'в корзине' : children}
    </button>
  );
};
