import React from "react";

function Age(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <h3 className=" text-danger">Age = {props.age}</h3>
                <button className="btn btn-success" onClick={props.ageHandler}>Increament Age </button>
            </div>
        </div>
    )
}

export default Age