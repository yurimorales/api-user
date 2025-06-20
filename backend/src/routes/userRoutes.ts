import express, { Router } from 'express';
import userController from '../controllers/UserController';

const router: Router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

export default router;