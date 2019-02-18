import { videos } from '../db';

export const home = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};

export const search = (req, res) => {
  console.log(req.query);
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy });
};

export const upload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' });

export const videos_detail = (req, res) =>
  res.render('videos_detail', { pageTitle: 'Video Detail' });

export const edit_video = (req, res) =>
  res.render('edit_video', { pageTitle: 'Edit Video' });

export const delete_video = (req, res) =>
  res.render('delete_video', { pageTitle: 'Delete Video' });
