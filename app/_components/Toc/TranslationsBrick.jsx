import { CloseButton } from './SVG';

function TranslationsBrick({ setTransShown, showTranslations }) {
  // const transWindow = useRef(null);
  // const { position, handleMouseDown } = useDrag({
  //   ref: transWindow,
  // });

  return (
    <div
      className="translationsContainer"
      // ref={transWindow}
      // style={{
      // top: position.y,
      // left: position.x,
      // }}
    >
      <div
        className="bar"
        onClick={() => setTransShown(false)}
        // onMouseDown={handleMouseDown}
      >
        <button className="close bar__button">
          <CloseButton />
        </button>
      </div>
      <div className="translations" id="brickTranslations">
        {showTranslations()}
      </div>
    </div>
  );
}

export default TranslationsBrick;
