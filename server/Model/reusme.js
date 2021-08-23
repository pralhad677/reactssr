import mongoose from 'mongoose'


const resumeSchema = new mongoose.Schema({
    about:{
        type:String,
        required:[true,"about is required"],
        minLength:30,
        maxLength:100
    },
    skill:{
        type:[String],
        required: true,
        default:[]
     },
     career:{
        type:[String],
        required: true,
        default:[] 
     },
     hobbies:{
        type:[String],
        required: true,
        default:[] 
     },
     currentJob:{
        type:String,
         
     }
   
})

export  const Model = mongoose.model('Resume',resumeSchema)
