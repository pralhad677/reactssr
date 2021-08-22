import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'name is required'],
        
    },
    email:{
        type:String,
        required: {
            value: true,
            message: 'email is required'
        },
        unique:true
    },
    password: {
        type:String,
        required:[true,'password is required'],
        minlength:4,
        maxlength:8
    }
})

export  const Model = mongoose.model('User',userSchema)
