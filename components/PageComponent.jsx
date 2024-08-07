import { useState } from 'react';
import HeadWithHelmet from './PageStructure/HeadWithHelmet';
import Main from './PageStructure/Main';
import Footer from './PageStructure/Footer';
import Toc from './Toc/Toc';
import Column from './PageStructure/Column';

function PageComponent({ dataObject, textObject }) {
  const [currentTranslation, setCurrentTranslation] = useState(0);
  const TextTranslation = textObject[currentTranslation];

  return (
    <>
      <div className="textPage">
        <HeadWithHelmet
          dataObject={dataObject}
          currentTranslation={currentTranslation}
        />
        {(dataObject.translationType || dataObject.hasContents) && (
          <Toc
            dataObject={dataObject}
            TextToc={textObject.TextToc}
            setCurrentTranslation={setCurrentTranslation}
            currentTranslation={currentTranslation}
          />
        )}
        <Main
          columnsRelation={dataObject.columnsRelation}
          styleSpecial={dataObject.styleSpecial}
          isNumbered={dataObject.isNumbered}
        >
          <Column key="column1" columnProp="endOfColumn1">
            {textObject.TextOriginal}
          </Column>
          {dataObject.isNumbered && (
            <Column key="column2" columnProp="endOfNumbers">
              {textObject.TextNumbers}
            </Column>
          )}
          <Column key="column3" columnProp="endOfColumn2">
            {TextTranslation}
          </Column>
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default PageComponent;
