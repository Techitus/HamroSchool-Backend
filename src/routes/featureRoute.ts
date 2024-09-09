import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import menuController from '../controllers/menuController'
import featureController from '../controllers/featureController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(featureController.addFeature)).get(featureController.fetchFeature)

router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(featureController.updateFeature)).delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),featureController.deleteFeature)





export default router