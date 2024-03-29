import { axesImages } from "../assets/images";
import { committee } from "./";

const aeronautiques = {
  name: "EXPOSITIONS AÉONAUTIQUES",
  description:
    "<strong>Des Stands éblouissent les visiteurs par un mélange de créativité et d'enthousiasme des jeunes étudiants intéressés par l'aéronautique,</strong> enrichi par le savoir-faire des expérimentés. Parmi les différents projets exposés, on cite Le <strong>simulateur de vol monoplace à 360°</strong> crée par l'équipe Technique du Club Aerobotix INSAT et exposé lors de l'édition de 2014 celui-ci ressemble au célèbre simulateur de vol de Microsoft pour le monde 3D. Une fois terminé, il sera capable de simuler l'ensemble des mouvements d'avions.",
  image: axesImages.aeronautiques,
  manager: committee.find((member) => member.name === "Nour Trabelsi"),
  date: {
    day: 21,
    month: "Avril",
  },
};

const aerospatiales = {
  name: "EXPOSITIONS AÉROSPATIALES",
  description:
    "Dans un monde où les ressources diminuent inexorablement, beaucoup pensent que l’avenir de l’homme est dans l’exploitation de l’espace. Depuis son apparition, <strong>le secteur aérospatial </strong>a joué un role de pionnier et de moteur dans la détermination des origines de la vie, mais aussi dans la recherche et le développement. En Tunisie, désormais l’espace fait rêver de nombreux jeunes, qui cherchent à approfondir leurs connaissances dans ce domaine, toujours absent dans nos systèmes éducatifs. C’est pour cela que la conquête de l’espace, ainsi que <strong>l’astronomie</strong>, intègrent pour la 5éme fois « Tunisian Aeroday ». On voudrait alors permettre aux jeunes passionnés de l’astronomie de partager la richesse de ce domaine à travers plusieurs activités. <strong>L’édition 2024 du Tunisian Aeroday comporte une multitude de projets à buts variés qui offrent l’opportunité d’explorer l’espace et de se plonger dans l’inconnu</strong> . Elle englobe tout ce qui concerne la conquête spatiale, remonte d’abord le temps au tout début de l’histoire de l’univers puis permet de découvrir le présent de l’astronomie et de l’aéronautique pour se projeter après dans l’avenir de ces domaines. Parce que l'espace ne cesse de nous fasciner et de nous révéler ses plus grand secrets, <strong>Tunisian Aeroday vous fournit un espace idéal pour exposer vos projets et pour étendre votre connaissance aérospatiale.</strong>",
  image: axesImages.aerospatiales,
  manager: committee.find((member) => member.name === "Amine Romdhane"),
  date: {
    day: 21,
    month: "Avril",
  },
};

const novices = {
  name: "ATELIERS NOVICES",
  description:
    "Et parce que nous croyons en la capacité des générations à venir, on a conçu des ateliers novices qui ont pour objectif de créer <strong>un mini Aeroday pour les enfants âgés de 4 à 17 ans</strong> et leur faire surtout découvrir le monde de l'aéronautique. Et donc, des ateliers par âge, des Stands et des challenges CAO, Aéromodélisme, Gaming adaptés à leurs potentiels seront au rendez-vous...",
  image: axesImages.novices,
  manager: committee.find((member) => member.name === "Mouadh Bel Haj Saleh"),
  date: {
    day: 21,
    month: "Avril",
  },
};

const airshow = {
  name: "AIRSHOW",
  description:
    "L'Airshow est <strong>un challenge indoor consacré aux avions radio-commandées</strong>. Lors de ce show aérien compétitif les participants sont amenés à présenter un <strong>show spectaculaire</strong> , utile et innovant qui met en valeur leurs compétences de pilotage . Un jury <strong>professionnel et un public enthousiaste </strong>seront présents pour évaluer les différentes performances.",
  image: axesImages.airshow,
  manager: committee.find((member) => member.name === "Ranim Balti"),
  date: {
    day: 14,
    month: "Avril",
  },
};

const ambassade = {
  name: "AMBASSADE",
  description:
    "L'ambassade est l'axe de l'Aeroday qui vise à <strong>l'internationalisation</strong> de l'événement soit par l'invitation <strong>des conférenciers, participants ou média internationaux.</strong>",
  image: axesImages.ambassade,
  manager: committee.find((member) => member.name === "Rima Manai"),
  date: {
    day: 21,
    month: "Avril",
  },
};

export const axes = {
  aeronautiques,
  aerospatiales,
  novices,
  airshow,
  ambassade,
};

export const axesArray = [
  { ...aeronautiques, url: "/axes/aeronautiques" },
  { ...aerospatiales, url: "/axes/aerospatiales" },
  { ...novices, url: "/axes/novices" },
  { ...airshow, url: "/axes/airshow" },
  { ...ambassade, url: "/axes/ambassade" },
];
