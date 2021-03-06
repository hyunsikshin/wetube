import express from 'express';
import routes from '../routes';
import {
  upload,
  videos_detail,
  edit_video,
  delete_video,
} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videos_detail, videos_detail);
videoRouter.get(routes.edit_video, edit_video);
videoRouter.get(routes.delete_video, delete_video);

export default videoRouter;
