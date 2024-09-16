'use client';

import Link from 'next/link';
import { usePageStore } from '../store';

function Header({ translationsInHeader, pageDescription, pageHeader }) {
  const currentTranslation = usePageStore((state) => state.currentTranslation);

  const headerTranslation = translationsInHeader[currentTranslation]
    ? translationsInHeader[currentTranslation]
    : pageDescription;

  return (
    <>
      <header>
        <div id="titleAndAuthor">
          <h1 className="header__title">{pageHeader}</h1>
          <p className="header__translator">{headerTranslation}</p>
        </div>
        <h1 className="header__ap">
          <Link href="/">AP</Link>
        </h1>
      </header>
    </>
  );
}

export default Header;
