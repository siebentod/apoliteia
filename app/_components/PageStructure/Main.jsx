function Main({ children, columnsRelation, mainStyle, isNumbered }) {
  return (
    <>
      <main
        style={{
          gridTemplateColumns: `${columnsRelation}%`,
          ...mainStyle,
        }}
        className={`${isNumbered ? 'hasNumbers' : ''}`}
      >
        {children}
      </main>
    </>
  );
}

export default Main;
