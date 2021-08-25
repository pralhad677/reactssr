// import mongoose from 'mongoose'
// import bcrypt from 'bcryptjs'
// import AppError from '../utils/AppError'
// const userSchema = new mongoose.Schema({

//     name:{
//         type:String,
//         required:[true,'name is required'],
        
//     },
//     email:{
//         type:String,
//         required: {
//             value: true,
//             message: 'email is required'
//         },
//         unique:true
//     },
//     password: {
//         type:String,
//         required:[true,'password is required'],
//         min:4,
//         max:8
//     },
//     confirmPassword: {
//         type:String,
//         required:[true],
//         validate: {
//             validator: function (value) {
//                 console.log('confirmPassword === password',value === this.password)
//                 if(this.password ===undefined) throw new AppError("confirmPassword is must required ",400)
//                 return  value === this.password
//             },
//             message: `confirmPassword is not matched`
//         }
//     },
//     role: { 
//         type: String, 
//         enum: ['admin','user'],
//         default: 'user',
//          required: true
//      },
// },
//     {timestamps:true}
// )
// userSchema.pre('save', async function(next) {
//     // Only run this function if password was actually modified
//     if (!this.isModified('password')) return next();
    
//     // Hash the password with cost of 12
//     this.password = await bcrypt.hash(this.password, 12);
  
//     // Delete passwordConfirm field
//     this.confirmPassword = undefined;
//     next();
//   });
// userSchema.methods.correctPassword = async function(
//     candidatePassword,
//     userPassword
//   ) {
//     return await bcrypt.compare(candidatePassword, userPassword);
//   }; 

// export  const Model = mongoose.model('User',userSchema)
