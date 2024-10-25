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
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(98733175, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
          });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/98733175" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
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
