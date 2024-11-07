import { CHECK_API_URL, LEVEL_SAVE_API_URL, LEVELS_API_URL } from './constants';

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
      // mixpanel.identify('USER_ID');

      // mixpanel.people.set({
      //   $name: 'Jane Doe',
      // }); //TO DO - change!

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

export const getAllUsersScore = async () => {
  return fetch(LEVEL_SAVE_API_URL, {
    method: 'GET',
  });
};

export const getLevelsWithScore = async (userId: string) => {
  return fetch(`${LEVEL_SAVE_API_URL}/${userId}`, {
    method: 'GET',
  });
};

export const getAllLevels = async () => {
  return fetch(LEVELS_API_URL, {
    method: 'GET',
  });
};

export const updateLevelScore = async ({ levelNameDb, score }: { levelNameDb: string; score: number }) => {
  const userId = Number(localStorage.getItem('userId'));
  let levelId = '';

  await getAllLevels()
    .then(response => response.json())
    .then(responseData => {
      levelId = responseData.find((level: { id: string; name: string }) => level.name === levelNameDb).id;
    });

  const data = {
    userId,
    levelId,
    score,
  };

  await fetch(LEVEL_SAVE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
