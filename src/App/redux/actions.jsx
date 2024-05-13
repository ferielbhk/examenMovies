export const addToWishList = (movie) => ({
    type : 'addMovie',
    payload:movie
})
export const deleteFromWishList = (movie) => ({
    type : 'deleteMovie',
    payload:movie
})
export const clearWishList = () => ({
    type : 'clearWL',
    
})