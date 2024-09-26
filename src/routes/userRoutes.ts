import express, {Router} from 'express'
import errorHandler from '../service/catchAsyncError'
import AuthController from '../controllers/userController'
const router:Router = express.Router()

router.route('/login').post(errorHandler(AuthController.loginUser))
router.route('/register').post(errorHandler(AuthController.registerUser))





export default router