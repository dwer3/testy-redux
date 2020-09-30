import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import { createStore, combineReducers, bindActionCreators } from 'redux';


//REDUX
const moviesShop = {
  listName: 'Favorite',
  list : [
    'Transporter',
    'Matrix',
    'Rambo'
  ]
}

const actorShop = {
  listName: 'Best',
  list : [
    'Tom Hanks',
    'Brad Pit'
  ]
}

function movies(state = moviesShop, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {...state, list: [...state.list, action.item]}
    case 'RESET_MOVIES':
      return {...state, list: []}
    default:
      return state
  }
}

function actors(state = actorShop, action) {
  switch (action.type) {
    case 'ADD_ACTOR':
      return {...state, list: [...state.list, action.item]}
    case 'RESET_ACTORS':
      return {...state, list: []}
    default:
      return state
  }
}

const allReducers = combineReducers({movies, actors})
const store = createStore(allReducers);

//store.dispatch({type: 'ADD_ACTOR', item: 'Cezary Pazura'}); //to samo co poniżej
const addActor = item => ({type: 'ADD_ACTOR', item});
store.dispatch(addActor('Cezary Pazura'));

const reset = () => ({type: 'RESET_ACTORS'});
const moviesActions = bindActionCreators({add: addActor, reset}, store.dispatch);

moviesActions.reset();
moviesActions.add('Tomasz Karolak');



window.store = store;


//REACT
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function Welcome(props) {
  return <h2>Witaj {props.name}</h2>
}

const user = {
  firstName: 'Damian',
  lastName: 'Wu',
  avatar: logo,
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };
    this.klik = this.klik.bind(this);
  }


  klik() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render () {
    return (
      <div>
        <h3>Aktualny czas: {this.state.date.toLocaleTimeString()}</h3>
            <button onClick={this.klik}>
        {this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
      </button>
      </div>
      
    )
  }
}

const element = (
  <div>
    <h1>Cześć {formatName(user)}</h1>
    <img src={user.avatar} width='100px'/>
    <Welcome name="Andrzej" />
    <Welcome name="Witold" />
    <Clock />

  </div>
  
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
