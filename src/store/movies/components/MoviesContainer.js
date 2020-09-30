import React from 'react';
import { useSelector } from 'react-redux';

const MoviesContainer = (props) => {
    const movies = useSelector(state => state.movies);
    return(
    <ul>
        {movies.list.map(movie => <li>{movie}</li>)}
    </ul>)
}


export default MoviesContainer;