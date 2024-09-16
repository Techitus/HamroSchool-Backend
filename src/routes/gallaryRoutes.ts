import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import settingController from '../controllers/settingControllers'
import gallaryController from '../controllers/gallaryController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('gallaryImage'),
errorHandler(gallaryController.addGallary)).get(gallaryController.getGallary)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('gallaryImage'),
errorHandler(gallaryController.updateGallary)).delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),gallaryController.deleteGallary)



export default router