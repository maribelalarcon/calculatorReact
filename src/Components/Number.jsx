import "./Button.css";

function Number({ onClick, number }) {
  const handleClick = () => {
    onClick(number);
  };
  return (
    <button className="button" onClick={handleClick}>
      {number}
    </button>
  );

  // <button onClick={() => onClick(children)}>{children}</button>
}
export default Number;
