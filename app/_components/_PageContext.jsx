import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

function PageProvider({ children }) {
  const [currentTranslation, setCurrentTranslation] = useState(0);
  const [transChanged, setTransChanged] = useState(false);

  return (
    <PageContext.Provider
      value={{
        currentTranslation,
        setCurrentTranslation,
        transChanged,
        setTransChanged,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

function usePage() {
  const context = useContext(PageContext);

  if (context === undefined)
    throw new Error('PageContext was used outside PageProvider');

  return context;
}

export { PageProvider, usePage };
