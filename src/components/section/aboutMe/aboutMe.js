import React from "react";
import styles from "./aboutMe.module.css";
//import profileImg from '../../../img/profile-lg.jpeg'
import profileImg from "../../../img/profile2.jpg";
import cv from "./cv assadi-dev-2021.pdf";

function AboutMe() {
  return (
    <section id="about" className={styles.presentation}>
      <div className="container">
        <div className={styles.mediaProfile}>
          <div className={styles.mediaBody}>
            <h2 className={styles.nametitle}>Assadi Halifa</h2>
            <p className={styles.profileTag}>Developpeur web</p>

            <div className={styles.textProfile}>
              Après quelques expériences professionnelles dans l'informatiques
              en tant que technicien, j'ai décidé de me diriger vers un domaine
              pour lequel je me suis découvert une passion, la programmation et
              plus particulièrement le Web. J'ai suivi une formation avec le
              CEFII à distance,ce qui m'a permis d'apprendre les différents
              languages du web et leur utilisation à travers différents cas
              pratiques.
            </div>
            <a href={cv} className={styles.downCv} target="blank">
              {" "}
              <span></span> Telecharger Mon CV
            </a>
          </div>

          <img className={styles.profilImage} src={profileImg} alt="image" />
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
