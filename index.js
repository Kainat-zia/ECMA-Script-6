         // 16-9-24

// ...................................... ECMA script 6...........................
// .......................Asynchorous programming -> synchorous programming -> call back  ->  callback hells (neste3d statement) -> promoises................
//  call back --> to pass argument in one function into another function. 
// we  cant put paranthesis in callfunction./ when we take diff argument in function we cant put paranthesis in call back functuion.


// ................................................Sychronous  (Line by line show hoga)....................................................
// console.log("one");
// console.log("two");
// console.log("three");

// ......................................Asychronous  (phalay start show hoga phir end hoga then hello world last may show hoga )........................................................................
// console.log("start");
// setTimeout(()=>{
//     console.log("hello world");
// }, 5000);
// console.log("End");

// ......................................................call back...............................................................


// function myCalculator(num1, num2, myCallback){

// }
// function sum(a,b){
//     console.log(a + b);
// }
// function calculator(a,b,sumCallback){
//   sumCallback(a,b)
// }
// calculator(7,8,sum)

// callback hell

//  function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId, );
//     }, 2000);
//  }
//  getData(1)
//  getData(2)
//  getData(3)


// // when we apply multiple callbacks then its called callbackhell
// function getData(dataId , getNextData){
//     setTimeout(() => {
//         console.log("data", dataId, );
//         if(getNextData){
//            getNextData();
//                  }
//                 }, 2000);
//         }
//    getData(1,()=>{
//      getData(2,()=>{
//         console.log("loading for data 3");
//         getData(3,()=>{
//             getData(4 ,()=>{

//             })
//         })
//      })
//    })

//     to resolve the callback we use promise
//  prmise is build in class in javascript
// 1. fulfiled accepet -> resolve
// 2. reject
// 3. pending state

// let promise = new Promise((resolve, reject) =>{
//    console.log("this is a promise");
//    resolve("i am resolve")
// })


let promise = new Promise((resolve, reject) =>{
    console.log("this is a promise");
    reject("some errors caught")
 })


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

//  value bydefault hota h
