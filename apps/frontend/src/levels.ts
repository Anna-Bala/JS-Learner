export default [
  {
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
    description: `JavaScript (JS) is a versatile programming language primarily used for creating interactive elements and dynamic content on websites. Thanks to it we can change element's content, CSS styling or HTML attribute values. But first we need to know which HTML element from DOM tree should be manipulated. One of many JavaScript methods to "find" a HTML element is getElementById(id) where "id" represents string attribute.\n\n\nYour challange is to:`,
    htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <span id="span-element">Change my text</span>\n   <p id="paragraph-element">Change my font size</p>\n   <img alt="Example image" id="image-element"></img>\n </body>\n</html>`,
    resultIFrameSrcDoc: `<span id="span-element">Change my text</span><p id="paragraph-element">Change my font size</p><img alt="Example image" id="image-element"></img>`,
    scriptSlots: [
      ['document.', '', '.innerHTML = ', '', ';'],
      ['document.', '', '', '', '=', '', ';'],
      ['', '', '', '=', '', ';'],
    ],
  },
];
