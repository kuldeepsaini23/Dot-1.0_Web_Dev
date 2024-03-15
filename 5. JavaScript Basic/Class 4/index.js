//? Function
// run();
//* Function Declaration
//*Method 1
// function run(){
//     console.log("Running");
// }

//* Function call or Invoke
// run();

//*Method 2 (Named Function Assignment)
// !stand(); this will give error
// let stand = function walk(){
//     console.log('walking');
// };
//* (Anonymous Function Assignment)
// let stand2 = function (){
//     console.log('walking2');
// };
// stand2();
// stand();

// let jump = stand;
// jump();

// let x = 1;
// x = 'a';

// console.log(x);

//? Dynamic functuion in JS

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// function sum(){

//     let total = 0
//     for (let value of arguments)
//     total = total + value;
//     return total;
// }

// console.log(sum(2,3));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));
//!Js automatically handles all these argument related things
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

//* Rest Parameter
// function sum(num , value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);

//*Default Prameter

// function interest(p,r=5,y=10){
//     return p*r*y/100;
// }

// console.log(interest(100));
// console.log(interest(1000, undefined,8));

////? Getter and Setter

//*Getter - acess properities
//*Setter - change or mutate properities
// let person = {
//     fName: 'Kuldeep',
//     lName: 'Saini',

//     //* Getter
//     get fullName() {
//         return `${person.fName} ${person.lName}`
//     },

//     set fullName(value) {
//         if(typeof value !== String){
//             throw new TypeError('fullName must be a string');
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }

// }

// console.log(person);

//! Issues read only function
// function fullName(){
//     return `${person.fName} ${person.lName}`
// };

// console.log(fullName());

// console.log(person.fullName);

// person.fullName = 'Prikshit Saini';
// console.log(person.fullName);

//? Try and Catch

// try{
//     person.fullName = 1;
// }catch(e){
//     alert(e);
// }

//? Scope

//*let is a blocked scope variable
// {
//     let a = 5;
//     console.log(a);
// }

// console.log(a); //!This will throw a error because of let

//* var is a file or function scope variable
// {
//     var a = 5;
//     console.log(a);
// }

// function value() {
//     var a = 5;
// }
// console.log(a);
//!This will not throw a error because of var

// for (var i = 0; i < 10; i++) {

// }
// console.log(i);

// if (true) {
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const ab = 5;
// }

// const ab = 5;
// function b() {
//     const ab = 5;
// }

//? Reducing an Array

let arr = [1, 2, 3, 4];
// let total = 0;
// for (let value of arr)
//     total = total + value;

// console.log(total);

// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//! accumulator will Take zero(0) as initial value and currentvalue will take first value of array as inital value 
let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
//! accumulator will Take first value of array as initial value and currentvalue will take second value of array as inital value 
console.log(totalSum);
