export const API_BASE = 'https://js-learner-backend.vercel.app/v1';
// export const API_BASE = 'http://localhost:3000/v1';
export const CHECK_API_URL = `${API_BASE}/auth/check`;
export const LOGIN_API_URL = `${API_BASE}/auth/login`;
export const USERS_API_URL = `${API_BASE}/users`;
export const LEVELS_API_URL = `${API_BASE}/levels`;
export const LEVEL_SAVE_API_URL = `${API_BASE}/level-save`;
export const COMPLETE_TUTORIAL_API_URL = (id: number) => `${API_BASE}/users/${id}/tutorial`;
