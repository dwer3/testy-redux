import { createStore } from 'redux';
import rootReducer from './reducers';

import { movieActions } from './store/movies/duck'

const store = createStore(rootReducer);

window.store = store;

store.dispatch(movieActions.add('Szklana Pułapka'));

export default store;