import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import testimonialController from '../controllers/testimonialController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('testimonialImage'),errorHandler(testimonialController.addTestimonial)).get(testimonialController.fetchTestimonial)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('testimonialImage'),errorHandler(testimonialController.updateTestimonial)).delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),testimonialController.deleteTestimonial)



export default router