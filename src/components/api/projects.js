import pic from "../../img/Capture2.PNG";
import pic2 from "../../img/Capture1.PNG";
import pic3 from "../../img/Capture3.JPG";
import pic4 from "../../img/Capture4.JPG";
import pic5 from "../../img/Capture5.png";
import pic6 from "../../img/Capture6.png";
import pic7 from "../../img/Capture7.png";
import pic8 from "../../img/Capture8.png";
import pic9 from "../../img/Capture9.png";
import pic10 from "../../img/Capture10.png";

const projectData = [{
        id: 3,
        name: "LS Paradise",
        picture: pic3,
        categorie: "Application web",
        annee: "2020",
        description: "Appli web réaliseé avec le framework Symfony  4 et MDBoostrap, site one page du serveur GTA V RP LS Paradise, afin de permettre au joueurs inscrit de voir leurs données stockées dans la base de donnée,Refonte du site avec symfony 5 pour la partie back-end  et react pour la partie front-end et sans framework css.",
        github: "https://github.com/assadi-dev/lS-paradiseV2",
        link: "https://ls-paradise-react-version.herokuapp.com/",
    },
    {
        id: 4,
        name: "Kiwi Project",
        picture: pic4,
        categorie: "Application web",
        annee: "2021",
        description: "Petit reseau social realisé avec node js et react et mongoDB. Avec system d'authentification en jwt identifiant pour tester l'appli (email :test@gmail.com, mot de passe : password). possibilite d'aimer ou de ne plus aimer un post créer editer ou supprimer un post, ajouter ou supprimer un commentaire",
        github: "https://github.com/assadi-dev/kiwi-project",
        link: "https://kiwi-project.herokuapp.com/",
    },
    {
        id: 5,
        name: "Covid Tracker",
        picture: pic,
        categorie: "Application mobile",
        annee: "2020",
        description: "Appli web réaliseé avec le framework react js. Cette application permet de visionner la propagation du covid-19 dans le monde à l'aide de l'API https://covid19.mathdro.id/api",
        github: "https://github.com/assadi-dev/covid-tracker",
        link: "https://project-covid-tracker.netlify.app/",
    },
    {
        id: 6,
        name: "Good-Job",
        categorie: "Application web",
        description: "Voici un site d'annonce d'offre d'emploie, avec possibilité de postulé directement au site + envoie de CV, possibilité au recruteur de posté une annonce et aussi,et répondre aux candidatures . Ce site est réaliser avec le framework symfony pour le backend et react js coté front, gestion des donnée avec postgreSQL,récuperations des donné en Api rest from scratch",
        annee: "2021",
        picture: pic5,
        mois: "fevrier",
        github: "https://github.com/assadi-dev/good_job",
        link: "http://good-job-web-app.herokuapp.com/",
    },
    {
        id: 7,
        name: "IP Adress tracker",
        categorie: "Application web",
        description: "Ceci est un challenge provenant de site Frontend Mentor .Ce site qui permet de localiser la position de l'utilisateur à partir de son adress IP. ",
        annee: "2021",
        picture: pic7,
        mois: "novembre",
        github: "https://github.com/assadi-dev/ip-address-tracker",
        link: "http://ip-tracker-assadi.atwebpages.com/",
    },
    {
        id: 8,
        name: "Clone Airbnb",
        categorie: "Application web",
        description: " Clone du site Airbnb realiser avec next js et tailwind CSS avec intefration de la map avec mapbox",
        annee: "2021",
        picture: pic9,
        mois: "novembre",
        github: "https://github.com/assadi-dev/airbnb-clone",
        link: "https://airbnb-clone-fawn-one-72.vercel.app/",
    },
    {
        id: 9,
        name: "Covid 19 tracker V2",
        categorie: "Application web",
        description: "Appli web réaliseé avec le framework react js. Cette application permet de visionner la propagation du covid-19 dans le monde avec affichage de la map avec leaflet",
        annee: "2021",
        picture: pic8,
        mois: "novembre",
        github: "https://github.com/assadi-dev/covid-19-tracker-v2",
        link: "https://covide-19-tracker-by-assadi.netlify.app/",
    },
    {
        id: 10,
        name: "Paper, Scissors FrontendMentor",
        categorie: "Application web",
        description: "Petit jeu de papier pierre feuille ciseaux, réaliser en react js et styled components pour le style, ceci est un challenge provenant du site Frontend mentor. ",
        annee: "2021",
        picture: pic10,
        mois: "décembre",
        github: "https://github.com/assadi-dev/rock-paper-scissors",
        link: "https://friendly-mccarthy-0a49a6.netlify.app/",
    },
];

export default projectData;