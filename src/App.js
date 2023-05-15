
import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()

    this.estado= {isActive: false}
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }

  
   
      handleChange(e) {
        this.setState({newTask: e.target.value});
      }
   
  

 handleSubmit(e) {
  e.preventDefault();
  this.setState({newTask: e.target.value});
  
    
      this.addTask(this.state.newTask);
     

    }


addTask(dato)  {
  
  
    if(dato){

      let copy = [...this.state.tasks];
      copy = [...copy, { id: this.state.tasks.length + 1, name: dato, done: false }];
      this.setState({ isActive: false});
      
      this.setState({
       // tasks: this.state.tasks.concat(copy[copy.length-1])
       tasks: copy
      }) 
      
    }

    else if(!dato) {

      this.setState({ isActive: true});
      console.log(this.state.isActive)
     
    }

      
  }

  handleCheck(id) {
  let mapped = this.state.tasks.map(task => {
  return task.id === Number(id) ? { ...task, done: !task.done } : { ...task};
});
this.setState ({
  tasks: mapped
})
}

  

//className={task.done? "done": null}


  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li onClick={this.handleCheck.bind(this, task.id)} className={task.done? "done": null} key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)}> 
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask || ""}  onChange={this.handleChange.bind(this)}  className={this.state.isActive? "error" : "input"} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;