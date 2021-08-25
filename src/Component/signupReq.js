import React from 'react'
import axios from 'axios'
function SignupReq({data,state}) {
    const [req,setReq] = React.useState(state)
    let responseData
    console.log('in signupreq.js')
    React.useEffect(()=>{
        const source = axios.CancelToken.source()
      if(req){
        async function fetchApi(){
          try{
              await axios.post('http://localhost:3006/signup', data)
              .then(response => {
                responseData = response
                console.log('response',response)}
                  
              ).catch(err=>console.log(err))
    
              
          }
          catch(err){
           throw new Error(err)
                     }}
         fetchApi()
      }
      return ()=>{
        source.cancel()
      }
    
    },[req,data])
    // return responseData
}

export default SignupReq
