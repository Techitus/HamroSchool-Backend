import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import ServiceController from '../controllers/serviceController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('serviceIcon'),errorHandler(ServiceController.addSercive)).get(ServiceController.getService)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('serviceIcon'),errorHandler(ServiceController.updateService)).
delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),ServiceController.deleteService)



export default router