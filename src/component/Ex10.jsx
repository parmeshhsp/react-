import React, { useMemo, useState } from 'react'
import AgeInfo from '../screen/AgeInfo'
import Age from '../screen/Age'


// Usecall back => will return memorized value (state/props) of callback
// UseMemo = > will return memorized function(method) of callback

function Ex10(props) {
    const [age, setAge] = useState(26)

    const incAge = () => {
        setAge(age + 1)
    }

    const parmeshAge = useMemo(() => ({
        result: `PARMESH age is ${age} years.`
    }))
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-warning">UseDemo
                    </h3>
                </div>
            </div>

            <Age age={age} ageHandler={incAge} />
            <AgeInfo info={parmeshAge} />
        </div>
    )
}

export default Ex10