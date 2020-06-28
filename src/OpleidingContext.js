import React, { useState, createContext } from "react";
export const OpleidingContext = createContext();

// verander alles in geel na :
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      className: "normalopl", //promoopl, fullopl//*
      img: "frontend1.jpg",
      titel: "yellowbg",
      ondertitel: "Maak een webshop met frameworks",

      plaatsen: 15,
      beschikbaar: 10,
      periode: "van 03 Augustus tot en met 10 December",

      binnenimg: "frontendklas2019.jpg",
      binnentitel: "FRONT-END DEVELOPER",
      binnenondertitel: "Voor wie design en ergonomie belangrijk vindt",
      binnentekst:
        "De allereerste website werd in 1991 gepubliceerd door Tim Berners-Lee. Sindsdien staat de technologie niet meer stil. Nieuwe tools, en dus ook nieuwe vaardigheden, volgen elkaar in ijltempo op: Flash (1996), CSS & Javascript (2000), ... Vandaag surft 2/3 van de gebruikers naar content via hun smartphone, ...  Webtechnologie en webdesign zijn bijgevolg onlosmakelijk met elkaar verbonden, waardoor ook de kennis steeds moet worden bijgeschaafd. Wat is Front-End? De term Front-End houdt het gedeelte van een toepassing in dat voor de gebruiker zichtbaar is. Front-end development houdt in: het omzetten van een ontwerp van een website of andere toepassing in een technisch goed werkend geheel. Hierbij maak je gebruik van onder meer HTML, CSS en Javascript. Zo zorgt de Front-End developer ervoor dat alles perfect wordt weergegeven op zowel Smartphone, tablet of ander device.Wat is Back-End?De Back-End van een toepassing is het gedeelte dat niet zichtbaar is voor de gebruiker. Over het algemeen bestaat de Back-End uit drie onderdelen: de database, de server en de applicatie. Voorbeelden van processen die in de Back-End plaatsvinden zijn het registreren van nieuwe gebruikers, het oploaden van bestanden en het uitlezen van nieuwsberichten vanuit een database. Back-End development beslaat een zeer breed terrein: van het implementeren van betaalmethoden in een webshop tot de werking van een compleet beheersysteem. Hierbij maak je vooral gebruik van PHP. Omschrijving De opleiding Front-End Developer is een 20 weken durende intensieve training op basis van 4 lesdagen per week, aangevuld met begeleide thuisstudie en opdrachten. De klassikale sessies worden georganiseerd vanaf 27 Januari te Brussel, elke weekdag (9u30-17u). woensdag heb je vrij.Elk traject waar programmeerkennis aan de orde start met 3 fundamenten: Logisch redeneren, basiskennis van programmeren en databanken. Vanaf Januari starten we met specifieke front-end kennis: HTML, CSS en Javascript. In het laatste stuk van het eerste deel komt een gevorderde module HTML en CSS, waarin Bootstrap zijn opwachting maakt.Het tweede deel staat het eindproject centraal. De technieken van scrum-meetings wordt aangeleerd en binnen dit concrete groepswerk toegepast. Tijdens de lessen wordt verder gebouwd op de kennis van het eerste deel door praktijkgerichte opdrachten. De focus ligt hierbij vooral op Javascript & een Javascript framework (Angular of Vue.js). Gedurende het werk je aan het eindwerk met tussentijdse deadlines.Voor wie is deze opleiding bestemd?Vanaf 18 jaar kan je instappen in dit opleidingstraject. Iedereen die een professionele site wil leren maken in html, css en javascript is welkom in deze praktijkgerichte opleiding frontend developer.",
    },
    {
      id: 2,
      img: "frontend1.jpg",
      titel: "Web Development",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
    {
      id: 2,
      img: "ukFrontend.jpg",
      titel: "Web by Denis",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
    {
      id: 2,
      img: "ukFrontend.jpg",
      titel: "Web Development",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
    {
      id: 2,
      img: "ukFrontend.jpg",
      titel: "Web Development",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
    {
      id: 2,
      img: "ukFrontend.jpg",
      titel: "Web Development",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
    {
      id: 2,
      img: "ukFrontend.jpg",
      titel: "Web Development",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
    {
      id: 2,
      img: "ukFrontend.jpg",
      titel: "Web Development",
      ondertitel: "Front- & Backend given in English",
      voorkennis:
        "Kennis van het Nederlands en het Engels. Computerminded zijn, PC of Mac.",
    },
  ]);

  return (
    <OpleidingContext.Provider value={[movies, setMovies]}>
      {props.children}
    </OpleidingContext.Provider>
  );
};
