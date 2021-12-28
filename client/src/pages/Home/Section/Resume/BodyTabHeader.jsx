import React from "react";
import styled from "styled-components";
import ProfessionalSkill from "./ProfessionalSkill";

const TabBody = styled.div`
  padding: 1.8rem 5rem;
  min-height: 500px;
  display: flex;
  @media (max-width: 768px) {
    padding: 1.8rem 0rem;
    width: 100%;
  }
`;

const BodyTabHeader = () => {
  return (
    <TabBody>
      <ProfessionalSkill />
    </TabBody>
  );
};

export default BodyTabHeader;
