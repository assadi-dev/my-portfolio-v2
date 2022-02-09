import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(4, 12, 24, 0.8);
  align-items: center;
  justify-content: center;
`;

const LoadingPage = () => {
  return (
    <Container>
      <CircularProgress sx={{ color: "var(--color-text)" }} size="5rem" />
    </Container>
  );
};

export default LoadingPage;
