import React, { useEffect,useState } from 'react';
import styles from './card.module.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';


 
const Card  = ({data:{id,name,picture,categorie,annee,description,link,github},filter} ) => {

    const cleanSlug = name.replace(/ /g, '_');
    const minCategory = categorie.toLowerCase().replace(" ", "_");

    const [showCard, setShowCard] = useState("");
    
    const loadCard = () => {
        setTimeout(() => {setShowCard(styles.showCard)},100)
    }

    useEffect(() => {
        loadCard();
      return function cleanup() {
       
       
          
      }
      
        
    }, []);
    



    return (
        <div  className={cx(styles.col,showCard,"grid-item")} data-category={minCategory} >

            <div className={styles.card}>

                <img className={styles.imgCard} src={picture} alt=""/>

                <div className={styles.cardBody}>

                    <div className={styles.content}>
                        <h3>{name}</h3>

                        <Link
                            className={styles.showProject_btn }
                            to = {{
                                pathname:`/project/${cleanSlug.toLowerCase()}`,
                                state:{id,name,picture,categorie,annee,description,link,github}
                            }}
                        
                        >
                            Voir le projet
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
