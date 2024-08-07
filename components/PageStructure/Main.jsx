function Main({ children, columnsRelation, styleSpecial, isNumbered }) {
  return (
    <>
      <main
        style={{
          gridTemplateColumns: `${columnsRelation}%`,
          ...(typeof styleSpecial === 'object' ? styleSpecial : {}),
        }}
        className={`
          ${typeof styleSpecial === 'string' ? styleSpecial : ''} 
          ${isNumbered ? 'hasNumbers' : ''} textPage`}
      >
        {children}
      </main>
    </>
  );
}

export default Main;
