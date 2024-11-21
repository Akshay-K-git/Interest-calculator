import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from '@mui/material';
import './Home.css'
function Home() {
  //Holding values from the input box
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  //To assign calculates interest value
  const [interest, setInterest] = useState(0)

  console.log(amount,rate,year)
  //Calculate function
  const handlecalculate = ()=> {
let output = amount*year*rate/100
console.log(output);
setInterest(output)

  }

  return (

    <div className='container shadow my-4 w-50 m-auto pb-3'>
      <h1 className='text-center pt-3'>INTEREST CALCULATOR </h1>
      <div class="card m-auto no-shadow ">
        <div class="header mb-4">
          <h1 className='text-center'>&#8377;{interest}</h1>
        </div>

        <Box component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off">
          <TextField onChange={(e) => setAmount(e.target.value)} className='w-75 '
            required
            id="outlined-required"
            label="Amount"
          /><br />
          <TextField onChange={(e)=>setYear(e.target.value)}
            required
            id="outlined-required"
            label="Year"
          />
          <TextField onChange={(e)=>setRate(e.target.value)}
            required
            id="outlined-required"
            label="Interest"
          />
        </Box>

        <div class="footer">
          <Button onClick={handlecalculate} variant="outlined">Calculate</Button>
          {/* in case of passing parameter onclick ={()=>handlecalculate(para)} */}
          <Button variant="outlined">Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default Home