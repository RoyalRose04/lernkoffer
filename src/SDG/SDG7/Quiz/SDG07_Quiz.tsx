/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG07.png";
import { QuizProps } from "../../../Interfaces/SDG";

export const SDG07_Quiz:QuizProps = {
    sdgNumber: 7,
    sdgTitle: "Bezahlbare und saubere Energie",
    sdg: "SDG07",
    logo: Logo,
    tile: { 
        1: "Einleitung",
        8: "Schlussfolgerung",
        16: "Schlussfolgerung",
    },
    text: { 1: <p>Es gibt mittlerweile viele Dinge, die Strom brauchen, damit sie funktionieren. Dabei benötigen sie unterschiedliche Mengen an Strom, was man auch „Leistung“ nennt. Diese wird in der Einheit „Watt“ festgelegt. Wenn man nun über den Stromverbrauch während einer bestimmten Zeit redet, nimmt man die Leistung (Einheit W für Watt) des gemessenen Geräts mal die vergangene Zeit (Einheit h für Stunden) und bekommt als Ergebnis Wattstunden Wh.</p>,
            8: <p>Das ist ziemlich viel Strom, oder? Um das einmal anders auszudrücken: mit 1 kWh könnte man sich etwa eine Stunde die Haare föhnen oder 100 Stunden Radio hören. Das heißt, dass wir mit dem Stromverbrauch von einem Fernseher für eine Stunde, 190 Stunden Haare föhnen oder 1.900 Stunden Radio hören könnten.</p>,
            16: <p>Dabei ist jedoch nur die Energie aus Biokraftstoff/Abfall, Wasserkraft und aus den anderen Energieträgern nachhaltig und erneuerbar. Den Großteil des Stroms beziehen wir aus sogenannten fossilen Energieträgern (Erdöl, Kohle/Torf, Erdgas), die verbrannt werden, um ihre Energie zu gewinnen. Die dabei ausgestoßenen Gase schaden aber der Umwelt und treiben den Klimawandel voran. Das Problem ist, dass das Erdöl, die Kohle und das Erdgas nur einmal verwendet werden können und in einigen Jahrzehnten aufgebraucht sein werden. Deshalb ist es so wichtig, dass wir mehr erneuerbare Energie benutzen, aber auch insgesamt weniger Strom verbrauchen.</p>,
    },
    question: {
        2: "Wie viele Killowattstunden kWh (Wattstunden mal 1000) hat ein Elektrischer Herd",
        3: "Wie viele Killowattstunden kWh (Wattstunden mal 1000) hat ein Kühlschrank",
        4: "Wie viele Killowattstunden kWh (Wattstunden mal 1000) hat ein Leuchtkörper",
        5: "Wie viele Killowattstunden kWh (Wattstunden mal 1000) hat ein Geschirrspüler",
        6: "Wie viele Killowattstunden kWh (Wattstunden mal 1000) hat eine Waschmaschine",
        7: "Wie viele Killowattstunden kWh (Wattstunden mal 1000) hat ein Fernseher",
        9: "Wie viel Prozent hat Erdöl als Energieträger (das ist ein Stoff, dessen Energie nutzbar gemacht wird) von dem weltweiten Energieverbrauch 2018 ausgemacht?",
        10: "Wie viel Prozent hat Kohle / Torf als Energieträger von dem weltweiten Energieverbrauch 2018 ausgemacht?",
        11: "Wie viel Prozent hat Erdgas als Energieträger von dem weltweiten Energieverbrauch 2018 ausgemacht?",
        12: "Wie viel Prozent hat Biokraftstoff / Abfall als Energieträger von dem weltweiten Energieverbrauch 2018 ausgemacht?",
        13: "Wie viel Prozent hat Kernenergie von dem weltweiten Energieverbrauch 2018 ausgemacht?",
        14: "Wie viel Prozent hat Wasserkraft von dem weltweiten Energieverbrauch 2018 ausgemacht?",
        15: "Wie viel Prozent haben andere Energieträger (z. B.: Wind, Wärme) von dem weltweiten Energieverbrauch 2018 ausgemacht?",
    },
    buttonLeftContent: {2: <p>445 kWh</p>,
                        3: <p>660 kWh</p>,
                        4: <p>450 kWh</p>,
                        5: <p>245 kWh</p>,
                        6: <p>350 kWh</p>,
                        7: <p>190 kWh</p>,
                        9: <p>43 %</p>,
                        10: <p>14 %</p>,
                        11: <p>23 %</p>,
                        12: <p>27 %</p>,
                        13: <p>5 %</p>,
                        14: <p>2 %</p>,
                        15: <p>9 %</p>,
                        },
    buttonRightContent:{2: <p>955 kWh</p>,
                        3: <p>330 kWh</p>,
                        4: <p>330 kWh</p>,
                        5: <p>785 kWh</p>,
                        6: <p>200 kWh</p>,
                        7: <p>360 kWh</p>,
                        9: <p>32 %</p>,
                        10: <p>27 %</p>,
                        11: <p>39 %</p>,
                        12: <p>9 %</p>,
                        13: <p>16 %</p>,
                        14: <p>62 %</p>,
                        15: <p>2 %</p>, 
                        },
    answerNumbersLeft:{ 2: "Richtig",
                        3: "Falsch",
                        4: "Falsch",
                        5: "Richtig",
                        6: "Falsch",
                        7: "Richtig",
                        9: "Falsch",
                        10: "Falsch",
                        11: "Richtig",
                        12: "Falsch",
                        13: "Richtig",
                        14: "Richtig",
                        15: "Falsch",
                        },
    answerNumbersRight:{2: "Falsch",
                        3: "Richtig",
                        4: "Richtig",
                        5: "Falsch",
                        6: "Richtig",
                        7: "Falsch",
                        9: "Richtig",
                        10: "Richtig",
                        11: "Falsch",
                        12: "Richtig",
                        13: "Falsch",
                        14: "Falsch",
                        15: "Richtig",
                        },
    explanation:{
                        2: "Ein Elektrischer Herd hat eine Leistung von 445 kWh",
                        3: "Ein Kühlschrank hat eine Leistung von 330 kWh",
                        4: "Ein Leuchtkörper hat eine Leistung von 330 kWh",
                        5: "Ein Geschirrspüler hat eine Leistung von 245 kWh",
                        6: "Eine Waschmaschine hat eine Leistung von 200 kWh",
                        7: "Ein Fernseher hat eine Leistung von 190 kWh",
                        9: "Erdöl als Energieträger macht 32 Prozent von dem weltweiten Energieverbrauch 2018 aus",
                        10: "Kohle / Torf als Energieträger macht 27 Prozent von dem weltweiten Energieverbrauch 2018 aus",
                        11: "Erdgas als Energieträger macht 23 Prozent von dem weltweiten Energieverbrauch 2018 aus",
                        12: "Biokraftstoff / Abfall als Energieträger macht 9 Prozent von dem weltweiten Energieverbrauch 2018 aus",
                        13: "Kernenergie macht 5 Prozent von dem weltweiten Energieverbrauch 2018 aus",
                        14: "Wasserkraft macht 2 Prozent von dem weltweiten Energieverbrauch 2018 aus",
                        15: "Andere Energieträger (z. B.: Wind, Wärme) machen 2 Prozent von dem weltweiten Energieverbrauch 2018 aus",
    },
    // modalContent: <div>Quiz SDG 07</div>,
    isQuizActive: {
        1: false,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: false,
        9: true,
        10: true,
        11: true,
        12: true,
        13: true,
        14: true,
        15: true,
        16: false,
        
    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
}