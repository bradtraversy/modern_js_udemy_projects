

/*
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
// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';

// let html;

// //Without template strings (es5)
// html = '<ul>' +
//        '<li>Name: ' + name + '</li>' +
//        '<li>Name: ' + age + '</li>' +
//        '<li>Name: ' + job + '</li>' +
//        '<li>Name: ' + city + '</li>'+
//        '</ul>';

//with template strings (es6 or Template Literals) - its like ur putting it into a template :D
// html = `
//   <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>${2+2}</li>
//   <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
//     `;

// document.body.innerHTML = html;

*/

// //ARRAYS
// //Create some arrays
// const numbers = [43,23,16,56,32,44,36];
// const numbers2 = new Array(22, 45,33,76,54); //another way to create arrays

// const fruit = ['APple','Banana','Orange','Pear'];
// const mixed = [22, 'Hello',true,undefined,null,{a:1, b:1},new Date()];

// // console.log(mixed);

// let val;

// //Get array length
// val = numbers.length;

// //Check if is array
// val = Array.isArray(numbers);

// //Get single value
// val = numbers[3];
// val = numbers[0];

// //Insert into Array
// // numbers[2] = 100;
// //Find index of value
// val = numbers.indexOf(36);

// //MUTATING ARRAYS
// //ADD ONTO END OF ARRAY - PUSH
// // numbers.push(240);

// // //Add onto beginning of array - unshift
// // numbers.unshift(240);

// // //Take off from end - POP
// // numbers.pop(); //removes the 240 at the end

// // //Take off from front
// // numbers.shift();

// // //Splice values
// // numbers.splice(1,3);

// // //Reverse the array
// // numbers.reverse();

// //Concatenate arrays
// val = numbers.concat(numbers2);

// //Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // //Use the "compare function"
// // val = numbers.sort(function(x,y){
// //   return x-y;
// // });

// // //Reverse sort
// // val = numbers.sort(function(x,y){
// //   return y-x;
// // });

// //Find
// // function under50(num){
// //   return num <50;
// // }

// // val = numbers.find(under50);

// function over50(num){
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);


// //OBJECT LITERALS REFERENCE TYPE

// const person ={
//   firstName:'Steve',
//   lastName : 'Smith',
//   age: 35,
//   email: 'steve@aol.com',
//   hobbies:['music','sports'],
//   address:{
//     city:'Miami',
//     state: 'FL',
//   },
//   getBirthYear: function(){
//     return 2020 - this.age;
//   }
// } //this defines an object literal (without any value) and we can place key value pairs inside it

// let val;

// val = person;
// //Get specific value
// val = person.firstName;
// val = person['firstName']; //another way to get items from an object
// val = person.age;
// val = person.hobbies[1];
// val = person.address;
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();


// console.log(val);

// const people = [
//   {name:'John',age:30},
//   {name:'Mike',age:23},
//   {name:'Mike1',age:23}

// ];

// //FOR LOOP
// for (let i =0; i<people.length; i++){
//   console.log(people[i].name);
// }

//WORKING WITH DATES AND TIMES IN JAVASCRIPT

