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
    if (scriptBlock.innerText === codeBlocksInCorrectOrder[index]) result = true;
  });

  return result;
};

export const handleRunJSCode = (codeBlocksInCorrectOrder: string[]) => {
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
    window.alert('WRONG FORMAT!');
  } finally {
    const result = evaluateChallange(codeBlocksInCorrectOrder);
    if (result) window.alert('CORRECT!');
    else window.alert('INCORRECT :(');
  }
};
