function Result({onClick, operation}){
    const handleClick = () => {
        onClick(operation)
    }
    return(
          <button className="button" onClick={handleClick}>{operation}</button>
    )
    
}
export default Result