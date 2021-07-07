import React from 'react';
import styles from './skills.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';


const skills = () => {

    library.add(fab,fas);


    return (
        <section id="competence" className={styles.presentation} >

            <div className="container">
            <div className={styles.titleContain}>
                <h2 className={styles.titreSection}>Mes competence</h2>
            </div>

            <div className={styles.intro}>
            </div>

            <div className={styles.row}>

                <div className={styles.Skill_item}>
                    <div className={styles.item_inner}>
                        <div className={styles.item_icon}>
                            <FontAwesomeIcon className={styles.html} icon={['fab','html5']}  />
                            <FontAwesomeIcon className={styles.css} icon={['fab','css3-alt']}  />
                            
                        </div>
                        <h3 className={styles.item_title} >HTML & CSS</h3>
                        <div className={styles.item_desc}>
                           
                        </div>

                    </div>

                </div>


                <div className={styles.Skill_item}>
                    <div className={styles.item_inner}>
                        <div className={styles.item_icon}>
                            <FontAwesomeIcon className={styles.javascript} icon={['fab','js']}  />
                        </div>
                        <h3 className={styles.item_title} >Vanilla Javascript</h3>
                        <div className={styles.item_desc}>
                        </div>

                    </div>

                </div>


                <div className={styles.Skill_item}>
                    <div className={styles.item_inner}>
                        <div className={styles.item_icon}>
                            <FontAwesomeIcon className={styles.react} icon={['fab','react']}  />

                        </div>
                        <h3 className={styles.item_title} >React JS</h3>
                        <div className={styles.item_desc}>

                        </div>

                    </div>

                </div>


                
                <div className={styles.Skill_item}>
                    <div className={styles.item_inner}>
                        <div className={styles.item_icon}>
                            <FontAwesomeIcon className={styles.php} icon={['fab','php']}  />

                        </div>
                        <h3 className={styles.item_title} >PHP</h3>
                        <div className={styles.item_desc}>

                        </div>

                    </div>

                </div>


                <div className={styles.Skill_item}>
                    <div className={styles.item_inner}>
                        <div className={styles.item_icon}>
                            <FontAwesomeIcon className={styles.symfony} icon={['fab','symfony']} />

                        </div>
                        <h3 className={styles.item_title} >Symfony 5</h3>
                        <div className={styles.item_desc}>

                        </div>

                    </div>

                </div>


            </div>

        </div>
        </section>
    );
}

export default skills;
