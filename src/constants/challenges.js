import { challengesImages } from "../assets/images";
import { committee } from "./";

const aerochallenge = {
  name: "AÉROCHALLENGE",
  image: challengesImages.aerochallenge,
  description:
    "L'AéroChallenge est une compétition ouverte aux étudiants et passionnés, qui met les participants au défi de piloter leurs drones sur un circuit prédéfini, naviguant avec précision à travers les obstacles de la piste de course, tout en respectant les exigences du cahier des charges. Ce challenge a pour objectif de réunir les passionnés de drones dans un affrontement captivant où leur talent, leurs compétences et leur enthousiasme seront mis en lumière.",
  manager: committee.find((member) => member.name === "Amine Bensaid"),
  date: {
    day: 2,
    month: "Fevrier",
  },
  cdc: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1H93Ztjk7KNu430nR-2e10UWrDBZlB6fp%2Fview%3Fusp%3Dsharing%26fbclid%3DIwZXh0bgNhZW0CMTAAAR01386cW6FbSK-2yynXELlvzuXsOPRMQM4r3DVzwE4CeEkb2O5Zqpk36wQ_aem_9A3oCwdQDBMnfmVqoqJ-qA&h=AT14eHlfQyyAdZHekwnB5GbnQVsJOU3wLOQ9ChVUV58vCT-LwTrDjdHREamIh6sW6LxqL7PCCXRl9UjLJNfwOJbQPfPlcoBC4gQlX_Xa0rKzGffdk49YaRMC96AHBGfvucrd&__tn__=-UK-R&c[0]=AT2QT312vsxFOJhp03W0_EGvqEaeBRVdFgd_SPkb10SVIYKKbQ9vGOqIZ_1JcU-cXloz1OwpWcCjBS70bazGykTFIuGNehhcrkzCCWk9j-JWr5GFscBiYcqg0EL21YPVSN3JhkR7XBM0QG3ZOS0zVSeBmxcwgAYvbcOUvx92ov1JwIstsBTObYTgwjTPlepOJLcrcSbBqCR4KENiRlNy1mZp-J8",
};

const aeromodelisme = {
  name: "AÉROMODÉLISME",
  image: challengesImages.aeromodelisme,
  description:
    "L’AéroModélisme est un challenge indoor où les participants doivent concevoir et construire leurs propres modèles réduits de planeurs en suivant un cahier des charges précis. Chaque équipe fait ensuite voler son planeur, démontrant son talent technique et créatif devant un public de passionnés et un jury de professionnels. Ce challenge est une occasion unique de partager sa passion pour l’aéromodélisme dans une ambiance conviviale et inspirante.",
  manager: committee.find((member) => member.name === "Silini Jihed"),
  date: {
    day: 26,
    month: "Janvier",
  },
  cdc: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1BKViNWs9jlOgWVojVORKeqAVzGei_M3M%2Fview%3Fusp%3Dsharing%26fbclid%3DIwZXh0bgNhZW0CMTAAAR0J0JKDL0qKMsnJ01PVwu0tcgS4SXhkzpxV6Sp-5vOAO_4_R0w4_8Tov7M_aem_1rcFzATwEZzfZFH66rBjXA&h=AT0RKosAjRugABYXKEUAmumCCYghduMcf8jexndkZVML623KtIGzDeFsThxtEcl5FnW91yBsooceJGZiQfgud8xWsvZqhgDw6gUzlAj56ssPkgeGu8K7Nq_U6MfpiEgIAQBy&__tn__=-UK-R&c[0]=AT1Ec52DgoUy611wRPCQ81seS49ExptdR8e08vDilTI32-C3GQxC9GMtMlozAijGRRT0Torv6K5KExu45XoFUHdYVEH0sKWK7cKYrg69svKEMjUJldFljpm04ICt8t-0Wc85AD1L2T-zN84a6wZ_wBEDB3o7cRFpzuZH4B4lK0Np0GB0B9AB1LToKaefdk78M91Qv2iF6RqYW3zUrzIKa--mzFY",
};

const cao = {
  name: "CHALLENGE CAO",
  image: challengesImages.cao,
  description:
    "La Conception Assistée par Ordinateur est un challenge de 24 heures destinée aux passionnés du design et de l’aéronautique. Les participants devront concevoir un modèle 3D novateur et fonctionnel d’un engin, en respectant un cahier des charges précis et en utilisant des logiciels de modélisation (SolidWorks, Catia, …). À l'issue du challenge, chaque équipe présentera son projet devant un jury d'experts en CAO, qui évaluera les créations selon des critères pertinents.",
  manager: committee.find((member) => member.name === "Mohamed Hamzaoui"),
  date: {
    day: 1,
    month: "Fevrier",
  },
  cdc: "https://drive.google.com/file/d/1rhgAsUhSW_iFbBp8I5v0XGgNEt5Dd037/view?fbclid=IwZXh0bgNhZW0CMTAAAR1FO7CwlOmCGPhNJ2eQJlL0pQbxAPFEi8GPLGhfXNZGq0G22MZK0msL70E_aem_XMJi-Mf_7AKW8Xx7qvoeQQ",
};

