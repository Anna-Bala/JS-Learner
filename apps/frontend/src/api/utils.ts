import { CHECK_API_URL } from './constants';

export const checkAuthentication = () => {
  fetch(CHECK_API_URL, {
    method: 'GET',
    credentials: 'include',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('User not authenticated');
      }
    })
    .then(() => {
      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    })
    .catch(() => {
      window.history.pushState({}, '', '/login');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    });
};
