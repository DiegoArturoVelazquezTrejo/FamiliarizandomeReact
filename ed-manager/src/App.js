import React from 'react';

//Importando la store que tiene los datos
import store from './store';

//Provider será quien le diga a la aplicación que puede leer data de la store
import {Provider} from 'react-redux';


//Importando los componentes que se usarán en el Componente principal
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/Equiposeleccionado'


//Componente principal
const App = () =>(
  <Provider store={store}>
      <main>
        <h1>EDmanager</h1>
        <Jugadores />
        <EquipoSeleccionado />
      </main>
  </Provider>
)

//Exportando el componente inicial
export default App;
