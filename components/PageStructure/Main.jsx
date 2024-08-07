import Column from './Column';
import React, { Suspense } from 'react';

function Main({
  columnsRelation,
  styleSpecial,
  TextOriginal,
  isNumbered,
  TextNumbers,
  TextTranslation,
}) {
  const DynamicComponentLoader = (componentName) => {
    if (!(componentName instanceof Promise)) {
      return componentName;
    }
    const Component = React.lazy(() => componentName);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    );
  };

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
          {DynamicComponentLoader(TextTranslation)}
        </Column>
      </main>
    </>
  );
}

export default Main;
