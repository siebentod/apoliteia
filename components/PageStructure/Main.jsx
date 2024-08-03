import Column from './Column';

function Main({
  columnsRelation,
  styleSpecial,
  TextOriginal,
  isNumbered,
  TextNumbers,
  TextTranslation,
}) {
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
        <Column key="column1" columnProp="endOfColumn1">
          {TextOriginal}
        </Column>
        {isNumbered && (
          <Column key="column2" columnProp="endOfNumbers">
            {TextNumbers}
          </Column>
        )}
        <Column key="column3" columnProp="endOfColumn2">
          {TextTranslation}
        </Column>
      </main>
    </>
  );
}

export default Main;
