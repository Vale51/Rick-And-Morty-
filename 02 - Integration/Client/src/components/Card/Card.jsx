
import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';

export function Card({ id, name, status, species, gender, origin, image, myFavorites , onClose, addFav, removeFav}) {
  const [isFav, setIsFav] = useState(false);
  const [removeCard, setRemoveCard] = useState(false); //estado para oscurecer el fondo cuando mouse hover en una Card
  const [sizeChange, setsizeChange] = useState(false); //estado para oscurecer el fondo cuando mouse hover en una Card


  


  const handleClose = () => {
    setRemoveCard(true)
    setTimeout(() => {
      onClose(id);
    }, 1000);
    
  };

  useEffect(() => {

    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);



  function handleFavorite() {
    
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image
      });
    }
    
    // console.log(isFav);
  }



  return (
    
     <div //{styles.card}
      
      className={`${styles.card} ${removeCard ? styles.exitAnim : ''} ${sizeChange ? styles.sizeChange : ''}`}
      
      onMouseEnter={() => setsizeChange(true)}  
      onMouseLeave={() => setsizeChange(false)} 
    >
      
      {isFav ? (
        <button className={styles.favBtn} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.favBtn} onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.closeButton} onClick={handleClose}>
        X
      </button>

      <Link className={styles.anchorStyle} to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>

      <img className={styles.image} src={image} alt="imagen" />  
      
      <div className={styles.desc}>
        <h2>{status}</h2>

        <h2 className={styles.species}>{species}</h2>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
