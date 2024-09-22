import express, {Router} from 'express'
import { multer,storage } from '../../middleware/multerMiddleware'
import authMiddleware, { Role } from '../../middleware/authMiddleware'
import errorHandler from '../../service/catchAsyncError'
import WelcomeController from '../../controllers/homecomtrollers/welcomeController'
import TeacherController from '../../controllers/homecomtrollers/teacherControllers'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('image'),errorHandler(TeacherController.addTeacher)).get(TeacherController.getTeacher)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),upload.single('image'),errorHandler(TeacherController.updateTeacher)).
delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin), TeacherController.deleteTeacher)



export default router