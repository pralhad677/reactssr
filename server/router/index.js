
import  express from 'express'
import  {login} from '../controller/index'
// import {upload } from '../utils/File'
export const  router = express.Router();
// router.route('/').get(controller.login).post(controller.add)
// router.route('/').get(login)
// router.route('/1234')
router.route('/login').get(login) 
// router.route('/').post(upload.single('Image'),blog rakhne ya)
 