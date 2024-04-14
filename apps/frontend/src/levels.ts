export type TQuestion = {
  chat: string;
  prompt: string;
};

export type TLevel = {
  evaluateChallange: () => boolean;
  challanges: string[];
  codeBlocks: string[];
  codeBlocksInCorrectOrder: string[];
  description: string;
  htmlSourceCode: string;
  resultIFrameSrcDoc: string;
  scriptSlots: string[][];
  challangeQuestions: TQuestion[];
};

const levels: TLevel[] = [
  {
    evaluateChallange: () => {
      const iFrameDocument = (document.getElementById('resultIframe') as HTMLIFrameElement)?.contentWindow?.document;
      if (iFrameDocument === undefined) return false;

      const paragraphElement = iFrameDocument.getElementById('paragraph-element');
      const spanElement = iFrameDocument.getElementById('span-element');
      const imageElement = iFrameDocument.getElementById('image-element') as HTMLImageElement;

      const conditions = [
        spanElement?.innerHTML === 'JS is awesome!',
        paragraphElement?.style.fontSize === '24px',
        imageElement?.alt === 'Missing image',
      ];

      return conditions.every(condition => condition === true);
    },
    challanges: [
      'Change text inside <span> element from "Change my text" to "JS is awesome!"',
      'Change the font size of the <p> element from "16px" to "24px"',
      'Replace the "alt" attribute content for the <img> element to "Missing image"',
    ],
    codeBlocks: [
      '.alt',
      '.fontSize',
      'getElementById("paragraph-element")',
      'document.',
      'getElementById("span-element")',
      '.style',
      '"JS is awesome!"',
      '"24px"',
      'getElementById("image-element")',
      '"Missing image"',
    ],
    codeBlocksInCorrectOrder: [
      'getElementById("span-element")',
      '"JS is awesome!"',
      'getElementById("paragraph-element")',
      '.style',
      '.fontSize',
      '"24px"',
      'document.',
      'getElementById("image-element")',
      '.alt',
      '"Missing image"',
    ],
    description: `JavaScript (JS) is a versatile programming language primarily used for creating interactive elements and dynamic content on websites. Thanks to it we can change element's content, CSS styling or HTML attribute values. But first we need to know which HTML element from DOM tree should be manipulated. One of many JavaScript methods to "find" a HTML element is getElementById(id) where "id" represents string attribute.\n\n\nYour challange is to:`,
    htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <span id="span-element">Change my text</span>\n   <p id="paragraph-element">Change my font size</p>\n   <img alt="Example image" id="image-element"></img>\n </body>\n</html>`,
    resultIFrameSrcDoc: `<span id="span-element">Change my text</span><p id="paragraph-element">Change my font size</p><img alt="Example image" id="image-element"></img>`,
    scriptSlots: [
      ['document.', '', '.innerHTML = ', '', ';'],
      ['document.', '', '', '', '=', '', ';'],
      ['', '', '', '=', '', ';'],
    ],
    challangeQuestions: [
      {
        chat: 'Tell me more about "getElementById(id)" method',
        prompt: "Explain the functionality and usage of the 'getElementById(id)' method in HTML and JavaScript.",
      },
      {
        chat: 'What is an attribute in HTML?',
        prompt: "Define the concept of an 'attribute' in HTML and its significance.",
      },
      {
        chat: 'What does ".document" refers to?',
        prompt: "Explain the significance and purpose of the '.document' property in JavaScript.",
      },
    ],
  },
];

export default levels;
