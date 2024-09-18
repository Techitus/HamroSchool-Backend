import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import newsController from '../controllers/newsController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('newsImage'),errorHandler(newsController.addNews)).get(newsController.getNews)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('newsImage'),errorHandler(newsController.updateNews)).
delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin), newsController.deleteNews).get(newsController.getSingleNews)



export default router