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
  dbName: string;
  score?: number;
  resultIFrameSrcDoc: string;
  scriptSlots: string[][];
  challangeQuestions: TQuestion[];
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
  description: `JavaScript (JS) is a versatile programming language primarily used for creating interactive elements and dynamic content on websites.\n\nThanks to it we can change element's content, CSS styling or HTML attribute values. But first we need to know which HTML element from DOM tree should be manipulated.\n\nOne of many JavaScript methods to "find" a HTML element is getElementById(id) where "id" represents string attribute.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <span id="span-element">Change my text</span>\n   <p id="paragraph-element">Change my font size</p>\n   <img alt="Example image" id="image-element"></img>\n </body>\n</html>`,
  name: 'Finding elements by the ID',
  dbName: 'finding_elements_by_the_id',
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
  description: `There are few ways to display the result of the JavaScript code. We can directly modify the HTML content or use the “window.alert()” or “console.log()” methods. \n\n “window.alert()” uses browser built-in functionalities to display a simple dialog with optional message. \n\n “console.log()” is a method that prints the result of the JavaScript code into the browser console. To open the browser console click right mouse button and from the context menu choose “Inspect” and go to “Console” tab, here you will see all “console.log()” output. This is a very common way to debug in JavaScript.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="text">I’m a text inside the HTML content</p>\n </body>\n</html>`,
  name: 'Writing Output',
  dbName: 'writing_output',
  resultIFrameSrcDoc: `<p id="text">I’m a text inside the HTML content</p>`,
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
  description: `Comments are mostly used in two cases: adding additional information about the code to make it more clear for yourself and others or disabling a specific part of the code so that it does not execute.\n\nThere are two types of comments: single line and multi-line comments. Single line comments start with //.\nMulti-line comments start with /* and end with */`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="paragraph">I’m a text inside the HTML content</p>\n </body>\n</html>`,
  name: 'Comments',
  dbName: 'comments',
  resultIFrameSrcDoc: `<p id="paragraph">Comments provide extra context</p>`,
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
  codeBlocks: ['=', 'const ', '10', 'var ', 'y', 'oldSchool', '0', 'changeMe', 'let '],
  codeBlocksInCorrectOrder: ['const ', '=', 'y', '10', 'var ', 'oldSchool', 'let ', '0', 'changeMe'],
  description: `You can think of variables as containers for storing data. There are 3 most common ways of declaring variables, it’s by using keywords var, let and const. The var keyword is becoming a deprecated way of declaring variables and should only be used in code written for very old browsers.\n\nlet and const keywords were introduced to JavaScript in 2015 and became a standard for writing a good and maintainable code. The key difference between const and let is that when we declare a const variable we cannot change its value or type.\nWe should only use the var keyword for declaring a variable when we want to support old browsers.`,
  htmlSourceCode: ``,
  name: 'Variables',
  dbName: 'variables',
  resultIFrameSrcDoc: ``,
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
  codeBlocks: ['++', 'let ', '**', '+', '%', '*', 'const '],
  codeBlocksInCorrectOrder: ['const ', 'let ', '+', '*', '**', '%', '++'],
  description: `JavaScript arithmetic operators are used to perform arithmetic on numbers (literals or variables). Here are all arithmetic operators: addition +, subtraction -, multiplication *, exponentiation **, division /, modulus %, increment ++, decrement --\n\nFirst five operators are pretty straightforward, they work just like in math. Modulus is also taken from mathematics but for a quick reminder it produces the division remainder. Increment operator increments numbers by 1 and decrement operator decrements numbers also by 1.\n\nJust like in school mathematics multiplication and division operations have higher precedence than addition and subtraction and the precedence can be changed by using parentheses.`,
  htmlSourceCode: ``,
  name: 'Arithmetic Operators',
  dbName: 'arithmetic_operators',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['', 'x', '=', '5', ';'],
    ['const ', 'y', '=', '2', ';'],
    ['', 'z', ';'],
    ['z', '=', 'x', '', 'y', '', '(x - y)', ';', '//z should be equal to 11'],
    ['z', '=', 'x', '', '2', ';', '//z should be equal to 25'],
    ['z', '=', '10', '', '2', ';', '//z should be equal to 0'],
    ['z', '=', 'x', '', ';', '//z should be equal to 6'],
  ],
  challangeQuestions: [],
};

const L1DataTypesAndFunctions: TLevel = {
  challanges: [
    `Assign a proper value to variable x so that it's type is String and then reassign it so that it changes to Number.`,
    `Declare a constant named hasDog so that it's type is Boolean.`,
    `Provide a correct value for typeof operator used on the a variable so that it's return type is “string”.`,
  ],
  codeBlocks: ['"', '"', '4', 'Hello World', 'let ', 'const ', 'true', '"John Doe"'],
  codeBlocksInCorrectOrder: ['let ', '"', 'Hello World', '"', '4', 'true', 'const ', '"John Doe"'],
  description: `There are eight data types in JavaScript: String, Number, Boolean, Bigint, Undefined, Null, Symbol, Object.\nThe object data type can be a built-in object, which are: objects, arrays, dates, promises, maps, sets and more or an user defined object.\nJavaScript types are dynamic which means that one variable can be reassigned to keep a different data type.\n\nLet’s focus on the first three types. You will learn more about other data types in further levels. String is simply a text and it is written with single (‘) or double quotes (“).\nWhen it comes to Numbers in JavaScript an important thing about them is that all of them are decimal numbers.\nBooleans are very simple data type, they can only have two values: true or false, they are mostly used in writing conditions in code.\n\nJavaScript provides an operator typeof that returns the type of a variable or an expression.`,
  htmlSourceCode: ``,
  name: 'Basic principles of data types',
  dbName: 'basic_principles_of_data_types',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['', 'x', '=', '', '', '', ';'],
    ['x', '=', '', ';'],
    ['const ', 'hasDog', '=', '', ';'],
    ['', 'a', '=', '', ';'],
    ['window', '.', 'alert', '(typeof a)', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Tell me more about BigInit data type',
      prompt: 'Explain in short and simple way the BigInit data type in JavaScript',
    },
    {
      chat: 'Elaborate about built-in-objects',
      prompt: 'Explain in short and simple way what does built-in-object mean in JavaScript',
    },
  ],
};

