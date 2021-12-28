import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Section from "../../../../component/Section";
import { Stack, Box } from "@mui/material";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const AboutMe = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const el = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const q = gsap.utils.selector(el);
  useEffect(() => {
    const animation1 = gsap.fromTo(
      el.current,
      { opacity: 0, x: 0, y: 0 },
      {
        opacity: visible ? 1 : 0,
        x: 33,
        y: 33,
        duration: 1,
        delay: 0.3,
      }
    );

    const animation2 = gsap.fromTo(
      q(el2.current),
      { opacity: 0, x: 100 },
      { opacity: visible ? 1 : 0, x: 0, duration: 1.5, delay: 0.3 }
    );

    const animation3 = gsap.fromTo(
      q(el3.current),
      { opacity: 0, x: 100 },
      { opacity: visible ? 1 : 0, x: 0, duration: 1, delay: 0.6 }
    );
    const animation4 = gsap.fromTo(
      el4.current,
      { opacity: 0 },
      { opacity: visible ? 1 : 0, duration: 1 }
    );

    return () => {
      animation1.kill();
      animation2.kill();
      animation3.kill();
      animation4.kill();
    };
  }, [visible]);

  return (
    <Section id="about" ref={ref}>
      <Stack
        flexDirection={{ sm: "row" }}
        justifyContent="space-between"
        sx={{ width: "100%", my: { sm: "3.5rem" }, mx: { sm: "2.5rem" } }}
      >
        <Box className={styles.border_picture}>
          <div ref={el4} className={styles.picture}>
            <div ref={el} className={styles.bgImageContainer}>
              <img src="../uploads/profile/about-8.jpg" alt="photo" />
            </div>
          </div>
        </Box>
        <Box className={styles.presentation}>
          <h2 ref={el3} className={styles.title}>
            A Propos de moi
          </h2>
          <p ref={el2} className={styles.text}>
            Après quelques expériences professionnelles dans l'informatiques en
            tant que technicien, j'ai décidé de me diriger vers un domaine pour
            lequel je me suis découvert une passion, la programmation et plus
            particulièrement le Web. J'ai suivi une formation avec le CEFII à
            distance,ce qui m'a permis d'apprendre les différents languages du
            web et leur utilisation à travers différents cas pratiques.
          </p>
        </Box>
      </Stack>
    </Section>
  );
};

export default AboutMe;
