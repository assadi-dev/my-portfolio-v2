import { Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Section from "../../../../component/Section";
import TitleSection from "../../../../component/TitleSection";
import ServicesCards from "./ServicesCards";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const RowServices = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: "100%";
  min-height: 200px;
  margin-top: 2.5rem;
  overflow: hidden;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const services = [
  { title: "Developpement d'application web", icon: ["fas", "desktop"] },
  { title: "Developpement d'application mobile", icon: ["fas", "mobile"] },
];

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [visible, setVisible] = useState(false);

  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const animation = gsap.fromTo(
      q(".service-box"),
      { opacity: 0, scale: 1.5, duration: 1 },
      { opacity: visible ? 1 : 0, stagger: 0.33, scale: 1, duration: 1 }
    );
    return () => {
      animation.kill();
    };
  }, [visible]);

  return (
    <Section ref={ref} style={{ background: "var(--gradient-bg)" }}>
      <Box sx={{ width: "100%", py: "1.8rem" }}>
        <TitleSection style={{ marinBottom: "3rem" }}>
          Mes Services
        </TitleSection>
        <RowServices ref={el}>
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <ServicesCards
                title={service.title}
                icon={service.icon}
                visible={visible}
              />
            </div>
          ))}
        </RowServices>
      </Box>
    </Section>
  );
};

export default Services;
