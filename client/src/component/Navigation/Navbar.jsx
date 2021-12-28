import { Box, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SocialBtn from "../SocialBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import HamburgerBtn from "./HamburgerBtn";

const Nav = styled.nav`
  padding: 2rem 6rem;
  height: ${(props) => (props.isOpen ? "100%" : "60px")};
  width: 100%;
  position: fixed;
  background: ${(props) =>
    props.visible || props.isOpen
      ? "radial-gradient(circle at 3% 25%, #002853 0, #040c18 100%)"
      : "transparent"};
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 998px) {
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 998px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
  }
`;

const LeftCol = styled.div`
  flex: 0.8;

  @keyframes aparition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 998px) {
    opacity: 0;
    animation: aparition ease-in 0.3s forwards 0.3s;
  }
`;
const RightCol = styled.div`
  flex: 0.2;
  max-height: 50px;
  padding: 0.5rem 0;
  animation: aparition ease-in 0.5s forwards 0.5s;
  opacity: 0;

  @keyframes aparition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 998px) {
    flex: 1;
  }
`;

const ToggleBtn = styled.span`
  position: absolute;
  right: 3%;
  width: 45px;
  height: 45px;
  z-index: 50;
  top: 5px;
  bottom: 0;
  display: none;
  @media (max-width: 998px) {
    display: block;
  }
`;

const Navbar = () => {
  const linkState = useSelector((state) => state.LinkReducer);

  const [isOpen, setIsOpen] = useState(false);
  const [baColor, setBgColor] = useState(false);

  library.add(fab);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav isOpen={isOpen} visible={baColor}>
      <Container isOpen={isOpen}>
        <LeftCol>
          <ul className={styles.linkContainer}>
            <li onClick={() => setIsOpen(false)}>
              <HashLink to="/#about">A propos de moi</HashLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <HashLink smooth to="/#realisations">
                Mes réalisations
              </HashLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <HashLink to="/#contact">Contactez-moi</HashLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a href={linkState.cv} target="_blank">
                Télécharger mon CV
              </a>
            </li>
          </ul>
        </LeftCol>
        <RightCol>
          <SocialBtn
            href="https://www.linkedin.com/in/assadi-halifa-90592a102/"
            target="_blank"
            style={{
              width: "50px",
              height: "50px",
              padding: "0.5rem 0.8rem",
              marginRight: "0.5rem",
            }}
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </SocialBtn>

          <SocialBtn
            href="https://github.com/assadi-dev"
            target="_blank"
            style={{ width: "50px", height: "50px", padding: "0.5rem 0.8rem" }}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </SocialBtn>
        </RightCol>
      </Container>

      <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
        <HamburgerBtn isActive={isOpen} />
      </ToggleBtn>
    </Nav>
  );
};

export default Navbar;
