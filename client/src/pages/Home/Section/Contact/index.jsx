import React from "react";
import Section from "../../../../component/Section";
import styled from "styled-components";
import { Box, Stack } from "@mui/material";
import TitleSection from "../../../../component/TitleSection";
import { Link } from "react-router-dom";
import SocialBtn from "../../../../component/SocialBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const RowServices = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: "100%";
  min-height: 200px;
  margin-top: 2.5rem;
  overflow: hidden;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: var(--gradient-bg);
  outline: none;
  border-radius: 0.5rem;
  border: 2px solid var(--color-text);
  color: var(--color-text);
  width: 20%;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;

  :hover {
    filter: drop-shadow(0px 0px 8px var(--color-text));
    animation: bounce ease 1s infinite;
    background: var(--color-text);
    color: var(--color-bg);
  }
  @keyframes bounce {
    50% {
      transform: scale(0.9);
    }
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
    width: 80%;
  }
`;

const LinkContact = styled.a`
  font-weight: 800;
  transition: all 0.3s easin-in-out;
`;

const index = () => {
  library.add(fab, far);

  return (
    <Section id="contact" style={{ background: "var(--gradient-bg)" }}>
      <Stack
        sx={{
          px: { xs: "1rem", md: "2rem" },
          py: "4rem",
          width: "100%",
        }}
      >
        <TitleSection>Contactez-moi</TitleSection>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.2em" },
            mt: "2rem",
          }}
        >
          <p>Vous souhaitez me contacter ? </p>{" "}
          <p>
            Dans ce cas vous pouvez me contactez par email en cliquant sur mon
            addresse email ou par téléphone
          </p>
          <p>
            <LinkContact href="mailto: assadi.halifa@gmail.com">
              <Button
                variant="contained"
                sx={{
                  mt: "2rem",
                  fontSize: { xs: "0.9rem", sm: "22px" },
                  color: "#111",
                  fontWeight: "bold",
                }}
              >
                <FontAwesomeIcon
                  icon={["far", "envelope"]}
                  style={{ marginRight: "0.2rem" }}
                />{" "}
                Email
              </Button>
            </LinkContact>
          </p>
          <p>
            <LinkContact href="tel:+33672492315">
              <Button>
                <FontAwesomeIcon
                  icon={["fas", "mobile-alt"]}
                  style={{ marginRight: "0.2rem" }}
                />{" "}
                Téléphone
              </Button>
            </LinkContact>
          </p>
          <p>je veillerai à vous répondre dans les plus brefs délais.</p>
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ my: "1rem", py: "1rem" }}
        >
          <SocialBtn
            href="https://www.linkedin.com/in/assadi-halifa-90592a102/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
          </SocialBtn>

          <SocialBtn href="https://github.com/assadi-dev" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </SocialBtn>
        </Stack>
      </Stack>
    </Section>
  );
};

export default index;
