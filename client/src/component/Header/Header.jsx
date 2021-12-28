import React, { useEffect, useState } from "react";
import HeroContainer from "./HeroContainer";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SocialBtn from "../SocialBtn";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  library.add(fab, fas);

  return (
    <HeroContainer>
      <div className={styles.left}>
        <h1 className={styles.title}>Assadi Halifa</h1>
        <p className={styles.presentation}>
          Je suis{" "}
          <span className={styles.stack}>développeur d'application</span>
        </p>
        <Button
          variant="contained"
          sx={{
            mt: "2rem",
            fontSize: { xs: "0.9rem", sm: "22px" },
            color: "#111",
            fontWeight: "bold",
          }}
          className={styles.button}
        >
          <HashLink to="/#contact">Me contacter</HashLink>
        </Button>
        <div className={styles.socialBtn}>
          <SocialBtn
            href="https://www.linkedin.com/in/assadi-halifa-90592a102/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
          </SocialBtn>

          <SocialBtn href="https://github.com/assadi-dev" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </SocialBtn>
        </div>
      </div>
      <div className={styles.right}>
        <BackgroundAnimation />
      </div>
    </HeroContainer>
  );
};

export default Header;
