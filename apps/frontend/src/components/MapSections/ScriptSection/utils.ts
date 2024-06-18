export const evaluateChallange = (codeBlocksInCorrectOrder: string[]) => {
  let result = true;
  const scriptBlocksOnMap = Array.from(document.querySelectorAll('.script-block')).filter(
    scriptSlot => !scriptSlot.classList.contains('-static'),
  );

  scriptBlocksOnMap.forEach((scriptBlock, index) => {
    if (scriptBlock.innerHTML !== codeBlocksInCorrectOrder[index]) result = false;
  });

  return result;
};
