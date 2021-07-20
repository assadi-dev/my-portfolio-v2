import pic from "../../img/Capture2.PNG";
import pic2 from "../../img/Capture1.PNG";
import pic3 from "../../img/Capture3.JPG";
import pic4 from "../../img/Capture4.JPG";
import pic5 from "../../img/Capture5.png";
import pic6 from "../../img/Capture6.png";

const projectData = [
  {
    id: 1,
    name: "My-cms-prospect",
    categorie: "Application web",
    description:
      "Cette application permet de d'enregistré et suivre ses prospections , pour ce projet j'ai utilisé le template react-black-dashboard by Creative Tim pour l'interface, afin de me concentré sur les fonctionnalité, technos utilisé pour la partie front react ,redux , back-end symfony 5 , postegreSqQL pour la base de donnée. identifiant pour tester l'application test@gmail.com, mot de passe: 1234",
    annee: "2021",
    picture: pic6,
    mois: "juin",
    github: "https://github.com/assadi-dev/my-cms-prospect",
    link: "http://my-cms-prospect.herokuapp.com/admin/tableau-de-board/",
  },

  {
    id: 2,
    name: "Twitch Clone",
    picture: pic2,
    categorie: "Application web",
    annee: "2020",
    description:
      "Appli web réaliseé avec le framework react js cette application et un clone du célèbre site Twitch dédié au streaming, ceci à l'aide de l'api fourni par Twitch ",
    github: "https://github.com/assadi-dev/twitch-clone-app",
    link: "https://react-twicht-tv.netlify.app/",
  },

  {
    id: 3,
    name: "LS Paradise",
    picture: pic3,
    categorie: "Application web",
    annee: "2020",
    description:
      "Appli web réaliseé avec le framework Symfony  4 et MDBoostrap, site one page du serveur GTA V RP LS Paradise, afin de permettre au joueurs inscrit de voir leurs données stockées dans la base de donnée,Refonte du site avec symfony 5 pour la partie back-end  et react pour la partie front-end et sans framework css.",
    github: "https://github.com/assadi-dev/lS-paradiseV2",
    link: "https://ls-paradise-react-version.herokuapp.com/",
  },
  {
    id: 4,
    name: "Kiwi Project",
    picture: pic4,
    categorie: "Application web",
    annee: "2021",
    description:
      "Petit reseau social realisé avec node js et react et mongoDB. Avec system d'authentification en jwt identifiant pour tester l'appli (email :test@gmail.com, mot de passe : password). possibilite d'aimer ou de ne plus aimer un post créer editer ou supprimer un post, ajouter ou supprimer un commentaire",
    github: "https://github.com/assadi-dev/kiwi-project",
    link: "https://kiwi-project.herokuapp.com/",
  },
  {
    id: 5,
    name: "Covid Tracker",
    picture: pic,
    categorie: "Application mobile",
    annee: "2020",
    description:
      "Appli web réaliseé avec le framework react js. Cette application permet de visionner la propagation du covid-19 dans le monde à l'aide de l'API https://covid19.mathdro.id/api",
    github: "https://github.com/assadi-dev/covid-tracker",
    link: "https://project-covid-tracker.netlify.app/",
  },
  {
    id: 6,
    name: "Good-Job",
    categorie: "Application web",
    description:
      "Voici un site d'annonce d'offre d'emploie, avec possibilité de postulé directement au site + envoie de CV, possibilité au recruteur de posté une annonce et aussi,et répondre aux candidatures . Ce site est réaliser avec le framework symfony pour le backend et react js coté front, gestion des donnée avec postgreSQL,récuperations des donné en Api rest from scratch",
    annee: "2021",
    picture: pic5,
    mois: "fevrier",
    github: "https://github.com/assadi-dev/good_job",
    link: "http://good-job-web-app.herokuapp.com/",
  },
];

export default projectData;
