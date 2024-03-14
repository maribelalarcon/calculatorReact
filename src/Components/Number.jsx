function Number({ onClick, children }) {
  const handleClick = () => {
    onClick(children);
  };
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Number;
