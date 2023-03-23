import express from 'express';

import { getAllUsers, registerUser, loginUser } from '../controllers/AuthenticationController.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(registerUser);
router.route('/login').post(loginUser);


export default router;