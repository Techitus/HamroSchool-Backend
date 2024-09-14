import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import galCatController from '../controllers/galCatController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(galCatController.addGallaryCategory)).get(galCatController.getGallaryCategory)

router.route('/:id')
.patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(galCatController.updateGallaryCategory))
.delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),galCatController.deleteGallaryCategory)





export default router