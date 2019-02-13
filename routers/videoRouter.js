import express from 'express';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send('video'));
videoRouter.get(routes.upload, (req, res) => res.send('upload'));
videoRouter.get(routes.videos_detail, (req, res) => res.send('video detail'));
videoRouter.get(routes.edit_video, (req, res) => res.send('edit video'));
videoRouter.get(routes.delete_video, (req, res) => res.send('delete video'));

export default videoRouter;
