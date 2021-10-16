import React from 'react'
import Form from './pages/form'
import Todo from './pages/todo'
import {Switch, Route, Link} from 'react-router-dom'
import Logo from './assets/logo-todo.png'
import EditPage from './pages/edit';

function App() {

    return (
        <div className="bg bg-gray-300 h-full  ">
            <header className='bg bg-taskblue border-2 border-gray-400'>
                <div className='flex justify-center'>
                    <div className='flex py-5 items-center gap-5'>
                        <Link to='/'>
                            <img src={Logo}/>
                        </Link>
                        <p className='text-white text-xl'>Aplicación para la gestión de proyectos</p>
                    </div>
                </div>
            </header>
                <Switch>
                    <Route path='/form'>
                        <Form/>
                    </Route>
                    <Route path='/edit'>
                        <EditPage/>
                    </Route>
                    <Route path='/'>
                        <Todo/>
                    </Route>
                </Switch>

            <footer className='bg bg-gold border-2 border-gray-400 '>
                <div className='flex  justify-center'>
                    <div className='flex py-5'>
                        <p className='text-white'>Todos los derechos reservados 2021</p>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default App;
