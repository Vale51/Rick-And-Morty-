export function addFav(character) {
    return{
        type: "ADD_FAV",
        payload: character
    }
}

export function removeFav(id) {
    return{
        type: "REMOVE_FAV",
        payload: id
    }
}

export function filter(gender) {
    return{
        type: "FILTER",
        payload: gender
    }
}

export function order(id) {
    return{
        type: "ORDER",
        payload: id
    }
}