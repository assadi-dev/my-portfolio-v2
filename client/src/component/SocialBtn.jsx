import React from "react";
import styled from "styled-components";

export default styled.a`
  margin: 1rem 0.5rem;
  padding: 1rem;
  background: var(--gradient-bg);
  border: 2px solid var(--color-blog);
  box-shadow: 0px 0px 8px 0px var(--color-blog);
  transition: all 0.3s linear;
  border-radius: 5px;
  :hover {
    background: var(--color-text);
    color: var(--color-bg);
    border: 2px solid #444;
  }
  :active {
    transform: scale(1, 1);
  }
`;
