// console.log("lets start");

// let recatngle = {
//     length : 1,
//     breath : 2,

//     draw: function(){
//         console.log('Draw')
//     }
// }

// //how to cretae object with a function
// //factory function

// function cretaeRecatangle(leng, bre){

//     return recatngle = {
//         length: leng,
//         breath: bre,
    
//         draw: function(){
//             console.log('Draw')
//         }
//     };

// }
// //Object cretae usinf factory function
// let recatngleOne = cretaeRecatangle(10,15);

// console.log(recatngleOne.length);

// //Constructor Function --> Pascal Notation

// function Rectangle(len , bre){

//     this.length = len;
//     this.breath = bre;
//     this.draw = function(){
//         console.log("drwaing");
//     }
// }

// //object create using constructor function
// let recatngleTwo = new Rectangle(10,20);

// recatngleTwo.color= 'yellow';
// console.log(recatngleTwo);

// delete recatngleTwo.color;
// console.log(recatngleTwo);

// let Recatngle1 = new Function(`lenght`, `breadth`,
// `this.length = length; 
// this.breath = breadth; 
// this.draw = function(){
//     console.log("drwaing")
//     ;}`
// );

// //objet cretae using Rectangle1
// let rect = new Recatngle1(2,3);



// let a = 10;
// let b = a;
// a++
// console.log(a);
// console.log(b); 

// let a= {value: 10};
// let b = a;

// a.value++
// console.log(a.value);
// console.log(b.value);
     
// let a = 10;


// let a = {
//     value:10
// };

// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);




let rectangle = {
    length:2,
    breadth:4
};

//For in loop
// for(let key in rectangle){
//     console.log(key, rectangle[key]//this is value of keys 
//     );
// }


//for of loop 
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


// if('color' in rectangle){
//     console.log('Present');

// }else{
//     console.log('absent');
// }

//Object#1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++
// console.log(dest);

//Object#2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = {value:25};

// let dest = Object.assign({},src,src2);

// console.log(dest);

// src.a++
// console.log(dest);


//Object#3
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};

console.log(dest);

src.a++
console.log(dest);