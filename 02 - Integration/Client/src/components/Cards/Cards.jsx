import React from 'react';
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  
 

  return <div className = {styles.container}>
    
    {characters.map(character => 
      <Card
      key={character.id} //sin key las Card no se pueden identificar y se mezclan los estados (isFav)
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin.name}
      image={character.image}
      onClose={onClose}
     
    />)}
    </div>

}
