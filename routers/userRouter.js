import express from 'express';
import routes from '../routes';
import {
  users,
  users_detail,
  edit_profile,
  change_password,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.users_detail, users_detail);
userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.change_password, change_password);

export default userRouter;
