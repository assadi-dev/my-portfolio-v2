import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  position: fixed;
  z-index: 100;
  width: 60px;
  height: 60px;
  bottom: 4%;
  right: 2%;
  border: 2px solid var(--color-blog);
  box-shadow: 0px 0px 12px 0px var(--color-blog);
  border-radius: 100%;
  background: var(--color-text);
  color: var(--color-bg);
  opacity: 0;
  transition: 0.4s ease;
  animation: apparition ease-out 0.5s forwards;
  :hover {
    background: var(--color-bg);
    color: var(--color-text);
    border: 2px solid var(--color-text);
  }
  :active {
    transform: scale(0.8);
  }
  @keyframes apparition {
    100% {
      opacity: 1;
    }
  }
`;
const FloatBtn = () => {
  const [visible, setVisible] = useState(false);
  library.add(fas);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {visible && (
        <Button onClick={scrollTop}>
          <FontAwesomeIcon icon={["fas", "chevron-up"]} size="2x" />
        </Button>
      )}
    </>
  );
};

export default FloatBtn;
