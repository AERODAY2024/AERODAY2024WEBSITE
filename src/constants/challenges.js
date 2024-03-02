import { aeroday } from "../assets/images";

const aerochallenge = {
  name: "AÉROCHALLENGE",
  image: aeroday,
  description:
    "C'est une compétition ouverte aux étudiants et amateurs au cours de laquelle ils feront voler leurs DRONES dans un circuit bien déterminé tout en respectant le cahier de charges. Ce challenge aura pour but de réunir les passionnés de ce domaine lors d'une confrontation où le talent, les compétences et l'enthousiasme seront au rendez-vous pour couronner un vainqueur d'un grand prix.",
};

const aeromodelisme = {
  name: "AÉROMODÉLISME",
  image: aeroday,
  description:
    "Revient pour la cinquième année consécutive dans Le Tunisian Aeroday. Les participants devront construire leurs propres modèles de planeur de taille réduite, les présenter à un public de professionnels et d'amateurs et les faire voler. Cette compétition est ouverte pour toutes les personnes souhaitant partager leur passion avec les autres.",
};

const cao = {
  name: "CHALLENGE CAO",
  image: aeroday,
  description:
    "Le challenge de CAO (Conception Assistée par Ordinateur) est une compétition destinée aux amateurs du design et du domaine aéronautique en même temps. Le challenge dure 24 heures au cours desquelles les participants vont exploiter leurs créativités et leurs imaginations pour donner naissance à un modèle 3D valide et innovant d'un engin volant moyennant les logiciels récents de modélisation (SolidWorks et Catia). Les participants vont présenter leur travail devant des juges experts dans le domaine de CAD (Computer Aided Design) afin de l'évaluer selon des critères bien déterminés.",
};

const aeroentrepreneur = {
  name: "AÉROENTREPRENEUR",
  image: aeroday,
  description:
    "Le challenge “AeroEntrepreneur” est une compétition 24h destinée aux jeunes ambitieux de l'entrepreneuriat et ceux qui ont des idées de projets dans le domaine aéronautique et ses dérivés.Un cahier des charges sera distribué au équipes participantes contenant le(s) sujet(s) à traiter ainsi que les critères de sélection et les documents demandés et bien sûr Les participants vont présenter leur travail devant des juges experts dans le domaine de l'entrepreneuriat.",
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
