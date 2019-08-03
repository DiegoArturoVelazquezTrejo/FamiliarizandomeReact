import React from 'react'; //Se necesita para los trabajos web
import ReactDOM from 'react-dom'; //Se necesita para los trabajos web 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; //Hace que la aplicación funcione aunque se haya desconectado a internet. 

//Renderiza la aplicación en la pantalla 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
