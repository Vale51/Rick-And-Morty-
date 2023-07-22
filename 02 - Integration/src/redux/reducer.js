const initialState = {
    myFavorites: [],
    allCharacters: [], // Mantenemos una copia de todos los personajes aquí
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
        const updatedFavorites = [...state.myFavorites, action.payload];
  
        return {
          ...state,
          myFavorites: updatedFavorites,
        };
  
      case "FILTER":
        const filteredChars = state.allCharacters.filter(
          (character) => character.gender === action.payload
        );
        return {
          ...state,
          myFavorites: filteredChars, // Actualizamos myFavorites con los personajes filtrados
        };
  
      case "ORDER":
        const orderChars = state.allCharacters.sort((a, b) => {
          // Ordenamos el array de todos los personajes
          if (action.payload === "Ascendente") {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
          } else {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
            return 0;
          }
        });
        return {
          ...state,
          myFavorites: [...orderChars], // Actualizamos myFavorites con el array ordenado
        };
  
      case "REMOVE_FAV":
        const updatedList = state.myFavorites.filter(
          (favorite) => favorite.id !== parseInt(action.payload)
        );
        console.log("Nuevo estado de myFavorites (después de eliminar):", updatedList);
        return {
          ...state,
          myFavorites: updatedList,
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  