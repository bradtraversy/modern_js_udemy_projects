

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

// //WORKING WITH DATES AND TIMES IN JAVASCRIPT

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:35:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1988');

// val = today.getMonth()+1;
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();
// console.log(val);

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(17);
// birthday.setMinutes(30);
// birthday.setSeconds(22);

// console.log(birthday);

//IF Statements and Comparison Operators
// if(something){
//   do something}else {
//     do something else
//   }
// }

// const id='100';

// //Equal to
// if(id == 100){
// console.log("correct");
// } else {
//   console.log('incorrect');
// }

// //Not equal to
// if(id != 101){
//   console.log("correct");
//   } else {
//     console.log('incorrect');
//   }

//   //Most times u want to test the value and the type
//   if(id === 100){
//     console.log("correct");
//     } else {
//       console.log('incorrect');
//     }

//     //Not equal to value and type
//     if(id !== 100){
//       console.log("correct");
//       } else {
//         console.log('incorrect');
//       }

// //Test if undefined
// if(typeof id === 'undefined'){
// console.log(`The ID is ${id}`); //template literal
// } else{
//   console.log('No ID');
// }

//GREATER OR LESS THAN
// if(id > 100){
//   console.log("correct");
//   } else {
//     console.log('incorrect');
//   }

// const color = 'yellow';

// if(color==='red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else{
//   console.log('Color not red or blue');
// }

// //Logical Operators
// const name = 'steve';
// const age = 70;

// //AND &&
// if(age>0 && age<12){
//   console.log(`${name} is a child`)
// }else if(age >= 13 && age <= 19){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult!`)
// };

// // OR ||
// if(age <16 || age>65){
//   console.log(`${name} cannot run in race`);
// } else {
//   console.log(`${name} is registered for the race!`);
// }

// //TERNARY Opertaor //shorthand way of doing conditionals
// const id = 100;
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// //Without Braces
// if(id === 100)
//   console.log('correct');
// else
//   console.log('incorrect'); //possible but suggested to stick with curly braces


// //SWITCHES
// const color = 'green';

// switch(color){ //inside the parenthese what you want to test
//   case 'red':
//       console.log('Color is red');
//       break;
//   case 'blue':
//       console.log('Color is blue');
//       break;
//   default:
//     console.log('Color is not red or blue');
// }

// //Use switch for lots of different cases

// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//       day = 'Mon';
//       break;
//   case 2:
//       day = 'Tue';
//       break;
//   case 3:
//       day = 'Wed';
//       break;
//   case 4:
//       day = 'Thu';
//       break;
//   case 5:
//       day = 'Fri';
//       break;
//   case 6:
//       day = 'Fri';
//       break;
// }

// console.log(`Today is ${day}`);


//FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS

// function greet(){
//   //console.log('Jello');
//   return 'Hello';
// }

// // greet(); this is what calls the function!!!

// console.log(greet());

// function greet(firstName = 'John', lastName = 'Doe'){ //This allows default values instead of the text in the next line
//   // if(typeof firstName === 'undefined'){firstName : 'John'}
//   // if(typeof lastName === 'undefined'){lastName : 'Doe'}
//   //console.log('Jello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// greet();

// console.log(greet('Steve','Smith')); //values here overwrite the parameter default values in the function

// console.log(greet());


//Function expressions

// const square = function(){//this is called an anonymous function because we didn't write something like const square = function square(){}

// };

// const square = function(x){
//   return x*x;
// }; //here because it really is a variable, you have to place the semi-colon

// console.log(square(8));

// const square = function(x=3){//when specifying default value
//   return x*x;
// }; //here because it really is a variable, you have to place the semi-colon

// console.log(square());

//Immediately invokable function expressions - IIFEs
//basically a functiont aht you declare and run at the same time
//to do this make it an expression and place it in parenthese

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello ' + name);
// })('Brad');//Useful when it comes to module pattern - in the calorie counter application . One of Brad's favorite design patterns

//Property Methods

//When a function is inside an object, it is called a method.

// const todo = {
//   add: function(){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo....');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

//GENERAL LOOPS AND ITERATION

// for(let i = 0; i < 10; i++){
// if(i ===2){
//   console.log('2 is my favorite number');
//   continue;//keep going with the loop, go to the next iteration
// }
// if(i ===5){
//   break;
// }

// console.log('Number ' + i);

// }

//White loop
//one genral rule = for loop when u know how many iteration it si goin to have and while when it is unclear. This is not always blacka nd white.

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

//DO WHILE LOOP
//different becuase it will always run at least once no matter what

// let i = 0; //in this if the i = 100; then it will still run and give output of "Number 100" on the console.

// do{
//   console.log('Number ' + i);
//   i++
// }
// while(i < 10);

const cars = ['Ford','Chevy','Honda','Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//For each /foreach loop
// cars.forEach(function(car){
//   console.log(car);
// });

//MAP - used to return a different array

// const users = [
//   {id:1, name:'John'},
//   {id:2, name:'Sarah'},
//   {id:3, name:'Karen'},
//   {id:4 , name:'steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

