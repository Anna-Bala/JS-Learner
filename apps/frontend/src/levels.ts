export type TQuestion = {
  chat: string;
  prompt: string;
};

export type TLevel = {
  challanges: string[];
  codeBlocks: string[];
  codeBlocksInCorrectOrder: string[];
  description: string;
  htmlSourceCode: string;
  name: string;
  resultIFrameSrcDoc: string;
  score: number;
  scriptSlots: string[][];
  challangeQuestions: TQuestion[];
};

const base: TLevel = {
  challanges: ['', '', ''],
  codeBlocks: [''],
  codeBlocksInCorrectOrder: [''],
  description: ``,
  htmlSourceCode: ``,
  name: '',
  resultIFrameSrcDoc: ``,
  score: 0,
  scriptSlots: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  challangeQuestions: [
    {
      chat: '',
      prompt: '',
    },
  ],
};

const L1Fundamentals: TLevel = {
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
  name: 'Finding elements by the ID attribute',
  resultIFrameSrcDoc: `<span id="span-element">Change my text</span><p id="paragraph-element">Change my font size</p><img alt="Example image" id="image-element"></img>`,
  score: 2,
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
};

const L2Fundamentals: TLevel = {
  challanges: [
    'Change text inside <p> element from "I’m a text inside the HTML content" to "I can be changed"',
    'Display an alert that will say “I’m an built-in browser alert, you will have to close me”',
    'Write into the browser console this text: “Hello World!”.',
  ],
  codeBlocks: [
    'console',
    '"I can be changed"',
    '`I’m an built-in browser alert, you will have to close me`)',
    '.log("Hello World!")',
    '.alert(',
    'document.',
  ],
  codeBlocksInCorrectOrder: [
    'document.',
    '"I can be changed"',
    '.alert(',
    '`I’m an built-in browser alert, you will have to close me`)',
    'console',
    '.log("Hello World!")',
  ],
  description: `There are few ways to display the result of the JavaScript code. We can directly modify the HTML content or use the “window.alert()” or “console.log()” methods. \n\n “window.alert()” uses browser built-in functionalities to display a simple dialog with optional message. \n\n “console.log()” is a method that prints the result of the JavaScript code into the browser console. To open the browser console click right mouse button and from the context menu choose “Inspect” and go to “Console” tab, here you will see all “console.log()” output. This is a very common way to debug in JavaScript. \n\n\nYour challange is to:`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="text">I’m a text inside the HTML content</p>\n </body>\n</html>`,
  name: 'Writing Output',
  resultIFrameSrcDoc: `<p id="text">I’m a text inside the HTML content</p>`,
  score: 0,
  scriptSlots: [
    ['', 'getElementById("text")', '.innerHTML = ', '', ';'],
    ['window', '', '', ';'],
    ['', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Tell me more about methods in JavaScript',
      prompt: 'In short and simple way define methods in JavaScript',
    },
    {
      chat: 'What other methods does Console API provide?',
      prompt: 'What are the most popular methods from JavaScript Console API besides the log()?',
    },
    {
      chat: 'What does "window" refer to?',
      prompt: 'In short and simple way define window interface and explain what does it refer to',
    },
  ],
};

const L3Fundamentals: TLevel = {
  challanges: [
    'Add a single line comment to the first line of code.',
    'Add multi-line comment to the second line of code.',
    'Note how commented code does not execute.',
  ],
  codeBlocks: ['//This line replaces text content inside the element with "paragraph" id', '*/', '/*'],
  codeBlocksInCorrectOrder: [`//This line replaces text content inside the element with "paragraph" id`, '/*', '*/'],
  description: `Comments are mostly used in two cases: adding additional information about the code to make it more clear for yourself and others or disabling a specific part of the code so that it does not execute.\n\nThere are two types of comments: single line and multi-line comments. Single line comments start with //.\nMulti-line comments start with /* and end with */.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="paragraph">I’m a text inside the HTML content</p>\n </body>\n</html>`,
  name: 'Comments',
  resultIFrameSrcDoc: `<p id="paragraph">Comments provide extra context</p>`,
  score: 0,
  scriptSlots: [
    ['document.', 'getElementById("paragraph")', '.innerHTML = "Comments are great"', ';', ''],
    ['', 'When you want to provide some extra content about your code you can use multiline comments', ''],
    ['/*', 'window', '.alert("I will not show")', ';', '*/'],
  ],
  challangeQuestions: [],
};

