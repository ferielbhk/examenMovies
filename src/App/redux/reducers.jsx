const initialState = {
    movies : [] ,
}
export const wreducers = (state = initialState , action) =>{
    switch(action.type){
        case 'addMovie' : 
        const newEvents = state.movies
        newEvents.push(action.payload)
        return { ...state, movies: newEvents }
        case "deleteMovie" :
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.payload.id),
              };
        case "clearWL":
            return{...state,movies:[]}
        default : return state 
    }
}