// https://vike.dev/onRenderHtml
export { onRenderHtml };

import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import logoUrl from './favicon.ico';
import { getPageTitle } from './getPageTitle';
import './text.scss';

function onRenderHtml(pageContext) {
  const { Page } = pageContext;

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page)
    throw new Error(
      'My onRenderHtml() hook expects pageContext.Page to be defined'
    );

  // Alternativly, we can use an HTML stream, see https://vike.dev/streaming
  const pageHtml = ReactDOMServer.renderToString(<Page />);

  // See https://vike.dev/head
  const title = getPageTitle(pageContext);
  const desc =
    pageContext.data?.description ||
    pageContext.config.description ||
    'Библиотека параллельных текстов';
  const keywords = pageContext.config.keywords;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="E3269djp9asyzFke4WoFQPQChqwPsB2HJLEyOkvp1Q0" />
        <meta name="yandex-verification" content="f166de87a9ccfa08" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="${keywords}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    },
  };
}
