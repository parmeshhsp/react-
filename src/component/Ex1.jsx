import React, { useState } from 'react'
/* const array functional component */

/* const local functional component */
const Ex1 = (props) => {
    //const [state,handler] = useState (initial value)
    //state is internal variable -> state is private to component 
    const [x, setX] = useState(1) // muttable states

    const [title, setTitle] = useState('Welcome to state')

    const [view, setView] = useState(false)

    const [users, setUsers] = useState(['Raju', 'john', 'venkat'])

    const [emp, setEmp] = useState({
        name: 'Samey',
        email: 'samey123@gmail.com'
    })
    return (
        <div className="conatiner">
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h4 className='display-4 text-warning'>UseState Hook</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-success'> x = {x} </h1>
                    <hr />
                    <h4 className='text-warning'> {title} </h4>
                    <hr />

                    <h4 className={view ? "text-sucess" : "text-danger"}>
                        {view ? "say True" : "say False"}
                    </h4>
                    <hr />
                    <ul>
                        {
                            users.map((item, index) => {
                                return (
                                    <li className='list-group-item' key={index}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <hr />
                    <h4 className='text-info'> {emp.name} and {emp.email}</h4>
                </div>
            </div>
        </div >
    )
}
export default Ex1