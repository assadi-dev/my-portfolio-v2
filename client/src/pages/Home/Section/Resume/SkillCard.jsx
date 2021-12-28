import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  padding: 1.2rem;
  background: var(--gradient-bg);
  display: flex;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid var(--color-blog);
  box-shadow: 0px 0px 8px 0px var(--color-blog);
  transition: all 0.3s linear;
  :hover {
    transform: translateY(-20px);
    background: var(--color-text);
    color: var(--color-bg);
    box-shadow: 1px 1px 8px 0px var(--color-text);
    border: none;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

const IconeCard = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSkill = styled.h3`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const SkillCard = ({ name, icon, visible }) => {
  library.add(fab, fas);

  return (
    <CardContainer visible={visible}>
      <IconeCard>
        <FontAwesomeIcon icon={icon} size="2x" />
      </IconeCard>
      <TitleSkill>{name}</TitleSkill>
    </CardContainer>
  );
};

export default SkillCard;
