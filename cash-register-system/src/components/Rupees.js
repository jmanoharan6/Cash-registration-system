import React from 'react'
let sum = 0;
const Rupees = (props) => {
    return (
        
         <div className="rupees-section">
             <form>
                <table className="rupees-table">
                    <tbody>
                    <tr>
                        <td>
                            <button  className="btn btn-rupee" type="button" onClick={()=>{
                        
                        sum = sum +1;
                        
                        
                        const val={
                            total : sum
                        }
                        props.onAddRupees(val);
                        
                    }}>$1</button>
                        </td>
                        <td>
                            <button  className="btn btn-rupee" type="button" onClick={()=>{
                        
                        sum = sum +5;
                        
                        
                        const val={
                            
                            total : sum


                        }
                        props.onAddRupees(val);
                        
                    }}>$5</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button  className="btn btn-rupee" type="button" onClick={()=>{
                        
                        sum = sum +10;
                        
                        
                        const val={
                            total : sum
                        }
                        props.onAddRupees(val);
                        
                    }}>$10</button>
                        </td>
                        <td>
                            <button  className="btn btn-rupee" type="button" onClick={()=>{
                        
                        sum = sum +20;
                        
                        
                        const val={
                            total : sum
                        }
                        props.onAddRupees(val);
                        
                    }}>$20</button>
                        </td>
                    </tr>   
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Rupees
