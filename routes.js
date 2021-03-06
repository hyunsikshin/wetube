// GLOBAL
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

// USERS

const USERS = '/users';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';
const USERS_DETAIL = '/:id';

// VIDEOS

const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDOES_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,
  users_detail: USERS_DETAIL,
  videos: VIDEOS,
  upload: UPLOAD,
  videos_detail: VIDOES_DETAIL,
  edit_video: EDIT_VIDEO,
  delete_video: DELETE_VIDEO,
};

export default routes;
