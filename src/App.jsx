import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

let [Amount,setAmount]=useState(0);
let [Year,setYear]=useState(0);
let[Interest,setInterest]=useState(0)
let[result,setresult]=useState(0)


  const  calculate=()=>{
 if(Amount&&Year&&Interest){
const Result=(Amount*Year*Interest)/100;
setresult(Result)
console.log(`(${Amount}*${Year}*${Interest})/100+"="+${Result})`);
 }else{
  alert("please fill all columns")
 } 
}
const reset=()=>{
  setYear(0);
  setAmount(0);
  setInterest(0);
  setresult(0);
}


  return (
    <div className="App">
      <div className='maindiv'>
        <div className="header">
          <h1 style={{ textDecoration: 'underline' }}>Simple Interest Calculator</h1>
          <p> Calculate your Simple Interest with Us ✌️</p>
        </div>

        <div className="Output_box">
          <h2> &#8377;{result}  </h2>
          <h4>Your Total Interest</h4>
        </div>

        <div className='text_field'>
          <div className='text'><TextField value={Amount ||""} onChange={(e)=>setAmount(e.target.value)} className="outlined-basic" label="Amount" /></div>
          <div className='text'><TextField value={Year||""} onChange={(e)=>setYear(e.target.value)} className="outlined-basic" label="Year" /></div>
          <div className='text'><TextField value={Interest||""} onChange={(e)=>setInterest(e.target.value)} className="outlined-basic" label="Rate" /></div>
        </div>

        <div className='buttons'>
          
            <Button onClick={reset} color="secondary"  variant="contained" >Reset</Button>
            <Button onClick={calculate} variant="contained" color="success">Calculate</Button>
          
        </div>




      </div>
    </div>
  );
}

export default App;
