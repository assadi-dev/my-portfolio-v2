import React,{Fragment}  from 'react';
import AboutMe from './aboutMe/aboutMe';
import Skills from './competences/skills';
import Realisation from './realisations/realisations';

const Accueil = () => {
    return (
        <Fragment>
            <AboutMe />
            <Skills />
            <Realisation />
        </Fragment>
  
    );
}

export default Accueil;
