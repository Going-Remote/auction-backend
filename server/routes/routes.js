import { Router } from 'express'
const router = Router()
import { catchErrors } from '../handlers/errorHandler'
import usercontroller from '../controller/usercontroller'

router.get('/api/users', catchErrors(usercontroller.getAllUser))
router.get('/api/user/:id', catchErrors(usercontroller.getSingleUser))
router.delete('/api/user/del/:id', catchErrors(usercontroller.deleteUser))

export default router;