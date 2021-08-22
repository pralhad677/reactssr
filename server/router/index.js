
import  express from 'express'
import  {getName} from '../controller/index'
export const  router = express.Router();
// router.route('/').get(controller.getName).post(controller.add)
// router.route('/').get(getName)
// router.route('/1234')
router.route('/1234').get(getName)

