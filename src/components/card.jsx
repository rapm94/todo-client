import React from 'react'

function Card() {
    return (
        <div className='flex flex-col px-10 my-8'>
            <div className="bg-white p-6 shadow-md border border-gray-200 rounded-lg max-w-auto">
                <a href="#">
                    <div className='flex gap-x-4'>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Hacer la comida</h5>
                        <div>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Default</span>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Default</span>
                        </div>
                    </div>
                </a>
                <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise
                    technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className='flex gap-x-32'>
                    <div className='flex gap-x-6'>
                        <a
                            href="#"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Delete
                        </a>
                        <a
                            href="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                            Edit
                        </a>
                    </div>
                    <a
                        href="#"
                        className="text-white bg-taskgreen hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                        Done
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Card
