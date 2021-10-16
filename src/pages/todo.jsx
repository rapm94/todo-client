import {Link} from 'react-router-dom';
import CardTodo from '../components/card-todo';
import Card from '../components/card';
import {getTodos, updateTodo, deleteTodo} from '../helpers/api';
import React, {useState, useEffect, } from 'react';

function Todo() {
    const [todos,
        setTodos] = useState([])

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async() => {
        await getTodos().then(({data: {
                todos
            }}) => setTodos(todos)).catch((err) => console.log(err));
    }

    const handleDeleteTodo = (_id) => {
        deleteTodo(_id).then(({status, data}) => {
            if (status !== 200) {
                console.log('Could not delete todo')
            }
            setTodos(data.todos)
        }).catch((e) => console.log(e));

    }
    const handleUpdateTodo = (todo) => {
        updateTodo(todo).then(({status, data}) => {
            if (status !== 200) {
                console.log('Could not update todo')
            }
            setTodos(data.todos)
        }).catch((e) => console.log(e))

    }

    return (
        <div className="flex justify-center ld:gap-32 md:gap-28 py-24 ">
            <div
                className='bg bg-gray-400 divide-y divide-white overflow-y-auto h-96 w-2/6'>
                <div className='sticky top-0 bg bg-gray-400'>
                    <p className='text-left px-12 py-5
               text-white'>TO-DO</p>
                </div>

                {todos 
                    .filter(todo => todo.done === false)
                    .map((todo) => (<Card
                        key={todo._id}
                        updateTodo={handleUpdateTodo}
                        deleteTodo={handleDeleteTodo}
                        todo={todo}/>))}

            </div>
            <div className='flex flex-col-reverse py-52 '>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto'>
                    <Link to='/form'>
                        Add new task
                    </Link>
                </button>
            </div>
            <div
                className='bg bg-gray-400 divide-y divide-white overflow-y-auto h-96 w-2/6'>
                <div className='bg bg-gray-400 sticky top-0'>
                    <p className='text-left px-12 py-5
               text-white'>DONE</p>
                </div>
                <ul>

                    {todos
                        .filter(todo => todo.done === true)
                        .map((todo) => (<CardTodo
                            key={todo._id}
                            updateTodo={handleUpdateTodo}
                            deleteTodo={handleDeleteTodo}
                            todo={todo}/>))}

                </ul>
            </div>
        </div>
    )
}

export default Todo
