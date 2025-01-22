import { Component } from "../common/Component.js";
//input for the todo item
export class AddTodo extends Component {

  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(todo){
    this.props.todoContext.addTodo(todo)
  }


  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    
    addElement.querySelector("#todo-add-btn").addEventListener("click",()=>{
      this.handleAdd(addElement.querySelector("#todo-input").value)
    })

    return addElement;
  }
}