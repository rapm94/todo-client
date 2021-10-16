import React from 'react'
import { updateTodo } from '../helpers/api';
import {Link} from 'react-router-dom'

function EditPage(props) {
    const todo = props.location.editProps

    return (
        <div className="bg bg-gray-300  justify-center flex h-screen ">

            <div
                className="grid grid-flow-row auto-row-max  justify-center py-20 gap-3 h-3/6">
                <div className='grid grid-flow-col auto-cols-max gap-8'>
                    <div className='grid grid-flow-row auto-row-max'>
                        <div className="mb-6">
                            <label
                                for="name-input"
                                className="text-sm font-medium text-gray-900 block mb-2">Name the Todo</label>
                            <input
                                type="text"
                                id="-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                        </div>
                        <div className="mb-6">
                            <label for="tag-input" className="text-sm font-medium text-gray-900 block mb-2">Add tags</label>
                            <input
                                type="text"
                                id="tag-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                        </div>
                    </div>

                    <div>
                        <label
                            for="desc-input"
                            className="text-sm font-medium text-gray-900 block mb-2">
                            Description
                        </label>
                        <textarea
                            type="textarea"
                            id="desc-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-4/6 w-full p-4"/>
                    </div>

                </div>

                <div className='flex gap-16'>
                    <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-auto'>
                        <Link to='/'>
                            Cancel
                        </Link>
                    </button>
                    <button
                    onClick={()=>updateTodo()}
                        className='bg-taskgreen hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto'>
                        <Link to='/'>
                            Change todo
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditPage