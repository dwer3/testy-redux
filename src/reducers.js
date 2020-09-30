import {combineReducers} from 'redux';
import actorsReducer from './store/actors/duck'
import moviesReducer from './store/movies/duck'

const rootReducer = combineReducers ({
    actors: actorsReducer,
    movies: moviesReducer
});

export default rootReducer;
