import express, {Router} from 'express'
import authMiddleware, { Role } from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import menuController from '../controllers/menuController'
const router:Router = express.Router()

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(menuController.addMenu)).get(menuController.fetchAllMenus)

router.route('/:id').get(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),menuController.fetchSingleMenu).patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),errorHandler(menuController.editMenu)).delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),menuController.deleteMenu)





export default router