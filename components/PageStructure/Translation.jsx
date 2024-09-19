import { useEffect, useState } from 'react';
import Spinner from './Spinner';

function Translation({
  transChanged,
  currentTranslation,
  id,
  translations,
  textObject,
}) {
  const [loadedComponents, setLoadedComponents] = useState([]);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const importPromises = [];
        for (let i = 1; i <= translations.length; i++) {
          importPromises.push(
            import(`../../text/${id}/${id}${i}.jsx`).then(
              (module) => module.default
            )
          );
        }

        const loadedModules = await Promise.all(importPromises);
        setLoadedComponents(loadedModules);
      } catch (error) {
        console.error('Ошибка загрузки переводов', error);
      }
    };

    loadComponents();
  }, []);

  const Component = loadedComponents[currentTranslation];

  if (!Component) {
    return (
      <>
        <Spinner />
        {textObject[transChanged]}
      </>
    );
  }

  return (
    <>
      <Component />
    </>
  );
}

export default Translation;
