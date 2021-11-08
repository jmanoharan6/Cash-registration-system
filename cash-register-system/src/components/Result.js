import React from 'react'
import Marks from "./Marks"
import Total from "./Total"

const Result = (props) => {

   

    


    return (
        <div className="output-section">
                <h3>Numbers Selected:</h3>
                {props.marks.map((mark)=>(<Marks number={mark.number} />))}
                {props.rupees.map((rupee)=>(<Total total={rupee.total}/>))} 
            </div>
    )
}

export default Result
