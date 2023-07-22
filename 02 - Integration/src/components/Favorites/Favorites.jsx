import React from 'react';
import { connect } from 'react-redux';
import Cards from '../Cards/Cards'; //uso el componente Cards para renderizar al estado myFavorites
import { useDispatch } from 'react-redux';
import { order,filter } from '../../redux/actions';


import style from "./Favorites.module.css"

export function Favorites({ myFavorites, onClose, characters }) {
  
  const dispatch = useDispatch()

  const existingFavCharacters = [];

  characters.forEach((char)=>{
    myFavorites.forEach((favChar)=>{
      if (char.id === favChar.id) {
        existingFavCharacters.push(favChar); //este array va a contener los personajes favoritos que tambien existen en el estado characters
      }
    })
  })

  const handleOrder = (e)=>{
    dispatch(order(e.target.value))
  }

  const handleFilter = (e)=>{
    dispatch(filter(e.target.value))
  }
  
  return (
    <>
      <h1 className={style.title}>Your favorite Characters</h1>
      <div>
        <select onChange={handleOrder} name="" id="">
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        
        <select onChange={handleFilter} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
          
        </select>

      </div>
      
      <Cards characters={existingFavCharacters} onClose={onClose} />
      
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


export default connect(mapStateToProps)(Favorites);
