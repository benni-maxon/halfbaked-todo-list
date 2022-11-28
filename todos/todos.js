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
    const todos = await getTodos();

    todosEl.innerHTML = '';

    for (let todo of todos) {
        const todoEl = renderTodo(todo);

        todoEl.addEventListener('click', async () => {
            await completeTodo(todo.id);

            displayTodos();
        });

        todosEl.append(todoEl);
    }
}

window.addEventListener('load', async () => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    await deleteAllTodos();

    displayTodos();
});
