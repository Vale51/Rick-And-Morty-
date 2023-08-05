import { ADD_FAV, ORDER, REMOVE_FAV, FILTER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: [], // Mantenemos una copia de todos los personajes aquí
  };
  
  const rootReducer = (state = initialState, {type, payload}) => { //ya esta desestructurado
    switch(type){
        case ADD_FAV:
            const copyCharacters = [...state.myFavorites, payload];
            return {
                ...state,
                myFavorites: copyCharacters,
                allCharacters: copyCharacters,
            }
        
        case REMOVE_FAV:
            
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload),
                allCharacters: state.myFavorites
            }
        
        case FILTER:
          //tengo dos estados para poder filtrar y que no se me pierda el estado
          //si filtras por female perdes a los que no son female y asi si tenes un solo estado
          const filterCharacter = payload === "All" ? 
          state.allCharacters : 
          state.allCharacters.filter((character) => character.gender === payload)

          return {
            ...state,
            myFavorites: filterCharacter,
            filterGender: payload // género filtrado en el estado
      };
        
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites:
                    payload === "Ascendente"
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
            
        default:
            return {...state}
    }
};
  
  export default rootReducer;
  