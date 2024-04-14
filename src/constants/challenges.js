import { challengesImages } from "../assets/images";
import { committee } from "./";

const aerochallenge = {
  name: "AÉROCHALLENGE",
  image: challengesImages.aerochallenge,
  description:
    "C'est une compétition ouverte aux étudiants et aux amateurs au cours de laquelle ils <strong>feront voler leurs drones dans un circuit bien déterminé</strong> tout en respectant le cahier des charges. Ce défi aura pour but de réunir les passionnés de ce domaine lors d'une confrontation où le talent, les compétences et l'enthousiasme seront au rendez-vous pour couronner un vainqueur d'un grand prix.",
  manager: committee.find((member) => member.name === "Firas Hammami"),
  // date: {
  //   day: 21,
  //   month: "Avril",
  // },
};

const aeromodelisme = {
  name: "AÉROMODÉLISME",
  image: challengesImages.aeromodelisme,
  description:
    "Revient pour la cinquième année consécutive dans <strong>le Tunisian Aeroday</strong>. Les participants devront construire leurs propres <strong>modèles de planeur de taille réduite</strong>, les présenter à un public de professionnels et d'amateurs et <strong>les faire voler</strong>. Cette compétition est ouverte à toutes les personnes souhaitant partager leur passion avec les autres.",
  manager: committee.find((member) => member.name === "Medrayen Kamel"),
  // date: {
  //   day: 14,
  //   month: "Avril",
  // },
};

const cao = {
  name: "CHALLENGE CAO",
  image: challengesImages.cao,
  description:
    "Le challenge de CAO (Conception Assistée par Ordinateur) est une compétition destinée aux amateurs <strong>du design et du domaine aéronautique</strong> en même temps. Le challenge dure 24 heures au cours desquelles les participants vont exploiter leur créativité et leur imagination pour donner naissance à un <strong>modèle 3D</strong> valide et innovant d'un engin volant, en utilisant les logiciels de modélisation les plus récents tels que <strong>SolidWorks et Catia</strong>. Les participants vont présenter leur travail devant des <strong>juges experts</strong> dans le domaine de la <strong>CAO</strong> (Conception Assistée par Ordinateur) afin de l'évaluer selon des critères bien déterminés.",
  manager: committee.find((member) => member.name === "Sirine Mzoughi"),
  // date: {
  //   day: 20,
  //   month: "Avril",
  // },
};

const aeroentrepreneur = {
  name: "AÉROENTREPRENEUR",
  image: challengesImages.aeroentrepreneur,
  description:
    "Le challenge “AeroEntrepreneur” est une compétition de 24 heures destinée aux <strong>jeunes ambitieux de l'entrepreneuriat</strong> et à ceux qui ont des <strong>idées de projets dans le domaine aéronautique</strong> et ses dérivés. Un cahier des charges sera distribué aux équipes participantes, contenant le(s) sujet(s) à traiter ainsi que les critères de sélection et les documents demandés. Bien sûr, les participants vont présenter leur travail devant <strong>des juges experts dans le domaine de l'entrepreneuriat</strong>.",
  manager: committee.find((member) => member.name === "Zeyneb Bnabdallah"),
  // date: {
  //   day: 20,
  //   month: "Avril",
  // },
};

export const challenges = {
  aerochallenge,
  aeromodelisme,
  cao,
  aeroentrepreneur,
};

export const challengesArray = [
  { ...aerochallenge, url: "/challenges/aerochallenge" },
  { ...aeromodelisme, url: "/challenges/aeromodelisme" },
  { ...cao, url: "/challenges/cao" },
  { ...aeroentrepreneur, url: "/challenges/aeroentrepreneur" },
];