const L2DataTypesAndFunctions: TLevel = {
  challanges: [
    'Assign correct comments for typeof operators for both null and undefined.',
    'Modify <p> element so that it becomes invisible.',
  ],
  codeBlocks: ['document', 'undefined', 'null', 'null'],
  codeBlocksInCorrectOrder: ['null', 'undefined', 'document', 'null'],
  description: `Differing between null and undefined might be quite confusing at the beginning, but actually it’s not that hard.\nWhen we declare a variable without any value then its value becomes undefined and its type also becomes undefined.\nOn the other hand when we assign a null to a variable then this variable is defined and what we tell our code is that the variable is “empty”. null gives us a way of indicating that a given variable should not have any value.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="text">You can modify my content so that I become invisible</p>\n </body>\n</html>`,
  name: 'Null and Undefined',
  dbName: 'null_and_undefined',
  resultIFrameSrcDoc: `<p id="text">You can modify my content so that I become invisible</p>`,
  scriptSlots: [
    ['typeof ', '', ';', '//Returns "object"'],
    ['typeof ', '', ';', '//Returns "undefined"'],
    ['', '.getElementById("text")', '.innerHTML = ', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Why is it so important to know a difference between null and undefined?',
      prompt:
        'Explain in short and simple way why is it so important to know a difference between null and undefined in JavaScript. Do not explain what null and undefined are.',
    },
    {
      chat: 'Is null a valid value for arithmetic operations?',
      prompt: 'Explain in short and simple way why null is not a valid arithmetic operator in JavaScript',
    },
  ],
};

const L3DataTypesAndFunctions: TLevel = {
  challanges: [
    'Declare a function that will invoke an alert that says “My first function!” and name it runAlert.',
    'Declare a function that will change text inside <span> element from “Repetitive code is not a good practice” to “Functions are awesome!” and name it modifyText.',
    'Invoke only the modifyText function.',
  ],
  codeBlocks: ['modifyText()', '{', '}', 'function ', 'window.alert("My first function!")', 'runAlert()'],
  codeBlocksInCorrectOrder: ['runAlert()', 'window.alert("My first function!")', 'function ', '{', '}', 'modifyText()'],
  description: `Functions are like wrappers where you can put any code you want to. Why you might ask?\n\nImagine that you have a piece of code that does the same thing in your program, without function you would have to copy and paste the same lines of code around your program. Not only does that make your code messy and hard to maintain but it’s an easy way to allow some bugs to slip into your algorithm.\n\nThat’s where functions come in handy, you move your redundant piece of code into a function, give it a good and understandable name and then call (invoke) it wherever you need it in your code.\n\nWhen it comes to syntax it is pretty straightforward, a JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). The code to be executed, by the function, is placed inside curly brackets: {}\n\nTo run an already declared function you simply have to write its name followed by the () operator which will invoke it.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <span id="message">Repetitive code is not a good practice</span>\n </body>\n</html>`,
  name: 'Simple functions',
  dbName: 'simple_functions',
  resultIFrameSrcDoc: `<span id="message">Repetitive code is not a good practice</span>`,
  scriptSlots: [
    ['function ', '', '{', '', '}', ';'],
    ['', 'modifyText()', '', 'document.getElementById("message").innerHTML = ', '"Functions are awesome!"', '', ';'],
    ['', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Which naming convention is the most popular when it comes to functions',
      prompt: 'Explain which naming convention is the most popular one for functions in JavaScript and why.',
    },
    {
      chat: 'When are functions invoked?',
      prompt: 'Explain in short and simple way when functions in JavaScript are invoked.',
    },
  ],
};

