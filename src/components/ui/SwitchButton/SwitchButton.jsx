export const SwitchButton = ({ activeItem, items, onClickButton }) => {
  return (
    <button className="relative switch-button">
      {items.map((item) => (
        <span
          key={item.id}
          onClick={() => onClickButton(item)}
          className={`mr-3 ${activeItem === item ? 'font-bold' : 'underline'}`}>
          {item.label}
        </span>
      ))}
    </button>
  );
};
