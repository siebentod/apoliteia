import Header from './PageStructure/Header';
import Main from './PageStructure/Main';
import Footer from './PageStructure/Footer';
import Column from './PageStructure/Column';
import BlockTranslations from './Toc/BlockTranslations';
import BlockPreferences from './Toc/BlockPreferences';
import BlockContents from './Toc/BlockContents';
import Column3 from './PageStructure/Column3';
import '../_styles/text.scss';

function PageComponent({ dataObject, tocObject, styleObject, textObject }) {
  return (
    <>
      <div
        className={`textPage ${
          styleObject.mainClass ? styleObject.mainClass : ''
        }`}
      >
        <Header {...dataObject} />
        <div className="leftPanel">
          {tocObject.translationsAlign && (
            <BlockTranslations
              {...tocObject}
              id={dataObject.id}
              isTocHidden={styleObject.isTocHidden}
              mainClass={styleObject.mainClass}
              TextToc={textObject.TextToc}
            />
          )}
          {tocObject.hasContents && (
            <BlockContents
              {...tocObject}
              id={dataObject.id}
              isTocHidden={styleObject.isTocHidden}
              mainClass={styleObject.mainClass}
              TextToc={textObject.TextToc}
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
          <Column3
            id={dataObject.id}
            translations={tocObject.translationsInToc}
            textObject={textObject}
          />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default PageComponent;
