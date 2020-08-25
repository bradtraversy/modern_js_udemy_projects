// //NUMBERS AND MATH OPERATORS

// const num1 = 100;
// const num2 = 50;
// let val;

// //simple math with numbers
// val = num1+num2;
// val = num1*num2;
// val = num1-num2;
// val = num1%num2;

// //math objects
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.round(2.4);
// val = Math.ceil(2.3);//rounding it to the next one
// val = Math.floor(2.8);//rounding it down
// val = Math.sqrt(16);
// val = Math.abs(-2000);
// val = Math.pow(8,2);
// val = Math.min(1.243,121244,2214,211,1,0,-100);
// val = Math.max(12.4,31,2,1,2,-1000,111111);
// val = Math.random()
// val = Math.round(Math.random()*20);


// console.log(val);

//STRINGS AND ... STRINGS

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad';
// const tags = 'web design,web developement,programming'

// let val;

// val = firstName + lastName; //simple addition

// //Concatenation
// val = firstName + ' ' + lastName;
// //Append
// val = 'Leo';
// val += 'Ramchandani';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping
// val = 'That\'s awesome, i can\'t wait!!!';

// //Length
// val = firstName.length;

// //concat
// val = firstName.concat(' ',lastName);

// //to change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// //IndexOf()
// val = firstName.indexOf('l');

// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt('2');

// //Get last character
// val = firstName.charAt(firstName.length - 1);

// //substrings()
// val = firstName.substring(0,4);

// //slice()
// val = firstName.slice(0,3);
// val = firstName.slice(-3);

// //split()
// val = str.split(' ');
// val = tags.split(',');

// //replace
// val = str.replace('Brad','Jack');

// //includes()
// val = str.includes('food');
// val = str.includes('Hello');

// console.log(val);

//TEMPLATE LITERALS

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without template strings (es5)
html = '<ul>name</ul>'

document.body.innerHTML = html;