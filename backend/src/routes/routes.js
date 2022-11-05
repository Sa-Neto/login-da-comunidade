import {Router} from 'express';
import userController from '../controller/UserController';
const router = new Router;

router.post('/register',userController.register);
router.post('/login', userController.login);

export default router