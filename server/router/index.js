
import  express from 'express'
import  {login,signUp} from '../controller/index'
// import {upload } from '../utils/File'
export const  router = express.Router();
// router.route('/').get(controller.login).post(controller.add)
// router.route('/').get(login)
// router.route('/1234') 
router.route('/user/login').post(login) 
router.route('/admin/login').post(login) 
router.route('/user/signup').post(signUp) 
router.route('/admin/signup').post(signUp) 
// router.route('/').post(upload.single('Image'),blog rakhne ya)
 