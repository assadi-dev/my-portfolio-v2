import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  padding: 1.5rem;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  width: 18rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  position: relative;
  transition: all 0.3s linear;
  :hover {
    background: var(--color-bg);
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 550px) {
    padding: 1rem;
    width: 100%;
  }
`;

const TitleCard = styled.h3`
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-text);
`;

const BodyContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const IconeCard = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServicesCards = ({ title, icon, visible, ...props }) => {
  library.add(fab, fas);

  return (
    <CardContainer {...props} visible={visible}>
      <IconeCard>
        <FontAwesomeIcon icon={icon} size="3x" />
      </IconeCard>
      <TitleCard>{title}</TitleCard>
    </CardContainer>
  );
};

export default ServicesCards;
