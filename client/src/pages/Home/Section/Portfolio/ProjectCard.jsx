import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectItem = styled.div`
  width: 100%;
  height: 200px;
  background: var(--gradient-bg);
  border: 0.5px solid var(--color-text);
  box-shadow: 0px 0px 10px 0px var(--color-text);
  position: relative;
  overflow: hidden;
  background-image: url("${(props) => props.preview}");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  @media (max-width: 550px) {
    width: 100%;
    margin: 1rem 0rem;
  }
`;

const Overlay = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  :hover {
    background: rgba(4, 12, 24, 0.8);
    transform: scale(1.1);
  }
`;

const ProjectName = styled.h3`
  font-size: 1.2rem;
  transition: all 0.35s ease-in;
  transform: translateX(${(props) => (props.hover ? 0 : "-1000px")});
`;

const CategoryName = styled.p`
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  transform: translateX(${(props) => (props.hover ? 0 : "1000px")});
`;
const ShowProjectButton = styled.span`
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 0.5rem;
  transition: all ease 0.5s;
  opacity: ${(props) => (props.hover ? 1 : 0)};
  animation: bounce linear 1s infinite;
  @keyframes bounce {
    0 {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const ProjectCard = ({
  id,
  slug,
  name,
  category,
  postedAt,
  preview,
  tags,
  ...props
}) => {
  library.add(fas);
  const [hover, setHover] = useState(false);
  const currentShow = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <ProjectItem
      onMouseOver={currentShow}
      onMouseLeave={handleLeave}
      preview={preview}
      {...props}
    >
      <Link to={`/project/${slug}`}>
        <Overlay>
          <ProjectName hover={hover}>{name}</ProjectName>
          {tags.map((tag) => (
            <CategoryName hover={hover}>{tag}</CategoryName>
          ))}

          <ShowProjectButton hover={hover}>
            <FontAwesomeIcon icon={["fas", "eye"]} size="1x" />
          </ShowProjectButton>
        </Overlay>
      </Link>
    </ProjectItem>
  );
};

export default ProjectCard;
