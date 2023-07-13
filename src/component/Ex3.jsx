import React, { useState } from "react";

function Ex3(props) {
    const [x, setX] = useState(1)
    const [title, setTitle] = useState('welcome to state')
    const [view, setView] = useState(false)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger"> useState (functional component) </h3>
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
            </div>
        </div>

    )
}

export default Ex3