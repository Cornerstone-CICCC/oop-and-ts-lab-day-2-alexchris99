import { Component } from "../common/Component.js";

// creation of the item Tdo
export class TodoItem extends Component {
  constructor(props){
    super(props)
    this.status = this.status.bind(this)
    this.handdleDelete = this.handdleDelete.bind(this)
    this.todoElement = null
  }

  status(){
    this.props.todoContext.completeTodo(this.props.item.id)
  }

  handdleDelete(){
    this.props.todoContext.deleteTodo(this.props.item.id)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML =  `
      <li><span>${this.props.item.description}</span> <button class="completed" id="mark">${ this.props.item.completed ? "Mark uncompleted" : "Mark Completed"}</button> <button id="del">Delete</ button></li>
  `
  const completed = todoElement.querySelector("#mark").addEventListener("click", this.status)

  const del = todoElement.querySelector("#del").addEventListener("click", this.handdleDelete)

  this.todoElement = todoElement

    return todoElement;
  }
}