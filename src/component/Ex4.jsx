import { useState } from "react";


function Ex4(props) {
    const [num, setNum] = useState(0)

    const incValue = (val) => {
        console.log('value =', val)
        setNum(num + val)
    }

   

}

export default Ex4 