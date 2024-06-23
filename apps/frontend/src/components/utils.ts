export const convertLevelScore = (levelScore: number) => {
  const result = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    if (levelScore - (i + 1) > -1) {
      result[i] = 1;
    }
  }

  return result;
};
