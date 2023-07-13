import React from "react";
import Ex1 from "./component/Ex1"
import Ex2 from "./component/Ex2"
import Ex3 from "./component/Ex3";
import Ex5 from "./component/Ex5";


/* react hook => method -> */
function App (props){
  return(
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="display-4 text-success">React Hooks</h3>
            </div>
        </div>
       <Ex5/>
       
      </div>
  )
}

export default App