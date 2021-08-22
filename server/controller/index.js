
import {Model as User} from '../Model/index'
// import  CatchAsync  from "../utils/CatchAsync"
import CatchAsync from '../utils/CatchAsync'
 
// // import  AppError  from "../utils/AppError"

// export const getName = (req,res,next) => {
//     res.status(200).json({
//         name:"jacob"
//     })
// }

export const getName = CatchAsync(async(req,res,next)=>{
    res.status(200).json({
        name:'jacob'
    })
})

// async function a(){

// }