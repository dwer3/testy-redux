import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesContainer from './store/movies/components/MoviesContainer'
import MoviesForm from './store/movies/components/MoviesForm';

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
    </div>
  );
}

export default App;
