import { useState, useEffect, useRef } from 'react';
import TocContent from './TocContent';
import CloseButton from './CloseButton';
import UncheckButton from './UncheckButton';
// import TocButton from './TocButton';
import { useDrag } from './useDrag';

function Toc({
  dataObject,
  TextToc,
  setCurrentTranslation,
  currentTranslation,
}) {
  const tocDisplay = useRef(null);
  const [tocShown, setTocShown] = useState(false);
  const { position, handleMouseDown } = useDrag({
    ref: tocDisplay,
  });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (
      !dataObject.isTocHidden &&
      !(isMobile && dataObject.styleSpecial !== 'angleToc')
    ) {
      setTocShown(true);
      tocDisplay.current.style.display = 'block';
    }
  }, []);

  function TocButton() {
    return (
      <button
        id="tocButton"
        onClick={handleTocButton}
        className={`${tocShown ? 'tocShown' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"></path>
        </svg>
      </button>
    );
  }

  function onClose() {
    tocDisplay.current.style.display = 'none';
    setTocShown(false);
  }

  // const conditionalTextToc = () => {
  //   dataObject.hasContents && (return TextToc)
  // };

  function handleTocButton() {
    if (tocDisplay.current.style.display === 'block') {
      tocDisplay.current.style.display = 'none';
      setTocShown(false);
    } else {
      tocDisplay.current.style.display = 'block';
      setTocShown(true);
    }
  }

  // const stylingIfNoContents = {
  //   resize: 'none',
  //   width: 'fit-content',
  //   borderBottomRightRadius: '16px',
  //   ...(dataObject.translationType === 'vertical' && {
  //     backgroundColor: '#f1f3f9',
  //   }),
  // };

  const handleCheckAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (
      Array.from(checkboxes).every((checkbox) => checkbox.checked === false)
    ) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  };

  return (
    <>
      {dataObject.styleSpecial !== 'angleToc' && (
        <>
          {!tocShown && <TocButton />}
          <div
            className="tocPanel"
            ref={tocDisplay}
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            <div className="tocPanel__bar" onMouseDown={handleMouseDown}>
              <CloseButton onClick={onClose} />
              {dataObject.hasContents === 'collapsible' && (
                <UncheckButton onClick={handleCheckAll} />
              )}
            </div>
            <TocContent
              dataObject={dataObject}
              TextToc={TextToc}
              setCurrentTranslation={setCurrentTranslation}
              currentTranslation={currentTranslation}
              flags={dataObject.flags}
              translationsCount={dataObject.translations.length}
              translationTitles={dataObject.translationsToc}
              styleSpecial={dataObject.styleSpecial}
              translationType={dataObject.translationType}
              hasContents={dataObject.hasContents}
            />
          </div>
        </>
      )}
      {dataObject.styleSpecial === 'angleToc' && (
        <div className="tocPanel angleToc_toc" ref={tocDisplay}>
          <TocContent
            dataObject={dataObject}
            TextToc={TextToc}
            setCurrentTranslation={setCurrentTranslation}
            currentTranslation={currentTranslation}
            flags={dataObject.flags}
            translationsCount={dataObject.translations.length}
            translationTitles={dataObject.translationsToc}
            styleSpecial={dataObject.styleSpecial}
            translationType={dataObject.translationType}
            hasContents={dataObject.hasContents}
          />
        </div>
      )}
    </>
  );
}

export default Toc;
