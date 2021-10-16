import axios from "axios";

const URL = 'http://127.0.0.1:6080/api';

export const getTodos = async () => {
    try {
        const todos = await axios.get(URL + "/todos")
        return todos
    } catch (error) {
        console.log(error)
    }
}

export const addTodo = async (formData) => {
    try {
        const todo = ({
            name: formData.name,
            description: formData.description,
            done: false,
            assigned: formData.assigned,
            priority: formData.priority,
        })
        const saveTodo = await axios.post(URL + "/add-todo", todo )
        return saveTodo
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async(todo) => {
    try {
        const todoUpdate = {
            done: !todo.done
        }
        const updatedTodo = await axios.put(`${URL}/edit-todo/${todo._id}`, todoUpdate)
        return updatedTodo
    } catch (error) {
        console.log(error)
    }
}
export const deleteTodo = async(_id) => {
    try {
        const deletedTodo = await axios.delete(`${URL}/delete-todo/${_id}`)
        return deletedTodo
    } catch (error) {
        console.log(error)
    }
}
