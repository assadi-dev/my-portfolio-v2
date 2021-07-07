import React from 'react';
import styles from './project.module.css';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {useLocation, useParams} from 'react-router-dom';



const Project = () => {

    library.add(fab,fas,far);
    let location = useLocation();
    let project = location.state;


    return (
        <section className={styles.sectionProject}>
            <div className={styles.projectContain}>

               
                <div className={styles.text_center}>
                    <h2>{project.name}</h2>
                </div>
                    <div className={styles.projectImageContain}>
                        <img className={styles.projectImage}  src={project.picture} alt="Image"/>
                    </div>


                <div className={styles.projectBody}>
                    <table>
                        <thead>
                            <tr >
                                <th className={styles.descriptiont}  >Description <hr/> </th>
                                <th className={styles.infoProject} >Info Project <hr/></th>
                            </tr>
                        </thead>

                        <tbody>
                           
                            <tr>
                                <td rowSpan='3' className={styles.colDescription} >
                                    <div className= {styles.textDescription}>
                                        {project.description}
                                    </div>
                                </td>
                                <td className={styles.colInfoProject} >

                                    <ul className={styles.infoProjectList}>
                                        <li>
                                            <FontAwesomeIcon icon={['far','calendar-alt']}   />
                                            Année:<span> {project.annee}</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={['fas','tags']}   />
                                            Categorie:<span> {project.categorie}</span></li>
                                    </ul>

                                    <hr/>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <ul className={styles.projectLink}>
                                        <li> 
                                        <a className={styles.link} target="blank" href={project.github}> 
                                            <button className={styles.githubBtn} >
                                                <FontAwesomeIcon icon={['fab','github']}   />
                                                Github
                                            </button>
                                        </a>
                                        </li>
                                        <li>
                                        <a className={styles.link} target="blank" href={project.link}>
                                             <button className={styles.projectBtn} >
                                                 <FontAwesomeIcon icon={['fas','link']} />
                                                 Voir le projet
                                                </button> 
                                        </a> </li>

                                    </ul>
                                </td>
                            </tr>
    



                        </tbody>


                    </table>

                </div>
            </div>
        </section>
    );
}

export default Project;
