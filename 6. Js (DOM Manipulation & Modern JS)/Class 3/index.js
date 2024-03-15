//adding 100 para

//* Time Stamp
// const t1 = performance.now();

// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "Para " + i;

//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();

// console.log("Time Elapsed: " + (t2-t1) + "ms");

//!Optimization a bit
// const t3 = performance.now();
// let myDiv = document.createElement("div");
// for (let i = 0; i <= 100; i++) {
//   let element = document.createElement("p");
//   element.textContent = "Para " + i;

//   myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took "+(t4-t3)+" ms");


//!Fragment

// let fragment = document.createDocumentFragment();
// for(let i=0;i<=100;i++){
//     let element = document.createElement("p");
//     element.textContent = "Para "+i;
//     fragment.appendChild(element);
// }
// document.body.appendChild(fragment);//1 Reflow and 1 Repaint

//!Single Thread Langugaes

// function addPara(){
//   let para = document.createElement('p');
//   para.textContent = "Js is SIngle";
//   document.body.appendChild(para);
// }

// function appendNewMessage(){
//   let para = document.createElement('p');
//   para.textContent = "Kya haal chaal";
//   document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

//! SetTimout
console.log("1");

setTimeout(function(){
  console.log("Run after 1 Sec");
},1000);

for(let i=0;i<=10000;i++){
  console.log("2");
}

//Not printing after 1 sec beacuse call stack is not empty due to for loop