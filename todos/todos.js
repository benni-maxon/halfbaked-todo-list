import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    // create todo state
    const formData = new FormData(todoForm);

    const todo = formData.get('todo');

    // add async complete todo handler function
    await createTodo(todo);

    // call completeTodo
    completeTodo();

    // swap out todo in array
    todoForm.reset();

    // call displayTodos
    displayTodos();
});

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';

    // display the list of todos,
    // call render function, pass in state and complete handler function!
    // append to .todos
}

// add page load function
// fetch the todos and store in state
// call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
