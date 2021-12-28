import { Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Section from "../../../../component/Section";
import TitleSection from "../../../../component/TitleSection";
import styled from "styled-components";
import Isotope from "isotope-layout";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const projects = [
  { name: "Apple", category: "Application Mobile" },
  { name: "Cucumber", category: "Application Web" },
  { name: "Orange", category: "Application Web" },
  { name: "Tomato", category: "Application Web" },
];

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  justify-content: center;
  width: 100%;
  padding: 1rem 5rem;
  overflow: hidden;
  min-height: 430px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 990px) {
    padding: 1rem 0rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem 0rem;
  }
`;

const ProjectFilter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  overflow: hidden;
  @media (max-width: 550px) {
    text-align: center;
  }
`;

const FilterItem = styled.span`
  font-weight: 800;
  font-size: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState("");
  const [visible, setVisible] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.2 });
  const el = useRef();
  const q = gsap.utils.selector(el);

  const projectState = useSelector((state) => state.ClientProjectReducer);
  const { collections, isLoading } = projectState;

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const animation = gsap.fromTo(
      q(".project-box"),
      { opacity: 0, x: -50 },
      { opacity: visible ? 1 : 0, x: 0, stagger: 0.2, duration: 0.6 }
    );

    return () => {
      animation.kill();
    };
  }, [visible, filterKey, isLoading]);

  return (
    <Section ref={ref} id="realisations">
      {isLoading === true ? (
        <p>Loading</p>
      ) : (
        <Box sx={{ width: "100%" }}>
          <TitleSection>Mes Réalisations</TitleSection>
          <ProjectFilter>
            <FilterItem onClick={() => setFilterKey("")}>
              Afficher Tout
            </FilterItem>
            <FilterItem onClick={() => setFilterKey("web")}>
              Application Web
            </FilterItem>
            <FilterItem onClick={() => setFilterKey("mobile")}>
              Application Mobile
            </FilterItem>
          </ProjectFilter>

          <ProjectContainer ref={el}>
            {collections
              .filter((p) =>
                p.category.toLowerCase().includes(filterKey.toLowerCase())
              )
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  id={project._id}
                  slug={project.slug}
                  name={project.title}
                  category={project.category}
                  postedAt={project.postedAt}
                  preview={project.preview}
                  className="project-box"
                />
              ))}
          </ProjectContainer>
        </Box>
      )}
    </Section>
  );
};

export default Portfolio;
