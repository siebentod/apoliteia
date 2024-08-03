import { useState } from 'react';
import HeadWithHelmet from './PageStructure/HeadWithHelmet';
import Main from './PageStructure/Main';
import Footer from './PageStructure/Footer';
import Toc from './Toc/Toc';

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
          TextTranslation={TextTranslation}
          {...dataObject}
          {...textObject}
        />
        <Footer />
      </div>
    </>
  );
}

export default PageComponent;
