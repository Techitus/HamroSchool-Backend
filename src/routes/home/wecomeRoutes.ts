import express, {Router} from 'express'
import { multer,storage } from '../../middleware/multerMiddleware'
import authMiddleware, { Role } from '../../middleware/authMiddleware'
import errorHandler from '../../service/catchAsyncError'
import WelcomeController from '../../controllers/homecomtrollers/welcomeController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('image'),errorHandler(WelcomeController.postWelcome)).get(WelcomeController.getWelcome)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('image'),errorHandler(WelcomeController.updateWelcome)).
delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin), WelcomeController.deleteWelcome)



export default router