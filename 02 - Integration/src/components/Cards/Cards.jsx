import React from 'react';
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  
  const renderCardGroups = () => {
    const cardGroups = [];
    let currentGroup = [];

    // Iterar sobre los personajes
    characters.forEach((character, index) => {
      currentGroup.push(character);

      // Verificar si se alcanzó el límite de 4 tarjetas o si es el último personaje
      if (currentGroup.length === 4 || index === characters.length - 1) {
        // Agregar el grupo actual al array de grupos de tarjetas
        cardGroups.push(currentGroup);
        // Reiniciar el grupo actual para el próximo conjunto de tarjetas
        currentGroup = [];
      }
    });

    return cardGroups.map((cardGroup, index) => (
      <div className={styles.gallery} key={index}>
        {cardGroup.map((character) => (
          <Card
          
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
       
        ))}
      </div>
    ));
  };

  return <div>{renderCardGroups()}</div>;

}
