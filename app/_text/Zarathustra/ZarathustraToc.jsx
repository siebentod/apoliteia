import React from 'react';
import LiCollapsible from '../../_components/Toc/LiCollapsible';

function ZarathustraToc() {
  return (
    <ul>
      {/* <LiCollapsible title="Erster Teil" href="#erster-teil"> */}

      <li className="collapsible">
        <label className="collapsibleItem">
          <input type="checkbox" defaultChecked />
          <a href="#erster-teil">Erster Teil</a>
        </label>
        <ul>
          <LiCollapsible
            title="Zarathustra's Vorrede"
            href="#zarathustras-vorrede"
          >
            <li>
              <a href="#vorrede_1">1</a>
            </li>
            <li>
              <a href="#vorrede_2">2</a>
            </li>
            <li>
              <a href="#vorrede_3">3</a>
            </li>
            <li>
              <a href="#vorrede_4">4</a>
            </li>
            <li>
              <a href="#vorrede_5">5</a>
            </li>
            <li>
              <a href="#vorrede_6">6</a>
            </li>
            <li>
              <a href="#vorrede_7">7</a>
            </li>
            <li>
              <a href="#vorrede_8">8</a>
            </li>
            <li>
              <a href="#vorrede_9">9</a>
            </li>
            <li>
              <a href="#vorrede_10">10</a>
            </li>
          </LiCollapsible>

          <LiCollapsible
            title="Die Reden Zarathustra's"
            href="#die-reden-zarathustras"
          >
            <li>
              <a href="#von-den-drei-verwandlungen">
                Von den drei Verwandlungen
              </a>
            </li>
            <li>
              <a href="#von-den-lehrstühlen-der-tugend">
                Von den Lehrstühlen der Tugend
              </a>
            </li>
            <li>
              <a href="#von-den-hinterweltern">Von den Hinterweltern</a>
            </li>
            <li>
              <a href="#von-den-verächtern-des-leibes">
                Von den Verächtern des Leibes
              </a>
            </li>
            <li>
              <a href="#von-den-freuden--und-leidenschaften">
                Von den Freuden- und Leidenschaften
              </a>
            </li>
            <li>
              <a href="#von-bleichen-verbrecher">Von bleichen Verbrecher</a>
            </li>
            <li>
              <a href="#von-lesen-und-schreiben">Von Lesen und Schreiben</a>
            </li>
            <li>
              <a href="#von-baum-am-berge">Von Baum am Berge</a>
            </li>
            <li>
              <a href="#von-den-predigern-des-todes">
                Von den Predigern des Todes
              </a>
            </li>
            <li>
              <a href="#von-krieg-und-kriegsvolke">Von Krieg und Kriegsvolke</a>
            </li>
            <li>
              <a href="#von-neuen-götzen">Von neuen Götzen</a>
            </li>
            <li>
              <a href="#von-den-fliegen-des-marktes">
                Von den Fliegen des Marktes
              </a>
            </li>
            <li>
              <a href="#von-der-keuschheit">Von der Keuschheit</a>
            </li>
            <li>
              <a href="#von-freunde">Von Freunde</a>
            </li>
            <li>
              <a href="#von-tausend-und-einem-ziele">
                Von tausend und einem Ziele
              </a>
            </li>
            <li>
              <a href="#von-der-nächstenliebe">Von der Nächstenliebe</a>
            </li>
            <li>
              <a href="#von-wege-des-schaffenden">Von Wege des Schaffenden</a>
            </li>
            <li>
              <a href="#von-alten-und-jungen-weiblein">
                Von alten und jungen Weiblein
              </a>
            </li>
            <li>
              <a href="#von-biss-der-natter">Von Biss der Natter</a>
            </li>
            <li>
              <a href="#von-kind-und-ehe">Von Kind und Ehe</a>
            </li>
            <li>
              <a href="#von-freien-tode">Von freien Tode</a>
            </li>
            <li>
              <a href="#von-der-schenkenden-tugend">
                Von der schenkenden Tugend
              </a>
            </li>
          </LiCollapsible>
        </ul>
      </li>

      <LiCollapsible title="Zweiter Teil" href="#zweiter-teil">
        <li>
          <a href="#das-kind-mit-dem-spiegel">Das Kind mit dem Spiegel</a>
        </li>
        <li>
          <a href="#auf-den-glückseligen-inseln">Auf den glückseligen Inseln</a>
        </li>
        <li>
          <a href="#von-den-mitleidigen">Von den Mitleidigen</a>
        </li>
        <li>
          <a href="#von-den-priestern">Von den Priestern</a>
        </li>
        <li>
          <a href="#von-den-tugendhaften">Von den Tugendhaften</a>
        </li>
        <li>
          <a href="#vom-gesindel">Vom Gesindel</a>
        </li>
        <li>
          <a href="#von-den-taranteln">Von den Taranteln</a>
        </li>
        <li>
          <a href="#von-den-berühmten-weisen">Von den berühmten Weisen</a>
        </li>
        <li>
          <a href="#das-nachtlied">Das Nachtlied</a>
        </li>
        <li>
          <a href="#das-tanzlied">Das Tanzlied</a>
        </li>
        <li>
          <a href="#das-grablied">Das Grablied</a>
        </li>
        <li>
          <a href="#von-der-selbst-überwindung">Von der Selbst-Überwindung</a>
        </li>
        <li>
          <a href="#von-den-erhabenen">Von den Erhabenen</a>
        </li>
        <li>
          <a href="#vom-lande-der-bildung">Vom Lande der Bildung</a>
        </li>
        <li>
          <a href="#von-der-unbefleckten-erkenntniss">
            Von der unbefleckten Erkenntniss
          </a>
        </li>
        <li>
          <a href="#von-den-gelehrten">Von den Gelehrten</a>
        </li>
        <li>
          <a href="#von-den-dichtern">Von den Dichtern</a>
        </li>
        <li>
          <a href="#von-grossen-ereignissen">Von grossen Ereignissen</a>
        </li>
        <li>
          <a href="#der-wahrsager">Der Wahrsager</a>
        </li>
        <li>
          <a href="#von-der-erlösung">Von der Erlösung</a>
        </li>
        <li>
          <a href="#von-der-menschen-klugheit">Von der Menschen-Klugheit</a>
        </li>
        <li>
          <a href="#die-stillste-stunde">Die stillste Stunde</a>
        </li>
      </LiCollapsible>
      <LiCollapsible title="Dritter Teil" href="#dritter-teil">
        <li>
          <a href="#der-wanderer">Der Wanderer</a>
        </li>
        <li>
          <a href="#vom-gesicht-und-räthsel">Vom Gesicht und Räthsel</a>
        </li>
        <li>
          <a href="#von-der-seligkeit-wider-willen">
            Von der Seligkeit wider Willen
          </a>
        </li>
        <li>
          <a href="#vor-sonnen-aufgang">Vor Sonnen-Aufgang</a>
        </li>
        <li>
          <a href="#von-der-verkleinernden-tugend">
            Von der verkleinernden Tugend
          </a>
        </li>
        <li>
          <a href="#auf-dem-oelberge">Auf dem Oelberge</a>
        </li>
        <li>
          <a href="#vom-vorübergehen">Vom Vorübergehen</a>
        </li>
        <li>
          <a href="#von-den-abtrünnigen">Von den Abtrünnigen</a>
        </li>
        <li>
          <a href="#die-heimkehr">Die Heimkehr</a>
        </li>
        <li>
          <a href="#von-den-drei-bösen">Von den drei Bösen</a>
        </li>
        <li>
          <a href="#vom-geist-der-schwere">Vom Geist der Schwere</a>
        </li>
        <li>
          <a href="#von-alten-und-neuen-tafeln">Von alten und neuen Tafeln</a>
        </li>
        <li>
          <a href="#der-genesende">Der Genesende</a>
        </li>
        <li>
          <a href="#von-der-grossen-sehnsucht">Von der grossen Sehnsucht</a>
        </li>
        <li>
          <a href="#das-andere-tanzlied">Das andere Tanzlied</a>
        </li>
        <li>
          <a href="#die-sieben-siegel">Die sieben Siegel</a>
        </li>
      </LiCollapsible>
      <LiCollapsible
        title="Vierter und letzter Teil"
        href="#vierter-und-letzter-teil"
      >
        <li>
          <a href="#das-honig-opfer">Das Honig-Opfer</a>
        </li>
        <li>
          <a href="#der-nothschrei">Der Nothschrei</a>
        </li>
        <li>
          <a href="#gespräch-mit-den-königen">Gespräch mit den Königen</a>
        </li>
        <li>
          <a href="#der-blutegel">Der Blutegel</a>
        </li>
        <li>
          <a href="#der-zauberer">Der Zauberer</a>
        </li>
        <li>
          <a href="#ausser-dienst">Ausser Dienst</a>
        </li>
        <li>
          <a href="#der-hässlichste-mensch">Der hässlichste Mensch</a>
        </li>
        <li>
          <a href="#der-freiwillige-bettler">Der freiwillige Bettler</a>
        </li>
        <li>
          <a href="#der-schatten">Der Schatten</a>
        </li>
        <li>
          <a href="#mittags">Mittags</a>
        </li>
        <li>
          <a href="#die-begrüssung">Die Begrüssung</a>
        </li>
        <li>
          <a href="#das-abendmahl">Das Abendmahl</a>
        </li>
        <li>
          <a href="#vom-höheren-menschen">Vom höheren Menschen</a>
        </li>
        <li>
          <a href="#das-lied-der-schwermuth">Das Lied der Schwermuth</a>
        </li>
        <li>
          <a href="#von-der-wissenschaft">Von der Wissenschaft</a>
        </li>
        <li>
          <a href="#unter-töchtern-der-wüste">Unter Töchtern der Wüste</a>
        </li>
        <li>
          <a href="#die-erweckung">Die Erweckung</a>
        </li>
        <li>
          <a href="#das-eselsfest">Das Eselsfest</a>
        </li>
        <li>
          <a href="#das-nachtwandler-lied">Das Nachtwandler-Lied</a>
        </li>
        <li>
          <a href="#das-zeichen">Das Zeichen</a>
        </li>
      </LiCollapsible>
    </ul>
  );
}

export default ZarathustraToc;
