import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const skillList = [
  { name: "Html", icon: ["fab", "html5"] },
  { name: "CSS", icon: ["fab", "css3-alt"] },
  { name: "Javascript", icon: ["fab", "js"] },
  { name: "PHP", icon: ["fab", "php"] },
  { name: "Symfony", icon: ["fab", "symfony"] },
  { name: "Node JS", icon: ["fab", "node"] },
  { name: "MYSQL", icon: ["fas", "database"] },
  { name: "Mongo DB", icon: ["fas", "database"] },
  { name: "React", icon: ["fab", "react"] },
  { name: "Wordpress", icon: ["fab", "wordpress"] },
];

const SkillContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 150px);
    justify-content: center;
  }
`;

const ProfessionalSkill = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const animation = gsap.fromTo(
      q(".box"),
      { opacity: 0, scale: 1.4 },

      {
        opacity: visible && 1,
        stagger: 0.1,
        scale: 1,
        duration: 1,
      }
    );

    return () => {
      animation.kill();
    };
  }, [visible]);
  return (
    <div ref={ref} style={{ width: "100%" }}>
      <SkillContainer visible={visible} ref={el}>
        {skillList.map((skill, index) => (
          <div key={index} className="box" style={{ width: "100%" }}>
            <SkillCard name={skill.name} icon={skill.icon} visible={visible} />
          </div>
        ))}
      </SkillContainer>
    </div>
  );
};

export default ProfessionalSkill;