const L4DataTypesAndFunctions: TLevel = {
  challanges: [
    'Declare a function named modifyParagraph that will receive one argument named text, this function should change text inside <p> element.',
    'Invoke modifyParagraph function so that text changes from "Change my text" to "Functions are pretty neat!"',
  ],
  codeBlocks: [
    '("Functions are pretty neat!")',
    'function ',
    '}',
    '(text)',
    'document.getElementById("info").innerHTML =',
  ],
  codeBlocksInCorrectOrder: [
    'function ',
    '(text)',
    'document.getElementById("info").innerHTML =',
    '}',
    '("Functions are pretty neat!")',
  ],
  description: `What if there are two fragments of code that do almost the same thing in our program? We could still wrap this code into a function but we need a way to differ between specific use cases. That’s where function parameters come in handy.\n\nFunction parameters are listed inside the parentheses () where we declare function, inside the function the parameters behave as local variables, which means that those variables are only usable inside the function. You can include as many parameters for function as you want.\n\nWhen we invoke a function the values that we pass to it are called arguments.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="info">Change my text</p>\n </body>\n</html>`,
  name: 'Functions with parameters',
  dbName: 'functions_with_parameters',
  resultIFrameSrcDoc: `<p id="info">Change my text</p>`,
  scriptSlots: [
    ['', 'modifyParagraph', '', '{', '', 'text', '', ';'],
    ['modifyParagraph', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Tell me more about local variables',
      prompt: 'Explain in short and simple way how local variables work in JavaScript',
    },
    {
      chat: 'Why variables inside functions are called arguments?',
      prompt: 'Explain in short and simple way why variables inside functions are called arguments in JavaScript',
    },
  ],
};

const L5DataTypesAndFunctions: TLevel = {
  challanges: [
    'Declare a function named additionOfTwoNumbers that will receive two arguments x and y and will return a sum of those two number values.',
    'Invoke the additionOfTwoNumbers function and assign its result to the resultOfAddition variable. Argument x should have value 10 and argument y value 5.',
    'Display the result of additionOfTwoNumbers function in <span> element by replacing the “missing result” text.',
  ],
  codeBlocks: ['const ', 'function ', '(x, y)', 'return x + y', 'resultOfAddition', 'additionOfTwoNumbers(10, 5)'],
  codeBlocksInCorrectOrder: [
    'function ',
    '(x, y)',
    'return x + y',
    'const ',
    'additionOfTwoNumbers(10, 5)',
    'resultOfAddition',
  ],
  description: `Return statements are used inside functions. Functions usually do some work and then give back a result.\n\nThis result is called the return value, and it's sent back to wherever the function was invoked from.\n\nWhen JavaScript hits a return statement inside a function, it stops running the code in that function right there.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <span id="result">missing result</span>\n </body>\n</html>`,
  name: 'Return statement',
  dbName: 'return_statement',
  resultIFrameSrcDoc: `<span id="result">missing result</span>`,
  scriptSlots: [
    ['', 'additionOfTwoNumbers', '', '{', '', '}', ';'],
    ['', 'resultOfAddition', '=', '', ';'],
    ['document.getElementById("result").innerHTML =', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'What kind of data types can I return from function?',
      prompt: 'Explain in short and simple what kind of data types can JavaScript function return',
    },
    {
      chat: 'Can functions have multiple return statements?',
      prompt: 'Explain in short and simple way why functions can have multiple return statements JavaScript',
    },
  ],
};

