import { useState } from 'react';
import HeadWithHelmet from './PageStructure/HeadWithHelmet';
import Main from './PageStructure/Main';
import Footer from './PageStructure/Footer';
import Column from './PageStructure/Column';
import Translation from './PageStructure/Translation';
import BlockTranslations from './Toc/BlockTranslations';
import BlockPreferences from './Toc/BlockPreferences';
import BlockContents from './Toc/BlockContents';

function PageComponent({ dataObject, tocObject, styleObject, textObject }) {
  const [currentTranslation, setCurrentTranslation] = useState(0);
  const [transChanged, setTransChanged] = useState(false);

  return (
    <>
      <div
        className={`textPage ${styleObject.mainClass ? styleObject.mainClass : ''}`}
      >
        <HeadWithHelmet
          {...dataObject}
          currentTranslation={currentTranslation}
        />
        <div className="leftPanel">
          {tocObject.translationsAlign && (
            <BlockTranslations
              {...tocObject}
              id={dataObject.id}
              isTocHidden={styleObject.isTocHidden}
              mainClass={styleObject.mainClass}
              TextToc={textObject.TextToc}
              setCurrentTranslation={setCurrentTranslation}
              currentTranslation={currentTranslation}
              setTransChanged={setTransChanged}
            />
          )}
          {tocObject.hasContents && (
            <BlockContents
              {...tocObject}
              id={dataObject.id}
              isTocHidden={styleObject.isTocHidden}
              mainClass={styleObject.mainClass}
              TextToc={textObject.TextToc}
              setCurrentTranslation={setCurrentTranslation}
              currentTranslation={currentTranslation}
              setTransChanged={setTransChanged}
            />
          )}
          <BlockPreferences />
        </div>
        <Main {...styleObject}>
          <Column key="column1" columnProp="endOfColumn1">
            {textObject.TextOriginal}
          </Column>
          {styleObject.isNumbered && (
            <Column key="column2" columnProp="endOfNumbers">
              {textObject.TextNumbers}
            </Column>
          )}
          <Column key="column3" columnProp="endOfColumn2">
            {transChanged !== false ? (
              <Translation
                currentTranslation={currentTranslation}
                transChanged={transChanged}
                id={dataObject.id}
                translations={tocObject.translationsInToc}
                textObject={textObject}
              />
            ) : (
              textObject[0]
            )}
          </Column>
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default PageComponent;
