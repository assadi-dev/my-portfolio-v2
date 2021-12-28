import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import Section from "../../../../component/Section";
import TitleSection from "../../../../component/TitleSection";
import BodyTabHeader from "./BodyTabHeader";
import styled from "styled-components";

const HederTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Resume = () => {
  const [tab, setTab] = useState(1);
  const changeTab = (value) => {
    setTab(value);
  };

  return (
    <Section>
      <Stack sx={{ width: "100%" }}>
        <HederTitle>
          <TitleSection>Mes Compétences</TitleSection>
        </HederTitle>
        <BodyTabHeader />
      </Stack>
    </Section>
  );
};

export default Resume;
