/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import renderer from "react-dom";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG01.png";
import { Infotext_Component } from "../../../Components/Infotext/Infotext_Component";
// eslint-disable-next-line import/no-duplicates
import EG from "./eg/EG.png";
// eslint-disable-next-line import/no-duplicates
import audiofile from "./eg/EG.png";


export interface content {
    id:number;
    text:JSX.Element
}


export const SDG01_Infotext = (): JSX.Element => {

    const [showtext, setText] = React.useState(1);
    const sdg = "SDG01";
    const sdgNumber = 1;
    const maxSlides = 8;

    const text= {
        1: (
            <div>
                <p>
                    <b>
                        „den Hunger beenden, Ernährungssicherheit und eine bessere Ernährung erreichen und eine
                        nachhaltige Landwirtschaft fördern“
                    </b>
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="Infotext02">
                    Wenn Menschen extrem hungern und unterernährt sind, kann es keine nachhaltige Entwicklung geben. Da
                    sie so wenig Essen haben, werden sie geschwächt und können schneller krank werden. Infolgedessen
                    können sie nicht mehr so viel arbeiten und verdienen weniger Geld. Ohne das können sie nicht mehr
                    Essen kaufen. Das heißt, dass durch den Hunger und die Unterernährung eine Falle entsteht, aus
                    welcher sie sich nicht so einfach befreien können.{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="Infotext02">
                    Es gibt Menschen, die sich nicht regelmäßig gesund und ausgewogen, also abwechslungsreich, ernähren
                    können. Das liegt dann daran, dass manche Dinge, wie Geld oder Nahrung, nicht ausreichend vorhanden
                    sind.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="Infotext02">
                    Ein Ernährungssystem (Anbauen &#10140; Verarbeiten &#10140; Verpacken &#10140; Transportieren
                    &#10140; Verteilen &#10140; Handeln &#10140; Einkaufen &#10140; Zubereiten &#10140; Verzehren von
                    Essen) kann von Konflikten, Klimakrisen, Heuschrecken-Plagen und Pandemien bedroht werden.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="Infotext02">
                    Wenn die Bürger:innen unsicher werden, produzieren sie weniger Nahrung, was dazu führt, dass es
                    weniger Essen gibt und die Preise dafür steigen. Deshalb ist es wichtig, dass der Agrarsektor (=
                    Landwirtschaft) mit Geld unterstützt wird. Dadurch können Hunger und Armut verringert werden, die
                    Ernährung wird besser gesichert, es entstehen mehr Arbeitsplätze und die Anfälligkeit für
                    Katastrophen oder andere Bedrohungen sinkt.
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="Infotext02">
                    Eine Welt ohne Hunger kann unser Arbeitsleben, unsere Gesundheit, Bildung, Gleichberechtigung und
                    gesellschaftliche Entwicklung verbessern. Sie ist sehr wichtig, um eine bessere Zukunft für alle zu
                    schaffen. Darüber hinaus sind wir mit Hunger nicht in der Lage die anderen Nachhaltigkeitsziele zu
                    erreichen, da er dazu führt, dass wir uns nicht mehr so gut weiterentwickeln können.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="Infotext02">
                    Um Ernährung sicher zu stellen, müssen wir uns mit mehreren Themen befassen: z. B. mit dem Schutz
                    der Gesellschaft, um sichere und nahrhafte Lebensmittel besonders für Kinder zu gewährleisten. Ein
                    anderes Beispiel ist die Veränderung der Ernährungssysteme, damit die Welt nachhaltiger und
                    inklusiver (= mehr alle miteinbeziehen) wird. Du kannst helfen, indem du bei Landwirten oder Märkten
                    aus deiner Gegend einkaufst und dich für nachhaltige Lebensmittel entscheidest.
                </p>
            </div>
        ),
        8: (
            <div>
                <p className="Infotext02">
                    Außerdem ist es wichtig, eine gute Ernährung für alle zu unterstützen und Lebensmittelverschwendung
                    zu bekämpfen. Auch Unternehmen und deine Regierung sollten Entscheidungen und Veränderungen treffen,
                    die dieses Nachhaltigkeitsziel unterstützen. Bei diesen, sowie in deiner Gemeinde zählt deine Stimme
                    als zukünftige:r Wähler:in und Verbraucher:in von Nahrung.
                </p>
            </div>
        ),
    };

    const header = {
        1: <p> </p>,
        2: <p>Warum?</p>,
        3: <p>Was ist das Problem?</p>,
        4: <p>Was ist das Problem?</p>,
        5: <p>Was ist das Problem?</p>,
        6: <p>Was können wir tun?</p>,
    };

    return (
        <div>
            <Infotext_Component
                logo={Logo}
                sdgNumber={sdgNumber}
                header={header[showtext]}
                text = {text[showtext]}
                maxSlides={maxSlides}
                audioFile={audiofile}
                eg={EG}
                sdg={sdg}
                showtext={showtext}
                setText={setText}
            />
        </div>
    );
};
renderer.render(<SDG01_Infotext />, document.getElementById("root"));
