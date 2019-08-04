import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Importando una navegación que hicimos como componente
//import Navigation from './components/Navigation';
import ToDoForm from './components/ToDoForm';


//Vamos a importar los datos prueba
import {todos} from './toDos.json';


//Esto es para crear un componente en React
class App extends Component{
    constructor(){
	    super();
    	this.state = {
    	    todos: todos
    	};
    	this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo){
      	this.setState({
      	    //Agregar una nueva tarea al estado de tareas
      	    todos:[...this.state.todos, todo]
      	})
    }

    removeToDo(index){
      if(window.confirm("Estás seguro de querer eliminarlo?")){
        this.setState({
          todos: this.state.todos.filter((e, i) =>{
            return i !== index;
          })
        })
      }
    }

    render(){

    //Puedo procesar los datos antes de renderizarlos
    const todos = this.state.todos.map((todo, i) => {
      	return(
      	    <div className="col-md-4" key={i}>
      		   <div className="card mt-4">
      		     <div className="card-header">
      		        <h3>{todo.title}</h3>
      		        <span className="badge badge-pill badge-danger ml-2">
      		            {todo.priority}
      	          </span>
      	       </div>
               <div className="card-body">
                             <p>{todo.description}</p>
      	       	       <p><mark>{todo.responsible}</mark></p>
      	  	   </div>
               <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.removeToDo.bind(this, i)}>
                      Delete
                    </button>
               </div>
      		  </div>
          </div>
      	)
    });


    return (
      <div className="App">
      	    <nav className="navbar navbar-dark bg-dark">
                      <a href="" className="text-white">
      	            Tareas
      	            <span className="badge badge-pill badge-light ml-2">
      	                 {this.state.todos.length}
      	           </span>
                      </a>
            </nav>
	    <div className="container">
	       <div className="row mt-4">
	           {todos}
               </div>
	    </div>
    	    <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
    	    <ToDoForm onAddTodo={this.handleAddTodo} />
    	    </div>
      </div>
    );
    }
}

export default App;
