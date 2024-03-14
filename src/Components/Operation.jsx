function Operation({ onClick, children }) {
  const handleClick = () => {
    onClick(children);
  };
  return (
    <button className="btn orange" onClick={handleClick}>
      {children}
    </button>
  );
}
export default Operation;
