import mongoose from 'mongoose'


const blogSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
    
   
})

export  const Model = mongoose.model('Blog',blogSchema)
