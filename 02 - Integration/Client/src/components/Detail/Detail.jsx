import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

function Detail() {
  
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return () => {
      setCharacter({});
    };
  }, [id]);

  return (
   <div className={styles.container}>
     <div className={styles.text}>
       <h1 className={styles.name}>{character.name}</h1>
       <h3>{character.status}</h3>
       <h3>{character.gender}</h3>
       <h3>{character.species}</h3>
       <h3>{character.origin && character.origin.name}</h3>
     </div>
     <div >
       <img className={styles.image} src={character.image} alt="" />
     </div>
   </div>
 );
}

export default Detail;
