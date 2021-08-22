// import  multer from 'multer'
// import path from 'path'
// import AppError from '../utils/AppError'

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/Images')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname+'-'+new Date().toLocaleString('en-Us',{  year: 'numeric', month: 'long', day: 'numeric'})+Math.ceil(Math.random())+path.extname(file.originalname))
//     }
//   })

//   const fileFilter = (req,file,cb)=>{
//       if(file.mimetype.startsWith('image')){
//             cb(null,true)
//       }
//       else{
//           cb(new AppError('given file is not an image',400),false)
//       }
//   }
   
//   export const upload = multer(
//       { 
//           storage,
//         fileFilter
//     })