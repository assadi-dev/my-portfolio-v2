import React , {useState,useEffect,useRef}from 'react';
import styles from './realisations.module.css';
import Card from './card';
import { useSelector, useDispatch} from 'react-redux';
import { apiCall } from '../../redux/project/actionProject';
import "./linkFilter.css";




const Realisations = () => {


    const filterBtnRef = useRef()
    const project = useSelector(state => state.projects.project);
    const dispatch = useDispatch();

    const [projectFilter,setProjectFilter] = useState("Afficher Tout");

   

    useEffect(()=>{
       
        dispatch(apiCall(projectFilter));
        

    },[projectFilter]);

    const selectProject = e =>
    {
        let isActive = e.target.classList;
        let categorie = e.target.textContent;

        let linkClass = `.${filterBtnRef.current.classList[0]}`;

        document.querySelectorAll(linkClass).forEach(link => {
          

            if (link.classList.contains("active")) {
                link.classList.remove("active");
            }
            isActive.add("active");

        });

        setProjectFilter(categorie);

        
     
    }



    return (

        



        <section id="realisations" className={styles.presentation} > 

        <div className={styles.heading}>
            <h2 className={styles.titleSection}>Mes Réalisations</h2>
             <div className={styles.intro}>
             </div>
        </div>
        <div className={styles.bodyContainer}>
            <div className={styles.bodyRealisation} >
                <div className="container">
           
                    <div className={styles.projectfilter}>
                        <ul>
                            <li ref={filterBtnRef} className="filterlink active" onClick={(e)=> selectProject(e)} >Afficher Tout</li>
                            <li ref={filterBtnRef} className="filterlink" onClick={(e)=> selectProject(e)} >Application web</li>
                            <li ref={filterBtnRef} className="filterlink" onClick={(e)=> selectProject(e)} >Application mobile</li>
                        </ul>
                    </div>

                    <div className={styles.row_project}>

                        { project.map((project)=>(

                             <Card key={project.id} data={project} filter={projectFilter}  />

                        ))}


                       


                    </div>



               
                </div>
            </div>

        </div>
     
        
        
        </section>
    );
}

export default Realisations;
