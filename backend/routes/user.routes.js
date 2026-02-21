import {Router} from 'express';
import * as userControllers from '../controllers/user.controllers.js';
import { body } from 'express-validator';3

const router = Router();

router.post('/register',
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    
    userControllers.createUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    userControllers.loginUserController);
export default router;