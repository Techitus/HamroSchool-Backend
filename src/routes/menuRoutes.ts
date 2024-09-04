import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import menuController from '../controllers/menuController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(menuController.addMenu))





export default router