const L4Fundamentals: TLevel = {
  challanges: [
    'Declare two constants named - x and y, First one x will store number value 5 and second one y will store 10.',
    'Declare a variable by using the var keyword named oldSchool, it’s value should be a text value “JavaScript became much safer in 2015”.',
    'Declare a let variable named changeMe that will have value 0 assigned when declared, then change its value to 1.',
  ],
  codeBlocks: ['=', 'const', '10', 'var', 'y', 'oldSchool', '0', 'changeMe', 'let'],
  codeBlocksInCorrectOrder: ['const', '=', 'y', '10', 'var', 'oldSchool', 'let', '0', 'changeMe'],
  description: `You can think of variables as containers for storing data. There are 3 most common ways of declaring variables, it’s by using keywords var, let and const. The var keyword is becoming a deprecated way of declaring variables and should only be used in code written for very old browsers.\n\nlet and const keywords were introduced to JavaScript in 2015 and became a standard for writing a good and maintainable code. The key difference between const and let is that when we declare a const variable we cannot change its value or type.\nWe should only use the var keyword for declaring a variable when we want to support old browsers.\n\n\nYour challenge is to:`,
  htmlSourceCode: ``,
  name: 'Variables',
  resultIFrameSrcDoc: ``,
  score: 0,
  scriptSlots: [
    ['', 'x', '', '5', ',', '', '=', '', ';'],
    ['', '', '=', ' “JavaScript became much safer in 2015”', ';'],
    ['', 'changeMe', '=', '', ';'],
    ['', '=', '1', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Why const and let became the most popular way of declaring a variable?',
      prompt:
        'Explain in short and simple way why did the let and const became the most popular way of declaring a variable in modern JavaScript',
    },
    {
      chat: 'Which browsers do not support let and const keywords?',
      prompt:
        'Explain in short and simple way which browsers have problem in supporting the let and const keywords in JavaScript',
    },
  ],
};

const L5Fundamentals: TLevel = {
  challanges: ['Assign the correct results for given equations.'],
  codeBlocks: ['++', 'let', '**', '+', '%', '*', 'const'],
  codeBlocksInCorrectOrder: ['const', 'let', '+', '*', '**', '%', '++'],
  description: `JavaScript arithmetic operators are used to perform arithmetic on numbers (literals or variables). Here are all arithmetic operators: addition +, subtraction -, multiplication *, exponentiation **, division /, modulus %, increment ++, decrement --\n\nFirst five operators are pretty straightforward, they work just like in math. Modulus is also taken from mathematics but for a quick reminder it produces the division remainder. Increment operator increments numbers by 1 and decrement operator decrements numbers also by 1.\n\nJust like in school mathematics multiplication and division operations have higher precedence than addition and subtraction and the precedence can be changed by using parentheses.\n\n\nYour challenge is to:`,
  htmlSourceCode: ``,
  name: 'Arithmetic Operators',
  resultIFrameSrcDoc: ``,
  score: 0,
  scriptSlots: [
    ['', 'x', '=', '5', ';'],
    ['const', 'y', '=', '2', ';'],
    ['', 'z', ';'],
    ['z', '=', 'x', '', 'y', '', '(x - y)', ';', '//z should be equal to 11'],
    ['z', '=', 'x', '', '2', ';', '//z should be equal to 25'],
    ['z', '=', '10', '', '2', ';', '//z should be equal to 0'],
    ['z', '=', 'x', '', ';', '//z should be equal to 6'],
  ],
  challangeQuestions: [],
};

const fundamentals: TLevel[] = [L1Fundamentals, L2Fundamentals, L3Fundamentals, L4Fundamentals, L5Fundamentals];

const levels: TLevel[] = [...fundamentals];

export default levels;