const aeroentrepreneur = {
  name: "AÉROENTREPRENEUR",
  image: challengesImages.aeroentrepreneur,
  description:
    "L'AéroEntrepreneur est un challenge de 24 heures, conçu pour les jeunes entrepreneurs ambitieux et les porteurs d'idées novatrices dans le domaine de l’aéronautique et ses secteurs connexes. Après l'annonce du cahier des charges, chaque équipe doit soumettre un business plan et un dossier détaillé, et aura l'opportunité de présenter son projet devant un jury d'experts en entrepreneuriat, qui évaluera les idées selon leur originalité, leur faisabilité et leur potentiel d'impact.",
  manager: committee.find((member) => member.name === "Kahlaoui Oussema"),
  date: {
    day: 1,
    month: "Fevrier",
  },
  cdc: "https://drive.google.com/file/d/1fzwi5cwoWvOOmx2PnpcE_VlkGFuGHKNJ/view?fbclid=IwZXh0bgNhZW0CMTAAAR0c9MJ7Eh30zMwPSwYqs1RxwwS3CGxPOiWuPtfPKUAO3t85UmIse1IWSCg_aem_pR_02KVFkLSDd5rhOedeJw",
};

const airshow = {
  name: "AIRSHOW",
  description:
    "L'AirShow est un challenge indoor dédié aux avions radio-commandés, où les participants doivent concevoir et réaliser leur propre PolyClub en suivant un cahier des charges rigoureux. Au cours de ce show aérien compétitif, chaque équipe présente un spectacle innovant, mettant en avant leurs compétences en pilotage devant un jury de professionnels et un public enthousiaste.",
  image: challengesImages.airshow,
  manager: committee.find((member) => member.name === "Sammoud Hamza"),
  date: {
    day: 26,
    month: "Janvier",
  },
  cdc: "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1AWALjzZnMJJ6-UeF62tKtX02gIR6S6D5%2Fview%3Fusp%3Dsharing%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3Z8PxIm5OdL00cIAiA6LXw_E6ZMK5X6Tj-qP8NFYEXbb6xcCihfAatMTU_aem_gaxabosCgCGr2ZYHWWgfPQ&h=AT3Zy9vBueCJVrShHbjvJhLmO0b5LvjVTuxzdAWfGwU3EjVhCvQuYBQFg2mcvRClhNyft-zkH6NL_4fkf887NmEznupTSM8fAmCBodL-JE-KFqwcAvopk1vfNOda4USftJ_m&__tn__=-UK-R&c[0]=AT38uBXGl2zSJrCbXo9ynhZquokygm3JfDtvbgS2Q0KAZ1u-bkB78KQdcDY4SCKFxa-pvejQnWcRiXQi3c3CwT-8LNJLgajgQf5Lr9qkJqhyChZW01vrL3usuDqk41oQKX8bXyxGTMxutK6rAcFQDYSEDQMvhPjbLnkejLwxOZhUWbbKuMWIojUdwYKyyBl_C8Ta1p-5-uBSBLvPuC2HOXAPf5c",
};

const videographie = {
  name: "VIDÉOGRAPHIE PAR DRONE",
  description:
    "Le challenge de vidéographie par drone offre aux passionnés de production visuelle une occasion unique de présenter leurs œuvres au grand public. Les participants devront respecter un cahier des charges précis, garantissant une compétition de qualité où créativité et expertise seront mises en avant. Cette compétition mettra en lumière le talent des vidéastes et permettra de valoriser la maîtrise technique de la production aérienne.",
  image: challengesImages.videographie,
  manager: committee.find((member) => member.name === "Cherifa Chaouech"),
  date: {
    day: 2,
    month: "Fevrier",
  },
  cdc: "https://drive.google.com/file/d/1vjo3fMQ5CEovIYCA0VAr4geWp4gx26rh/view?usp=sharing",
};

export const challenges = {
  aerochallenge,
  aeromodelisme,
  airshow,
  cao,
  aeroentrepreneur,
  videographie,
};

export const challengesArray = [
  { ...aerochallenge, url: "/challenges/aerochallenge" },
  { ...aeromodelisme, url: "/challenges/aeromodelisme" },
  { ...airshow, url: "/challenges/airshow" },
  { ...cao, url: "/challenges/cao" },
  { ...aeroentrepreneur, url: "/challenges/aeroentrepreneur" },
  { ...videographie, url: "/challenges/videographie" },
];
