//Redux nos permite tener un store (Almacén de la data de la aplicación)
import {createStore} from 'redux';


const initialState = {
  jugadores: [],
  titulares: [],
  suplentes: []
}

//Función reductora que será la que haga los cambios de la data en la aplicación
//Voy a tener que leer la acción para modificar el estado
const reducerEntrenador = (state = {initialState}, action) =>{
  return state;
}

export default createStore(reducerEntrenador);
