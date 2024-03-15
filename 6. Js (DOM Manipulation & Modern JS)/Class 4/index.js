// function sync() {
//   console.log('first');
// }

// sync();

// console.log('second');

// setTimeout (function () {
//   console.log('third');
// },3000);

// function sync() {
//   console.log('first');
// }

// sync();

// console.log('second');

//! Promise
//*Sync Code inside Promise
// let meraPromise = new Promise(function (resolve, reject){
//   console.log('I am inside Promise');
//   resolve(1998);
// });

// console.log('Phela');

//*Async Code inside Promise
// let meraPromise = new Promise(function (resolve, reject){
//   setTimeout(function(){
//     console.log('I am inside Promise');
//   },5000);
//   resolve(2002);
// reject(new Error('Bhai sahab error aye hai'));
// });

// let meraPromise2 = new Promise(function (resolve, reject){
//   setTimeout(function(){
//     console.log('I am inside Promise 2');
//   },3000);
// resolve(2002);
//      reject(new Error('Bhai sahab error aye hai'));
// });
// console.log('Phela');

//* Promise Methods
// then()
// meraPromise.then((value) => {console.log(value)});

//catch()
// meraPromise2.catch((error) => {console.log("Received Error:",error)});

//both in one line
// meraPromise2.then((value) => {console.log(value)}).catch((error) => {console.log("Received Error:",error)});
// meraPromise2.then((value) => {console.log(value)},(error) => {console.log("Received Error:",error)});

//* Mutliple Promise

// let wadaa1 = new Promise (function(resolve, reject){
//   setTimeout(function(){
//     console.log('Settimeout1 stated')
//   },2000);
//   resolve(true);
// });

// let output = wadaa1.then(()=>{
//   let wadaa2 = new Promise (function(resolve, reject){
//     setTimeout(function(){
//       console.log('Settimeout2 stated')
//     },3000);
//      resolve("wadaa2 2 resolved")
//   });
//   return wadaa2;
// }).then((value)=> {console.log(value)});

//! Async Await

// async function abc(){
//   return 'Kya hua tera';
// }

// async function utility() {
//   let delMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi me bhot garmi hh");
//     }, 1000);
//   });

//   let hydMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hyderabad me bhot Thand hh");
//     }, 2000);
//   });

//   let dM = await delMausam;
//   let hM = await hydMausam;
//   return(dM,hM);
// };

//! Asyn and Await Fetch API
// https://api.github.com/users
//*Get Request
// async function fetchApi() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }

// fetchApi();

//*Post Request

// async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({ //COnverting Js object to JSON Strings
//           title: 'Kuldeep',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

//! Closure

// let name = 'sher';
// function init() {
// var name = "Mozilla"; // name is a local variable created by init
//   {let name = 'saini';}
//   function displayName() {
// let name = "Kuldeep";
// displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


function init() {
  let name = "Mozilla"; 
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
let a = init();
a();


//* Best Example to understand clouser
function outer(){
  let a=1;

  function inner(){
    let a =10;
    console.log(a);
    function inner2(){
      console.log(a);
    }
    inner2();
  }
  inner();
}

outer();