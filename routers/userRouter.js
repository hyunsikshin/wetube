import express from 'express';
import routes from '../routes';
import {
  edit_profile,
  change_password,
  users_detail,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.change_password, change_password);
userRouter.get(routes.users_detail, users_detail);

export default userRouter;
