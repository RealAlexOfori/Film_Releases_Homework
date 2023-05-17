import React from "react"
import Movie from "./Movie"

const MovieTitles = ({movies}) => {
    
    const movieComponents = movies.map (movie => {
        return (
            <li key={movie.id}>

                <Movie name= {movie.name} url={movie.url}/>
            </li>
        )
    })
         
        return (
            <ul> 
                {movieComponents}
            
            </ul>   
        )
    
}

export default MovieTitles