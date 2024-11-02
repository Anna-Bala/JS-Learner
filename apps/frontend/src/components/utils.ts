export const convertLevelScore = (levelScore: number) => {
  const result = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    if (levelScore - (i + 1) > -1) {
      result[i] = 1;
    }
  }

  return result;
};

const evaluateChallange = (codeBlocksInCorrectOrder: string[]) => {
  let result = true;
  const scriptBlocksOnMap = Array.from(document.querySelectorAll('.script-block')).filter(
    scriptSlot => !scriptSlot.classList.contains('-static'),
  );

  scriptBlocksOnMap.forEach((scriptBlock, index) => {
    if (scriptBlock.innerHTML !== codeBlocksInCorrectOrder[index]) result = false;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    if (scriptBlock.innerText === codeBlocksInCorrectOrder[index]) result = true;
  });

  return result;
};

export const handleRunJSCode = (
  codeBlocksInCorrectOrder: string[],
  handleScoreChange: (action: 'jsRun' | 'useAI' | 'pass10Minutes') => void,
  setIsCorrectlySolved: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  toggleIsRunCodeModalOpen: () => void,
) => {
  const allCodeBlocks = document.getElementsByClassName('script-block');
  const jsCode = Array.from(allCodeBlocks)
    .map(codeBlock => codeBlock.innerHTML)
    .join('');

  const jsCodeFormatted = jsCode
    .replaceAll('document', "document.getElementById('resultIframe').contentWindow.document")
    .replaceAll('&lt;', '<');

  try {
    eval(jsCodeFormatted);
  } catch {
    handleScoreChange('jsRun');
  } finally {
    const isCorrect = evaluateChallange(codeBlocksInCorrectOrder);
    setIsCorrectlySolved(isCorrect);
    toggleIsRunCodeModalOpen();
  }
};
