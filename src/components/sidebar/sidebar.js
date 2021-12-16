import React, { useState, useRef, useEffect } from "react";
import styles from "./sidebar.module.css";
import photoProfile from "../../img/profile2.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import cx from "classnames";

function Sidebar() {
  const name = "Assadi Halifa";
  const presentation =
    "Bonjour, Je m'appelle Assadi Halifa et Je suis developpeur junior. Bienvenue dans mon portfolio";
  library.add(fab, fas);
  const github = <FontAwesomeIcon icon={["fab", "github"]} size="2x" />;
  const linkin = <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />;
  const laptop = <FontAwesomeIcon icon={["fas", "laptop-code"]} />;
  const user = <FontAwesomeIcon icon={["fas", "user"]} />;
  const contact = <FontAwesomeIcon icon={["fas", "envelope-open-text"]} />;

  const [menuBtn, setMenuBtn] = useState(false);
  const [scrollState, setScrollState] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);

  let navbarRef = useRef();
  let profileRef = useRef();
  let navbarNavRef = useRef();

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  //let hamBtn = hamColor.current;
  let navBar = navbarRef.current;
  let profile = profileRef.current;
  let navbarNav = navbarNavRef.current;
  //let title = titleSideBarRef.current;

  const open = () => {
    setMenuBtn(true);

    if (smallScreen == true) {
      navBar.style.height = "100vh";
      profile.style.display = "block";
      navbarNav.style.display = "block";
      navBar.classList.add(styles.sticky);
    }
  };

  const close = () => {
    setMenuBtn(false);
    if (smallScreen == true) {
      profile.style.display = "none";
      navbarNav.style.display = "none";
      navBar.style.height = "55px";
      navBar.classList.remove(styles.sticky);
    }
  };

  const hamBtn = () => {
    !menuBtn ? open() : close();
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:992px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    let header = navbarRef.current;
    let profile = profileRef.current;
    let navbarNav = navbarNavRef.current;

    if (smallScreen) {
      profile.style.display = "none";
      navbarNav.style.display = "none";
      header.style.height = "50px";
    } else {
      header.style.height = "100vh";
      profile.style.display = "block";
      navbarNav.style.display = "block";
    }

    window.addEventListener("scroll", () => {
      setScrollState(window.scrollY);
    });

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [smallScreen]);

  return (
    <div ref={navbarRef} className={styles.sidebarContained}>
      <div className={styles.content}>
        <nav className={styles.navbar}>
          <h1 className={styles.titleSideBar}> {name} </h1>
          <span className={styles.navbar_toogle} onClick={hamBtn}>
            <FontAwesomeIcon icon={["fas", menuBtn ? "times" : "bars"]} />{" "}
          </span>
          <div ref={profileRef} className={styles.profile}>
            <img
              className={styles.profileImage}
              src={photoProfile}
              alt="photo_profile"
            />
            <div className={styles.bio}> {presentation} </div>

            <ul className={styles.socialContainer}>
              <li className={styles.list}>
                <a
                  target="blank"
                  className={styles.socialLink}
                  href="https://www.linkedin.com/in/assadi-halifa-90592a102/"
                >
                  {linkin}{" "}
                </a>{" "}
              </li>{" "}
              <li className={styles.list}>
                <a
                  className={styles.socialLink}
                  target="blank"
                  href="https://github.com/assadi-dev"
                >
                  {github}{" "}
                </a>{" "}
              </li>{" "}
            </ul>

            <hr />
          </div>
          <ul ref={navbarNavRef} className={styles.navbarNav}>
            <li className={styles.navItem} onClick={close}>
              <HashLink smooth className={styles.navLink} to="/#about">
                {" "}
                {user}A propos de moi{" "}
              </HashLink>{" "}
            </li>
            <li className={styles.navItem} onClick={close}>
              <HashLink smooth className={styles.navLink} to="/#realisations">
                {" "}
                {laptop}
                Mes Réalisations{" "}
              </HashLink>{" "}
            </li>
            <li className={styles.navItem} onClick={close}>
              <HashLink smooth className={styles.navLink} to="/contact">
                {" "}
                {contact}
                Contactez - Moi{" "}
              </HashLink>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </div>{" "}
    </div>
  );
}

export default Sidebar;
