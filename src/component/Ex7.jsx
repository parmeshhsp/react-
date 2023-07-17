import React, { useRef } from "react";

function Ex7(props) {

    const fName = useRef()
    const fEmail = useRef()
    const fMobile = useRef()

    const submitHandler = (event) => {
        event.preventDefault(); //to prevent page reload
        const data = {
            name: fName.current.value,
            email: fEmail.current.value,
            mobile: fMobile.current.value
        }
        console.log('register =', data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success"> UseRef </h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler} >
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" ref={fName} className="form-control" required />
                            </div>
                            
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="mail" id="email" ref={fEmail} className="form-control" required />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text" name="mobile" id="mobile" ref={fMobile} className="form-control" required />
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
export default Ex7