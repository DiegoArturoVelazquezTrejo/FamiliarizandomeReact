import React from 'react';

//Para conectar este componente con la data
import {connect} from 'react-redux';

//Componente Jugadores
const Jugadores = ({jugadores}) =>(
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
        {
          jugadores.map(j =>(
                <article className="jugador">
                  <img src={j.foto} alt={j.nombre} />
                  <h3>{j.nombre}</h3>
                  <div>
                    <button>Titular</button>
                    <button>Suplente</button>
                  </div>
                </article>
          ))
        }
    </div>
  </section>
)

const mapeaEstadoAPropiedades = estado => ({
  jugadores: estado.jugadores
})


export default connect(mapeaEstadoAPropiedades, mapeaFuncionesAPropiedades)(Jugadores);
