export const SwitchButton = ({ activeIndex, items, onClickButton }) => {
  return (
    <button className="relative switch-button">
      {items.map((item, idx) => (
        <span
          key={idx}
          onClick={() => onClickButton(idx)}
          className={`mr-3 ${activeIndex === idx ? 'font-bold' : 'underline'}`}>
          {item}
        </span>
      ))}
    </button>
  );
};