const L6DataTypesAndFunctions: TLevel = {
  challanges: [
    'Add string property named color to given car object and assign proper value to it.',
    'Add a number property named weight to the given car object and assign proper value to it.',
    'Add one method called drive, this method should change <img> element styling so that “display” is set to “block”.',
    'Invoke drive method.',
  ],
  codeBlocks: [
    'car',
    'drive()',
    'color',
    'weight',
    '"red"',
    '850',
    'function() { document.getElementById("car").style.display = "block" }',
    '.',
  ],
  codeBlocksInCorrectOrder: [
    'color',
    '"red"',
    'car',
    'weight',
    '850',
    '.',
    'function() { document.getElementById("car").style.display = "block" }',
    'drive()',
  ],
  description: `A JavaScript object is a collection of key-value pairs, where the keys (also called properties) have assigned values to them, those values can be any type of data (numbers, strings, functions, other objects, etc.). It's like a container that holds related data and functionality.\n\nJust like in real life we have all kinds of objects, for example a car. Cars can have different properties like color, model or weight. Cars also have different functionalities, they can drive, break or start, in JavaScript functions inside objects are called methods.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <img alt="car" src="/car.png" id="car" width="180" style="display:none"/>\n </body>\n</html>`,
  name: 'Objects',
  dbName: 'objects',
  resultIFrameSrcDoc: `<img alt="car" src="/car.png" id="car" width="180" style="display:none"/>`,
  scriptSlots: [
    ['const ', 'car', '=', '{}', ';'],
    ['car', '.', '', '=', '', ';'],
    ['', '.', '', '=', '', ';'],
    ['car', '', 'drive', '=', '', ';'],
    ['car', '.', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Why is it a good practice to declare objects with const keyword?',
      prompt:
        'Explain in short and simple way why is it a good practice to declare objects with const keyword in JavaScript',
    },
    {
      chat: `What are all ways to access object's property?`,
      prompt: `Explain in short and simple way what are all ways to access object's property in JavaScript`,
    },
    {
      chat: `Why objects are the key to fully understand the JavaScript?`,
      prompt: `Explain in short and simple way why understanding objects in JavaScript is crucial`,
    },
  ],
};

const L7DataTypesAndFunctions: TLevel = {
  challanges: [
    'Replace “x” in the second <span> element with a length value of text inside the first <span> element.',
    'Extract substring “World” from second <p> element and replace the “Hello World!” text.',
    'Concat proper strings so that they make “I’ve been divided, but now I’m a whole sentence” text and then perform a toUpperCase() method on it, then show it inside an alert.',
  ],
  codeBlocks: [
    '.length',
    '.slice(5, 11)',
    '.toUpperCase()',
    '.concat',
    '("but now I’m a whole sentence")',
    'const fullGreeting = ',
    'document.getElementById("text").innerHTML',
    'document.getElementById("greeting").innerHTML = ',
    'alertMessage',
  ],
  codeBlocksInCorrectOrder: [
    'document.getElementById("text").innerHTML',
    '.length',
    'const fullGreeting = ',
    'document.getElementById("greeting").innerHTML = ',
    '.slice(5, 11)',
    '.concat',
    '("but now I’m a whole sentence")',
    'alertMessage',
    '.toUpperCase()',
  ],
  description: `JavaScript Strings allow you to perform some built-in operations on them called methods. Let’s focus on the most used String methods which are: length, slice(), toUpperCase() and concat().\n\nlength - it returns a number indicating the length of the text\n\nslice(start, end) - this methods takes two parameters start and end positions then extracts a part of a string and returns it\n\ntoUpperCase() - it converts a string to uppercase\n\nconcat(value1, …, valueN) - it joins two or more strings `,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <span>My length:</span><span id="result">x</span><p id="greeting">Hello World!</p>\n </body>\n</html>`,
  name: 'String Methods Part 1',
  dbName: 'string_methods_part_1',
  resultIFrameSrcDoc: `<span id="text">My length:</span><span id="result">x</span><p id="greeting">Hello World!</p>`,
  scriptSlots: [
    ['document.getElementById("result").innerHTML = ', '', '', ';'],
    ['', 'document.getElementById("greeting").innerHTML', ';'],
    ['', 'fullGreeting', '', ';'],
    ['const alertMessage = ', '"I’ve been divided, "', '', '', ';'],
    ['window.alert', '(', '', '', ')', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'How many String methods are in JavaScript?',
      prompt:
        'Tell me how many methods does String API provide in JavaScript, do not give me examples but provide a number value.',
    },
  ],
};

const L8DataTypesAndFunctions: TLevel = {
  challanges: [
    'Use proper methods on string value and replace the content of the <p> element so that its content is equal to this sentence: “You can modify JavaScript strings in many ways!”',
    'Display an alert with a result of a split() method on a string stored inside the message const.',
  ],
  codeBlocks: [
    'window',
    'message',
    '.trim()',
    `.replace("This string has whitespace at the start. Don't worry. ", "")`,
    'message.split(" ")',
  ],
  codeBlocksInCorrectOrder: [
    '.trim()',
    `.replace("This string has whitespace at the start. Don't worry. ", "")`,
    'message',
    'window',
    'message.split(" ")',
  ],
  description: `You’ve already been introduced to some of the most commonly used String methods but there are some other really important methods left, those are:  trim(), replace(), and split(). \n\ntrim() - this method removes whitespaces from the beginning and the end of a string\n\nreplace(value1, value2) - it takes up two parameters and replaces specified value1 with value2\n\nsplit(value) - it divides string where given value occurs in a text and returns an array of strings (You will learn more about Arrays in further levels)`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="message">Change me!</p>\n </body>\n</html>`,
  name: 'String Methods Part 2',
  dbName: 'string_methods_part_2',
  resultIFrameSrcDoc: `<p id="message">Change me!</p>`,
  scriptSlots: [
    [
      'const message =',
      `" This string has whitespace at the start. Don't worry. You can modify JavaScript strings in many ways!"`,
      '',
      '',
      ';',
    ],
    ['document.getElementById("message").innerHTML =', '', ';'],
    ['', '.alert', '(', '', ')', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'What does it mean that JavaScript Strings are primitive and immutable?',
      prompt: `Explain in short and simple way What does it mean that JavaScript Strings are primitive and immutable`,
    },
  ],
};

