import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import sliderController from '../controllers/sliderController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('sliderImage'),errorHandler(sliderController.addSlider)).get(sliderController.fetchSlider)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('sliderImage'),errorHandler(sliderController.updateSlider)).delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),sliderController.deleteSlider)



export default router