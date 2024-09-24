import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import PageController from '../controllers/pageController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('banner'),errorHandler(PageController.addPage))
.get(PageController.getPage)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('banner'),errorHandler(PageController.updatePage)).
delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin), PageController.deletePage)

export default router