import React,{useCallback} from 'react'
import Card from '../components/card'
import {Link} from 'react-router-dom'
import CardTodo from '../components/card-todo'



function Todo() {

    return (
        <div className="flex justify-center ld:gap-32 md:gap-28 py-24 ">
        <div className='bg bg-gray-400 divide-y divide-white overflow-y-auto h-96 w-2/6'>
            <div className='sticky top-0 bg bg-gray-400'>
                <p className='text-left px-12 py-5
           text-white'>TO-DO</p>
            </div>
            <ul className='gap-y-10'>
            </ul>
        </div>
        <div className='flex flex-col-reverse py-52 '>
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto' >
                    <Link to='/form'>
                    Add new task
                    </Link>
                </button>
        </div>
        <div className='bg bg-gray-400 divide-y divide-white overflow-y-auto h-96 w-2/6'>
            <div className='bg bg-gray-400 sticky top-0'>
                <p className='text-left px-12 py-5
           text-white'>DONE</p>
            </div>
            <ul>
                <CardTodo/>
            </ul>
        </div>
    </div>
    )
}

export default Todo
