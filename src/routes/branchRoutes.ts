import express, {Router} from 'express'
import { multer, storage } from '../middleware/multerMiddleware'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import errorHandler from '../service/catchAsyncError'
import BranchController from '../controllers/branchController'

const router:Router = express.Router()
const upload = multer({storage :storage})

router.route('/').post(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.superAdmin),upload.single('systemLogo'),errorHandler(BranchController.addBranch))
.get(BranchController.getBrannch)
router.route('/:id').patch(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.superAdmin),upload.single('systemLogo'),errorHandler(BranchController.updateBranch)).
delete(authMiddleware.isAuthenticated, authMiddleware.restrictTo(Role.Admin),BranchController.deleteBranch).get( authMiddleware.isAuthenticated,BranchController.getSingleBranch)



export default router