const L9DataTypesAndFunctions: TLevel = {
  challanges: [
    'Define an array named myFirstArray with three strings in this order: “apple”, “orange, “cherry”',
    'Define a second array named listOfNumbers with the numbers in ascending order.',
    'Contact proper values from those arrays so that <p> element has this sentence: “There is 1 apple inside the basket”',
  ],
  codeBlocks: ['0', '"apple"', '"cherry"', '2', ',', '.concat(', 'myFirstArray', '=', 'myFirstArray[0]', 'const '],
  codeBlocksInCorrectOrder: [
    'myFirstArray',
    '"apple"',
    ',',
    '"cherry"',
    'const ',
    '=',
    '0',
    '2',
    '.concat(',
    'myFirstArray[0]',
  ],
  description: `JavaScript arrays are lists that can store multiple values in a single variable. Each value in an array is called an element, and each element has a numbered position called an index, starting from 0.\n\nThere are many ways to declare an array but the most popular one is to use a const keyword and put array elements into square brackets.\n\nTo access an array element you have to referr to the index number.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="result">missing result</p>\n </body>\n</html>`,
  name: 'Introduction to Arrays',
  dbName: 'introduction_to_arrays',
  resultIFrameSrcDoc: `<p id="result">missing result</p>`,
  scriptSlots: [
    ['const ', '', '=', '[', '', ',', '"orange"', '', '', ']', ';'],
    ['', 'listOfNumbers', '', '[', '', ',', '1', ',', '', ']', ';'],
    [
      'document.getElementById("result").innerHTML = ',
      '"There is "',
      '',
      'listOfNumbers[1]',
      ',',
      '" "',
      ',',
      '',
      ',',
      '" "',
      ',',
      '"inside the basket"',
      ')',
      ';',
    ],
  ],
  challangeQuestions: [
    {
      chat: 'What kind of data types can I store in Arrays?',
      prompt: `Explain in short and simple way what kind of data types can we store in Arrays in JavaScript`,
    },
    {
      chat: 'What is a good use case for Arrays?',
      prompt: `Explain in short and simple way what is a good use case for Arrays in JavaScript`,
    },
  ],
};

