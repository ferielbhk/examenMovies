import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishList,clearWishList } from "./redux/actions";
function WhishList (){
    const movies = useSelector((state) => state.wishList.movies);
    const dispatch = useDispatch()
    const deletef = (movie)=>{
        console.log(movie)
        dispatch(deleteFromWishList(movie))
    }
    useEffect(()=>{
        console.log(movies)
    })
    return(
        <>
        {movies.map(movie=>{
            return(
                <div>
                              <div className="d-flex">
                    {movie.title}
                    <button onClick={()=>deletef(movie)}>x</button>
                </div>
                <button onClick={()=>dispatch(clearWishList())}>clear</button>
                </div>
      
            )
        })}
        </>
    )
}
export default WhishList;