export class TodoContext {
    constructor(){
        this.todos = []
        this.listeners = []
    }

      //create the todo
    addTodo(todo){
        this.todos.push({
        id: Math.floor((Math.random()*(5000-1)+1)),
        description: todo,
        completed: false
        })
        this.notifyListeners()
    }

    completeTodo(id){
        this.todos = this.todos.map(item => {
            if(item.id == id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }else{
                return item
            }
        })
        this.notifyListeners()
    }

    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id !==id)
        this.notifyListeners()
    }

    //
    subscribe(listener){
        this.listeners.push(listener)

    }

    // functions
    notifyListeners(){
        this.listeners.forEach(listener => listener(this.todos))
    }
}