const L10DataTypesAndFunctions: TLevel = {
  challanges: [
    'Define an array named animals with string values in alphabetical order. Skip the "parrot" string while doing it.',
    'In the first <p> element replace the “x” in the “Array has x elements” sentence.',
    'Replace “dog” item with “parrot”.',
    'In the second <p> element write all elements from the array separated by the “,” sign.',
  ],
  codeBlocks: ['"ant"', '"dog"', 'animals', 'animals', '.pop()', '.length', '.join(", ")', '.push("parrot")'],
  codeBlocksInCorrectOrder: [
    'animals',
    '"ant"',
    '"dog"',
    'animals',
    '.length',
    '.pop()',
    '.push("parrot")',
    '.join(", ")',
  ],
  description: `Just like Strings Arrays have their own methods, there are lots of them but we will focus on the most used ones.\nHere are the first four Array methods that you will learn: length, join(), pop(), push()\n\nlength - it returns a number that indicates the amount of items\n\njoin(value) - this method joins all elements from array with a separator (value) and returns a string\n\nNaturally when we work with arrays we somehow want to add and remove items from it, pop() and push() are one of the ways to do that.\n\npop() - it removes the last element\n\npush() - it adds new item at the end`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <p id="arrayLength">Array has x elements</p>\n   <p id="allElements"></p>\n </body>\n</html>`,
  name: 'Array Methods Part 1',
  dbName: 'array_methods_part_1',
  resultIFrameSrcDoc: `<p id="arrayLength">Array has x elements</p><p id="allElements"></p>`,
  scriptSlots: [
    ['const ', '', '=', '[', '', ',', '"bird"', ',', '', ']', ';'],
    ['document.getElementById("arrayLength").innerHTML =', '"Array has ".concat(', '', '', ',', '" elements")', ';'],
    ['animals', '', ';'],
    ['animals', '', ';'],
    ['document.getElementById("allElements").innerHTML =', 'animals', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'How many Array methods are in JavaScript?',
      prompt:
        'Tell me how many methods does Array API provide in JavaScript, do not give me examples but provide a number value.',
    },
  ],
};

const L11DataTypesAndFunctions: TLevel = {
  challanges: [
    'Check if value “JavaScript” exists in the programmingLanguages array and write the result (true or false) inside the <div> element.',
    'In the <p> element write all items from the programmingLanguages array in alphabetical order.',
    'Perform a correct operation on the binary array so that only zeros will stay in the new array.',
  ],
  codeBlocks: [
    'binary',
    'programmingLanguages',
    '.filter(filterBinary)',
    '.sort()',
    '.includes("JavaScript")',
    '{ return !arrayValue }',
  ],
  codeBlocksInCorrectOrder: [
    '.includes("JavaScript")',
    'programmingLanguages',
    '.sort()',
    '{ return !arrayValue }',
    'binary',
    '.filter(filterBinary)',
  ],
  description: `It’s time for another dose of useful Array methods: includes(), sort(), filter().\n\nincludes(value) - it returns a Boolean value (true or false) depending on if value is present in array’s items\n\nsort() - this methods sorts items in alphabetical order (works only for an array of Strings)\n\nfilter(function {}) - this method is a little bit more complex. It creates a new array with all elements that pass a test provided by a function. Function that is provided for this method should return a Boolean, when it is true then the given item is included in the new array.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <div id="result">missing result</div>\n   <p id="allElements"></p>\n </body>\n</html>`,
  name: 'Array Methods Part 2',
  dbName: 'array_methods_part_2',
  resultIFrameSrcDoc: `<div id="result">missing result</div>\n   <p id="allElements"></p>`,
  scriptSlots: [
    ['const ', 'binary =', '[0, 0, 1, 0, 1, 1]', ';'],
    ['const ', 'programmingLanguages =', '["Python", "C#", "JavaScript", "Ruby"]', ';'],
    ['document.getElementById("result").innerHTML =', 'programmingLanguages', '', ';'],
    ['document.getElementById("allElements").innerHTML =', '', '', ';'],
    ['function ', 'filterBinary(arrayValue)', '', ';'],
    ['const filteredArray = ', '', '', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Tell me more about the .filter() method',
      prompt: `Explain in short and simple way how does filter array method work in JavaScript`,
    },
    {
      chat: 'What arguments can I pass to the function inside the .filter() method?',
      prompt: `Explain in short and simple what arguments can be passed to the function inside the filter method in JavaScript. Focus only on explaining the arguments.`,
    },
  ],
};

const L1StatementsAndLogicalOperations = {
  challanges: ['Assign the correct results or operators for given statements.'],
  codeBlocks: ['===', '===', '!==', '!=='],
  codeBlocksInCorrectOrder: ['!==', '===', '===', '!=='],
  description: `We often want to determine the equality or difference between variables or values, to do that we use comparison operators. Some of them are already known to you from math.\n\nEqual to (==): Compares two values for equality, after converting both values to a common type.\n\nStrict equal to (===): Compares two values for equality without type conversion.\nSo for this operation to return true both value and type have to be the equal.\n\nNot equal to (!=): Compares two values for inequality, after converting both values to a common type.\n\nStrict not equal to (!==): Compares two values for inequality without type conversion.\n\nIt’s very uncommon to use non-strict operators - equal to (==) and not equal to (!=), because it leads to messy and buggy code.\nFor this level we will focus only on strict operators.`,
  htmlSourceCode: ``,
  name: 'Comparison Operators Part 1',
  dbName: 'comparison_operators_part_1',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['10', '', '1', '//Should return true'],
    ['5', '', '5', '//Should return true'],
    ['"3"', '', '3', '//Should return false'],
    ['true', '', 'false', '//Should return true'],
  ],
  challangeQuestions: [
    {
      chat: 'Why does using the non strict operators leads to a buggy code?',
      prompt: `Explain in short and simple why does using the non strict operators (equal or not equal to) leads to a buggy code in JavaScript?`,
    },
  ],
};

const L2StatementsAndLogicalOperations = {
  challanges: ['Assign the correct results or operators for given statements.'],
  codeBlocks: ['<=', '<=', '>=', '<'],
  codeBlocksInCorrectOrder: ['>=', '<', '<=', '<='],
  description: `In the previous level you have learned the first portion of comparison operators, now it is time for the second half.\n\nGreater than (>): Checks if the value on the left is greater than the value on the right.\n\nGreater than or equal to (>=): Checks if the value on the left is greater than or equal to the value on the right.\n\nLess than (<): Checks if the value on the left is less than the value on the right.\n\nLess than or equal to (<=): Checks if the value on the left is less than or equal to the value on the right.`,
  htmlSourceCode: ``,
  name: 'Comparison Operators Part 2',
  dbName: 'comparison_operators_part_2',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['1', '', '0', '//Should return true'],
    ['-10', '', '0', '//Should return true'],
    ['1', '', '0', '//Should return false'],
    ['0', '', '0', '//Should return true'],
  ],
  challangeQuestions: [
    {
      chat: '',
      prompt: '',
    },
  ],
};

const L3StatementsAndLogicalOperations: TLevel = {
  challanges: ['Assign the correct results or operators for given statements.'],
  codeBlocks: ['//Should return true', '||', '&&', '//Should return false'],
  codeBlocksInCorrectOrder: ['&&', '||', '//Should return false', '//Should return true'],
  description: `Logical operators are used to combine or invert boolean values.\n\nLogical AND (&&): Returns true if both operands are true; otherwise, returns false.\n\nLogical OR (||): Returns true if at least one of the operands is true; otherwise, returns false.\n\nLogical NOT (!): Returns the opposite boolean value of its operand.`,
  htmlSourceCode: ``,
  name: 'Logical Operators',
  dbName: 'logical_operators',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['true', '', 'true', '//Should return true'],
    ['false', '', 'true', '//Should return false'],
    ['!', 'true', ''],
    ['true', '||', 'false', ''],
  ],
  challangeQuestions: [
    {
      chat: 'Can I use logical operator on different data type besides the Boolean?',
      prompt:
        'Explain in simple and short way how logical operators can be used on strings and numbers in JavaScript. Skip explaining the operators.',
    },
  ],
};

const L4StatementsAndLogicalOperations: TLevel = {
  challanges: [
    'Complete first if statement and pass a proper condition for it so that the lightbulb image changes to “lightbulb-on.png”.',
    'Complete second if…else if statement so that the text in <p> says “Variable x is greater than y”',
  ],
  codeBlocks: ['( !isLightbulbOn )', '( isLightbulbOn )', '( x < y )', '( x > y )', 'else'],
  codeBlocksInCorrectOrder: ['( !isLightbulbOn )', '( x < y )', 'else'],
  description: `In JavaScript, if, else if, and else statements are used to execute code based on certain conditions.\nif: Executes a block of code if a condition is true.\nelse if: Tests a new condition if the previous condition(s) are false.\nelse: Executes a block of code if none of the previous conditions are true.`,
  htmlSourceCode: `<!doctype html>\n<html>\n <body>\n   <img alt="“lightbulb" src="/lightbulb-off.png" id="lightbulbImage" width="100"></img>\n   <p id="compareResult">missing result</p>\n   <span id="info"></span>\n </body>\n</html>`,
  name: 'If, Else and Else if Statements',
  dbName: 'if_else_and_else_if_statements',
  resultIFrameSrcDoc: `<img alt="“lightbulb" src="/lightbulb-off.png" id="lightbulbImage" width="100"></img>\n   <p id="compareResult">missing result</p>\n   <span id="info"></span>\n`,
  scriptSlots: [
    ['const ', 'x', '=', '12', ';'],
    ['const ', 'y', '=', '6', ';'],
    ['const ', 'isLightbulbOn', '=', 'false', ';'],
    ['if', '', '{ document.getElementById("lightbulbImage").src = "/lightbulb-on.png" }'],
    [
      'if',
      '',
      '{ document.getElementById("compareResult").innerHTML = "Variable x is smaller than y" }',
      '',
      '{ document.getElementById("compareResult").innerHTML = "Variable x is greater than y" }',
    ],
  ],
  challangeQuestions: [
    {
      chat: '',
      prompt: '',
    },
  ],
};

const L5StatementsAndLogicalOperations: TLevel = {
  challanges: ['Complete switch statement so that alert says “Wednesday".'],
  codeBlocks: ['case 2:', 'case 3:', 'break;', 'result = "Monday";', 'result = "Wednesday";'],
  codeBlocksInCorrectOrder: ['result = "Monday";', 'case 2:', 'break;', 'case 3:', 'result = "Wednesday";'],
  description: `In JavaScript, the switch statement is used to execute one block of code among many based on the value of an expression. It's a more readable alternative to multiple if...else if statements when you need to compare the same variable to different values.\n\nThe switch statement evaluates the expression once and compares its result with the values of each case. If a matching case is found, the code associated with that case is executed. The break statement is used to terminate the switch block, preventing the execution of subsequent cases.`,
  htmlSourceCode: ``,
  name: 'Switch Statement',
  dbName: 'switch_statement',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['const dayOfWeek', '=', '3', ';'],
    ['let result', '=', '""', ';'],
    ['switch(dayOfWeek)', '{'],
    ['case 1:', '', 'break;'],
    ['', 'result = "Tuesday";', ''],
    ['', '', 'break;'],
    ['}'],
    ['window.alert(result)', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'What happens when multiple cases match a case value?',
      prompt:
        'Explain in simple and short way what happens when multiple cases match a case value in switch statement in JavaScript.',
    },
  ],
};

