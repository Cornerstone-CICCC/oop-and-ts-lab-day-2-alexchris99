import { App } from "./components/App.js";
import { TodoContext } from "./contexts/TodoContext.js";


// location of the app
const root = document.querySelector('#app')


// app instance
const todoContext = new TodoContext()
const app = new App({todoContext})

//
app.mount(root)