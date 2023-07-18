import React, { memo } from "react";

function AgeInfo(props) {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className=" text-primary"> AgeInfo </h3>
                <h4 className="text-success"> {props.info.result}</h4>
            </div>
        </div>
    )
}

export default AgeInfo