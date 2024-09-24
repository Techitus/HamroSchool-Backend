import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import HomeTestimonialController from '../controllers/hometestiController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(HomeTestimonialController.addHomeTestimonial)).get(HomeTestimonialController.getHomeTestimonial)

router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(HomeTestimonialController.updateHomeTestimonial))
.delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),HomeTestimonialController.deleteHomeTestimonial)





export default router