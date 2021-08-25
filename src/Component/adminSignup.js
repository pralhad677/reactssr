import React from 'react'
import Form from './Form3'
import {Button} from "@material-ui/core"; 
import { useHistory} from 'react-router-dom'
function Singup() {
    const history = useHistory()
    return (
        <div>
           <Form history={history}/> 
           <div>
               <h1>Already Have Account</h1>
               <Button onClick={()=>history.push("/adminLogin")}>click here</Button>
           </div>
        </div>
    )
}

export default Singup
