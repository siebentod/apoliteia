'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { TocButton, CloseButton, UncheckButton } from './SVG';
import '../../_styles/contents.scss';

function BlockContents({ hasContents, id }) {
  const tocDisplay = useRef(null);
  const [tocShown, setTocShown] = useState(false);
  const [Contents, setContents] = useState(null);

  useLayoutEffect(() => {
    import(`../../_text/${id}/${id}Toc.jsx`)
      .then((module) => setContents(() => module.default))
      .catch((error) => console.error('Ошибка загрузки компонента Toc', error));
  }, []);

  const handleClick = (event) => {
    if (event.target.tagName === 'A') {
      setTocShown(false);
    }
  };

  const handleTocButton = () => {
    if (tocShown) {
      setTocShown(false);
    } else {
      setTocShown(true);
    }
  };

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
      {!tocShown ? (
        <button
          onClick={handleTocButton}
          className={'tocButton leftPanelButton'}
        >
          <TocButton />
        </button>
      ) : (
        <div className="tocPanel" ref={tocDisplay}>
          <div className="tocPanel__bar">
            <button
              className="close bar__button"
              onClick={() => setTocShown(false)}
            >
              <CloseButton />
            </button>
            {hasContents === 'collapsible' && (
              <UncheckButton onClick={handleCheckAll} />
            )}
          </div>
          <div className="toc" id="tocPanel__toc" onClick={handleClick}>
            <div className="toc__contents">{Contents && <Contents />}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlockContents;
