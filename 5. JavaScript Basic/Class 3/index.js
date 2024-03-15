// *Math inbuild class
// console.log(Math.random());

// *Strings

let lastName = 'Kuldeep';
// console.log(typeof lastName);
// console.log("lets start");

// let lastName2 = new String('Kuldeep');
//  console.log(typeof lastName);

// let message = `hello sir ${lastName}

// thanks for sending me mail
// regards
// saini`;

// console.log(message);


// *Date and time

// let date = new Date()
// console.log(date);


// let date2 = new Date('June 20 1998 07:15')
// console.log(date2);

// let date3 = new Date(1998, 0, 20 ,7)


// date3.setFullYear(1947)
// date3.getDate();
// console.log(date3);

// *Array

// let numbers = [1,4,5,7];
// console.log(numbers);

// ? Inserting elments in the Array
// *end
// numbers.push(9);
// console.log(numbers);

// *begining
// numbers.unshift(8);
// console.log(numbers);

// *Middle
// numbers.splice(1,0,10,20);
// console.log(numbers);


// ? We want to check if a number exist or not in an array
// * MEthod 1 and not a good practice

// if(numbers.indexOf(4)!= -1){
//     console.log("Present");
// }else{
//     console.log("Absent");
// }

// * MEthod 2 and a good practice
// console.log(numbers.includes(4));

// * Advance version
// console.log(numbers.indexOf(4,2));

//? On refernce Array

// let courses = [
//     { no: 1, name: 'Kuldeep' },
//     { no: 2, name: 'Prikshit' }
// ];

// console.log(courses);

// console.log(courses.indexOf({no: 1, naam: 'Kuldeep' }));

// *Callback function
// let course = courses.find(function(course){
//     return course.name == 'Kuldeep';
// });


//* Arrow Function
// let course = courses.find(course => course.name === 'Kuldeep');


// console.log(course);


// ? Inserting elments in the Array

// let numbers = [1,2,3,4,5,6,7];
// console.log(numbers);


// *end
// numbers.pop();
// console.log(numbers);

// *begining
// numbers.shift();
// console.log(numbers);

// *Middle
// numbers.splice(2,1);
// console.log(numbers);


// ? Emptying an Array

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

//! numbers = []; Bad pratice
// *numbers.length = 0; generally use this

// numbers.splice(0, numbers.length)

// console.log(numbers);
// console.log(numbers2)


// ? Combining and slicing of an array
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);


// let sliced =  combined.slice(2,3);
// console.log(sliced);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced2 =  marks.slice(2,6);
//* Full slicing and its make copy of an array and also staring index is included whereas ending index is excluded.
 // let sliced2 =  marks.slice();
// console.log(sliced2);


// ? Combining using Spread operator (It has more good readability)
// let first = [1,2,3];
// let second =  [4,5,6];

// let combined = [...first,'a', ...second,'b'];
// console.log(combined)

//* Create copy using Spread operator
// let another = [...combined];


// ? Iterating on an Array 
// let arr = [10,20,30,40,50];

//*usinf for-of loop

// for(let value of arr){
//     console.log(value);
// }


//*usinf for-each loop(uses a callback function)

// arr.forEach(function(value){
//     console.log(value);
// });

//*Arrow function is used for shortnening callback function
// arr.forEach(value =>console.log(value));



// ? joining an Array

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(numbers);
// console.log(joined);

// ? Spliting an String
// let message = 'This is my first message';
// console.log(message);
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join(' ')
// console.log(joined);

//? Sorting an array
// let number = [40,30,10,20,50];
// console.log(number);

//* Sorting in Ascending Order
// number.sort();
// console.log(number);

//* Sorting in Descending Order
// number.reverse();
// console.log(number);

//? Filtering an Array
// let arr = [1,2,-1,-4];

// let filtered = arr.filter(function(value){
//     return value >= 0;
// });

// let filtered = arr.filter(value => value >= 0);

// console.log(filtered);

//? Mapping

// let numbers = [7,8,9,10];

// let items = numbers.map(function(value){
//     return 'student_no ' + value;
// });

// let items = numbers.map(value => 'student_no ' + value);

// console.log(items);

//? Mapping with objects

let numbers = [1,2,-6,-9];
// let filtered = numbers.filter(value => value>=0);

// let items = filtered.map(function(num){
//     let obj = {value: num};
//     return obj;
// });

// let items = filtered.map(num => {value: num});


//* Chaining 


let items = numbers
                .filter(value => value>=0)
                .map(num => {value: num});
console.log(items);