import '../css/App.css';
import Header from "./Header";
import Rupees from "./Rupees";
import Numbers from "./Numbers";
import Result from "./Result";

import {useState} from "react";

const App = () => {

  const[marks,setMarks]=useState([]);
  const[rupees,setRupees]=useState([]);

  const addMarks = (num)=>
  {

     

    //  localStorage.setItem("marks",JSON.stringify([...marks,num]));

      setMarks([...marks,num]);

  }

  const addRupees = (val)=>
  {
      
      //localStorage.setItem("rupees",JSON.stringify([...rupees,val]));

      setRupees([val]);

  }

  const deleteMark = (num)=>{

    const newMarks =   marks.filter((mark)=>{
      
      return mark === num
    })
    
     setMarks(newMarks);

  }

  const clearData = ()=>{
    setMarks([]);
    setRupees([]);
  }

 

  return (
    <>
    <Header/> 
    <Rupees marks = {marks} onAddRupees = {addRupees}/>
    <Numbers marks = {marks} onAddMark={addMarks} onDeleteMark= {deleteMark} onClear={clearData}/>
    <Result marks = {marks} rupees={rupees}/>  
    
    </>
  ); 
}

export default App;
