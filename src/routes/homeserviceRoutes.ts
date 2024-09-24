import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import HomeServiceController from '../controllers/homeserviceController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(HomeServiceController.addHomeService))
.get(HomeServiceController.getHomeService)

router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(HomeServiceController.updateHomeService))
.delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),HomeServiceController.deleteHomeService)





export default router