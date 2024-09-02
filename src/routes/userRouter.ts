import express, {Router} from 'express'
import errorHandler from '../service/catchAsyncError'
import AuthController from '../controllers/userCOntroller'
const router:Router = express.Router()

router.route('/login').post(errorHandler(AuthController.loginUser))




export default router