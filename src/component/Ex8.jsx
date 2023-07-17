import React, { useState } from "react";

function Ex8(props) {

    const [login, setLogin] = useState({
        user: "",
        pass: ""
    })

    // set the value to state

    const readValue = (event) => {
        const { name, value } = event.target
        //console.log(`name = ${name} ` + `,value = ${value}`)
        setLogin({ ...login, [name]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault() // to avoid page refresh
        console.log('login data =', login)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">form handling using state & Onchange event </h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="user">Username</label>
                                <input type="text" name="user" value={login.user} onChange={readValue} id="user"
                                    className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" value={login.pass} onChange={readValue}
                                    id="pass" className="form-control" required />
                            </div>


                            <div className="form-group mt-2">
                                <input type="submit" value="Register" className="btn btn-outline-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ex8