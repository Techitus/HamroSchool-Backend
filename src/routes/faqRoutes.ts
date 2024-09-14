import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import FaqController from '../controllers/faqController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(FaqController.addFaq)).get(FaqController.getFaq)

router.route('/:id')
.patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(FaqController.updateFaq))
.delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),FaqController.deleteFaq)





export default router