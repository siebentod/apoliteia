import { useEffect, useState } from 'react';
import { usePageStore } from '../store';
import Spinner from './Spinner';

function Translation({ id, translations, textObject }) {
  const currentTranslation = usePageStore((state) => state.currentTranslation);
  const [loadedTranslations, setLoadedTranslations] = useState([]);

  const loadTranslations = async (translations, id, setLoadedTranslations) => {
    try {
      const importPromises = [];
      for (let i = 1; i <= translations.length; i++) {
        importPromises.push(
          import(`../../_text/${id}/${id}${i}.jsx`).then(
            (module) => module.default
          )
        );
      }

      const loadedModules = await Promise.all(importPromises);
      setLoadedTranslations(loadedModules);
    } catch (error) {
      console.error('Ошибка загрузки переводов', error);
    }
  };

  useEffect(() => {
    if (loadedTranslations.length === 0) {
      loadTranslations(translations, id, setLoadedTranslations);
    }
  }, []);

  const LoadedTranslation = loadedTranslations[currentTranslation] || null;

  if (!LoadedTranslation) {
    return (
      <>
        <Spinner />
        {textObject[0]}
        <p key="column3" className="endOfColumn endOfColumn2"></p>
      </>
    );
  }

  return (
    <>
      <LoadedTranslation />
      <p key="column3" className="endOfColumn endOfColumn2"></p>
    </>
  );
}

export default Translation;
