import React from "react";
import styled from "styled-components";

export default styled.section`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 6rem;
    color: var(--color-text);
    @media (max-width: 768px) {
      padding: 2rem;
    }
  }
`;
