import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {addTodo} from '../helpers/api'

function Form() {
    const [formdata,
        setFormData] = useState();

    const handleForm = (e) => {
        setFormData({
            ...formdata,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const onSubmitForm = () => {
        addTodo(formdata).then(({status,data})=>{
            if(status!==201){
                console.log('Could not create new todo')
            }
        }).catch((e)=>console.log(e));

    }

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
                                onChange={handleForm}
                                id='name'
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                        </div>
                        <div className="mb-6">
                            <label for="tag-input" className="text-sm font-medium text-gray-900 block mb-2">Assigned to</label>
                            <input
                                onChange={handleForm}
                                id='assigned'
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                            <div className="block">
                                <span>Priority</span>
                                <div className="mt-2">
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" id='priority' value='High' onChange={handleForm}/>
                                            <span className="ml-2">High</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" id='priority' value='Medium' onChange={handleForm}/>
                                            <span className="ml-2">Medium</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" id='priority' value='Low' onChange={handleForm}/>
                                            <span className="ml-2">Low</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-900 block mb-2">
                            Description
                        </label>
                        <textarea
                            onChange={handleForm}
                            id='description'
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
                        onClick={onSubmitForm}
                        type='submit'
                        className='bg-taskgreen hover:bg-blue-700  text-white font-bold py-2 px-4 rounded h-auto'>
                        <Link to='/'>
                            Add Todo
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form
