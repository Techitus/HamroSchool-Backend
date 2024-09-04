import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import settingController from '../controllers/settingControllers'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('logo'),errorHandler(settingController.addSetting)).get(settingController.fetchSetting)
router.route('/:id').get(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),settingController.fetchSingleSetting)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('logo'),errorHandler(settingController.updateSetting)).delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),settingController.deleteSetting)



export default router