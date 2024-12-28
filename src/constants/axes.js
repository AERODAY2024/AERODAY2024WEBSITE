import { axesImages } from "../assets/images";
import { committee } from "./";

const aeronautiques = {
  name: "EXPOSITIONS AÉRONAUTIQUES",
  description:
    "Plongez dans une exposition aéronautique captivante où la créativité et la passion des jeunes passionnés rencontrent l'expertise des professionnels chevronnés. Les stands, installés dans le hall de l’INSAT, offrent un espace d’échange inspirant et intergénérationnel, mettant en lumière des projets, des innovations et des exploits remarquables.",
  image: axesImages.aeronautiques,
  manager: committee.find((member) => member.name === "Feten Ben Rejeb"),
  date: {
    day: 2,
    month: "Fevrier",
  },
  form: "https://docs.google.com/forms/d/e/1FAIpQLSePpgq2crhAPU5vX8pog-ocRdyAJqy2kw1-jJpEY2cJWbJwXQ/viewform?fbclid=IwZXh0bgNhZW0CMTAAAR3I8W-v7UtvyoAzZL_oQfElcA64HSitPiuV-26Le-vYI2KMNx2r1FQ6XgA_aem_tZGm37eBWZmStL0mS4ChWA",
};

const aerospatiales = {
  name: "EXPOSITIONS AÉROSPATIALES",
  description:
    "Cet axe vous invite à explorer un domaine captivant qui repousse les frontières terrestres et ouvre les portes de l’innovation et de l’avenir. Le secteur aérospatial suscite un intérêt grandissant pour les mystères de l’univers. Cette exposition offrira aux visiteurs l’occasion de plonger dans une diversité de projets fascinants, révélant les promesses de l’espace et éveillant la curiosité des passionnés pour l’astronomie et l’exploration spatiale.",
  image: axesImages.aerospatiales,
  manager: committee.find((member) => member.name === "Ksibi Ahmed"),
  date: {
    day: 2,
    month: "Fevrier",
  },
  form: "https://docs.google.com/forms/d/e/1FAIpQLSePpgq2crhAPU5vX8pog-ocRdyAJqy2kw1-jJpEY2cJWbJwXQ/viewform?fbclid=IwZXh0bgNhZW0CMTAAAR3I8W-v7UtvyoAzZL_oQfElcA64HSitPiuV-26Le-vYI2KMNx2r1FQ6XgA_aem_tZGm37eBWZmStL0mS4ChWA",
};

const novices = {
  name: "ATELIERS NOVICES",
  description:
    "Avec une confiance profonde dans le potentiel des générations futures, nous avons créé les Ateliers Novices, une expérience immersive pour les enfants de 4 à 17 ans, visant à les initier au monde de l'aéronautique. Ce mini Aeroday propose des ateliers adaptés à chaque tranche d'âge, incluant des défis en aéromodélisme, programmation et  conception assistée par ordinateur (CAO), pour des découvertes enrichissantes.",
  image: axesImages.novices,
  manager: committee.find((member) => member.name === "Kabadou Nermine"),
  date: {
    day: 2,
    month: "Fevrier",
  },
};

const ambassade = {
  name: "AMBASSADE",
  description:
    "L’Ambassade est un axe clé de l’Aeroday, visant à donner une dimension nationale et internationale  à l’événement. En attirant des conférenciers, participants, et médias , cet axe assure une organisation inclusive et diversifiée. Grâce à son réseau d’ambassadeurs, il connecte l’événement avec plusieurs universités et acteurs nationaux, tout en organisant des conférences qui encouragent le partage des connaissances en aéronautique.",
  image: axesImages.ambassade,
  manager: committee.find((member) => member.name === "Laabidi Nour El Houda"),
  date: {
    day: 2,
    month: "Fevrier",
  },
};

export const axes = {
  aeronautiques,
  aerospatiales,
  novices,
  ambassade,
};

export const axesArray = [
  { ...aeronautiques, url: "/axes/aeronautiques" },
  { ...aerospatiales, url: "/axes/aerospatiales" },
  { ...novices, url: "/axes/novices" },
  { ...ambassade, url: "/axes/ambassade" },
];
