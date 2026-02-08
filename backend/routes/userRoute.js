import express from 'express';
import { loginUser, registerUser, adminLogin, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import authUser from '../middleware/auth.js'; // You need authentication to see profile

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// --- ADD THESE ROUTES ---
userRouter.get('/get-profile', authUser, getUserProfile); // GET method
userRouter.post('/update-profile', authUser, updateUserProfile); // POST method

export default userRouter;