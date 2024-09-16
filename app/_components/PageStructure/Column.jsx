function Column(props) {
  return (
    <>
      {props.children}
      <p className={`endOfColumn ${props.columnProp}`}></p>
    </>
  );
}

export default Column;
