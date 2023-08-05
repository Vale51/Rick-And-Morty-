
import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';

export function Card({ id, name, status, species, gender, origin, image, myFavorites , onClose, addFav, removeFav }) {
  const [isFav, setIsFav] = useState(false);

  const handleClose = () => {
    onClose(id);
  };

  useEffect(() => {
    

    myFavorites.forEach((fav) => {
    //   console.log(fav.id);
    // console.log(id);
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
    console.log(id);
    console.log(isFav);
  }

  return (
    



    <div className={styles.card}>
      {isFav ? (
        <button className={styles.favBtn} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.favBtn} onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.closeButton} onClick={handleClose}>
        X
      </button>

      <Link to={`/detail/${id}`}>
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
