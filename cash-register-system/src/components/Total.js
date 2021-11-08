import React from 'react'

const Total = (props) => {
    return (
        <div>
            <p className="total-amt">Total : {props.total}</p>  
        </div>
    )
}

Total.defaultProps = {
    total: 0    
}

export default Total
