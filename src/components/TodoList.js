import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {

  constructor(props){
    super(props)
    this.state = { todos:[] }
    this.uppdateList = this.uppdateList.bind(this)
    this.props.todoContext.subscribe(this.uppdateList)
    this.todosListElement = null
  }

  uppdateList(todos){
    this.state.todos = todos
    
    this.todoListElement.innerHTML = " "

    this.state.todos.forEach(item =>{
      const newTodo = new TodoItem({
        item,
        todoContext: this.props.todoContext
      }).render()
      this.todoListElement.appendChild(newTodo)
  })
    

  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"

    todoListElement.innerHTML = `
      <ul id="todo-list"></ul>
    `

    this.todoListElement = todoListElement.querySelector("#todo-list")

  
    return todoListElement;
  }
}