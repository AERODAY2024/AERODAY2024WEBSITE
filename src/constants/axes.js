import { axesImages } from "../assets/images";
import { committee } from "./";

const aeronautiques = {
  name: "EXPOSITIONS AÉONAUTIQUES",
  description:
    "Des Stands éblouissent les visiteurs par un mélange de créativité et d'enthousiasme des jeunes étudiants intéressés par l'aéronautique, enrichi par le savoir-faire des expérimentés. Parmi les différents projets exposés, on cite Le simulateur de vol monoplace à 360° crée par l'équipe Technique du Club Aerobotix INSAT et exposé lors de l'édition de 2014 celui-ci ressemble au célèbre simulateur de vol de Microsoft pour le monde 3D. Une fois terminé, il sera capable de simuler l'ensemble des mouvements d'avions.",
  image: axesImages.aeronautiques,
  manager: committee.find((member) => member.name === "Nour Trabelsi"),
};

const aerospatiales = {
  name: "EXPOSITIONS AÉROSPATIALES",
  description:
    "Dans un monde où les ressources diminuent inexorablement, beaucoup pensent que l’avenir de l’homme est dans l’exploitation de l’espace. Depuis son apparition, le secteur aérospatial a joué un role de pionnier et de moteur dans la détermination des origines de la vie, mais aussi dans la recherche et le développement. En Tunisie, désormais l’espace fait rêver de nombreux jeunes, qui cherchent à approfondir leurs connaissances dans ce domaine, toujours absent dans nos systèmes éducatifs. C’est pour cela que la conquête de l’espace, ainsi que l’astronomie, intègrent pour la 5éme fois « Tunisian Aeroday ». On voudrait alors permettre aux jeunes passionnés de l’astronomie de partager la richesse de ce domaine à travers plusieurs activités. L’édition 2019 du Tunisian Aeroday comporte une multitude de projets à buts variés qui offrent l’opportunité d’explorer l’espace et de se plonger dans l’inconnu . Elle englobe tout ce qui concerne la conquête spatiale, remonte d’abord le temps au tout début de l’histoire de l’univers puis permet de découvrir le présent de l’astronomie et de l’aéronautique pour se projeter après dans l’avenir de ces domaines. Parce que l'espace ne cesse de nous fasciner et de nous révéler ses plus grand secrets, Tunisian Aeroday vous fournit un espace idéal pour exposer vos projets et pour étendre votre connaissance aérospatiale.",
  image: axesImages.aerospatiales,
  manager: committee.find((member) => member.name === "Amine Romdhane"),
};

const novices = {
  name: "ATELIERS NOVICES",
  description:
    "Et parce que nous croyons en la capacité des générations à venir, on a conçu des ateliers novices qui ont pour objectif de créer un mini Aeroday pour les enfants âgés de 4 à 17 ans et leur faire surtout découvrir le monde de l'aéronautique. Et donc, des ateliers par âge, des Stands et des challenges CAO, Aéromodélisme, Gaming adaptés à leurs potentiels seront au rendez-vous...",
  image: axesImages.novices,
  manager: committee.find((member) => member.name === "Mouadh Bel Haj Saleh"),
};

const airshow = {
  name: "AIRSHOW",
  description:
    "L'Airshow est un challenge indoor consacré aux avions radio-commandées. Lors de ce show aérien compétitif les participants sont amenés à présenter un show spectaculaire , utile et innovant qui met en valeur leurs compétences de pilotage . Un jury professionnel et un public enthousiaste seront présents pour évaluer les différentes performances.",
  image: axesImages.airshow,
  manager: committee.find((member) => member.name === "Ranim Balti"),
};

const ambassade = {
  name: "AMBASSADE",
  description:
    "L'ambassade est l'axe de l'Aeroday qui vise à l'internationalisation de l'événement soit par l'invitation des conférenciers, participants ou média internationaux.",
  image: axesImages.ambassade,
  manager: committee.find((member) => member.name === "Rima Manai"),
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