const L6StatementsAndLogicalOperations: TLevel = {
  challanges: [
    'Complete first while loop in that way so all elements from the fruits array are gone and the array is empty.',
    'Complete the second while loop so that the numbers array is filled with numbers from 1 to 100.',
  ],
  codeBlocks: ['while', '0', '1', 'i++;', '(i <= fruits.length + 1)', 'fruits.pop();'],
  codeBlocksInCorrectOrder: ['0', '(i <= fruits.length + 1)', 'fruits.pop();', '1', 'while', 'i++;'],
  description: `In JavaScript, a while loop is used to repeatedly execute a block of code as long as a specified condition is true. It’s particularly useful when the number of iterations is not known beforehand. Here’s how while loop works in steps:\n\nCondition Check: Before each iteration, the while loop evaluates the condition.\n\nCode Execution: If the condition evaluates to true, the code inside the loop is executed.\n\nRepeat: After executing the code block, the loop goes back to step 1 and re-evaluates the condition.\n\nTermination: The loop continues until the condition evaluates to false.`,
  htmlSourceCode: ``,
  name: 'While Loop',
  dbName: 'while_loop',
  resultIFrameSrcDoc: ``,
  scriptSlots: [
    ['const fruits', '=', '["apple", "orange", "cherry"]', ';'],
    ['const numbers', '=', '[]', ';'],
    ['let i', '=', '', ';'],
    ['while', '', '{', '', 'i++;', '}', ';'],
    ['i', '=', '', ';'],
    ['', '(i <= 100)', '{', 'numbers.push(i);', '', '}', ';'],
  ],
  challangeQuestions: [
    {
      chat: 'Why do we have to increase the value of the i variable?',
      prompt:
        'Explain in simple and short way why is it important to rebember about increasing the value of the variable used in the while condition in JavaScript.',
    },
  ],
};

const fundamentals: TLevel[] = [L1Fundamentals, L2Fundamentals, L3Fundamentals, L4Fundamentals, L5Fundamentals];
const dataTypesAndFunctions: TLevel[] = [
  L1DataTypesAndFunctions,
  L2DataTypesAndFunctions,
  L3DataTypesAndFunctions,
  L4DataTypesAndFunctions,
  L5DataTypesAndFunctions,
  L6DataTypesAndFunctions,
  L7DataTypesAndFunctions,
  L8DataTypesAndFunctions,
  L9DataTypesAndFunctions,
  L10DataTypesAndFunctions,
  L11DataTypesAndFunctions,
];
const statementsAndLogicalOperations: TLevel[] = [
  L1StatementsAndLogicalOperations,
  L2StatementsAndLogicalOperations,
  L3StatementsAndLogicalOperations,
  L4StatementsAndLogicalOperations,
  L5StatementsAndLogicalOperations,
  L6StatementsAndLogicalOperations,
];

const levels = { fundamentals, dataTypesAndFunctions, statementsAndLogicalOperations };

export default levels;
