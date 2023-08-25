// sync and async kia hota hy ?
// sync matblab ke 1 ke bad doosra hoga , jab takk ek command complete nhi hoga , dusra shuru nhi hoga.

// aynsc matlab sary kam 1 sath shuru kar doo jiska answer pehly ajeye uska jawab de dena .

// syncronous 
// task a - 5sec
// task b - 2sec
// task c - 15sec
// task d - 1sec

// kasiy pata chalta hy kai hum sunc code likh rhyy hyn ya async


// agar ham inka use kar rhy hyn toh ham use kar rhy hy asyncrounous code hy/

// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest

//--------------------------------------------------------------------------------------

// syncrounous code ==>
// console.log("Hey 1");
// console.log("Hey 2");
// console.log("Hey 3");
// console.log("Hey 4");

//--------------------------------------------------------------------------------------


// kayi barr apka final code dependent hota hy kisi or ke server par , is case me hamein nhi pata hota ke answer usky server sy kab loot kar ayega , toh hun kia nhi kar skty is writing sync code issy nimatny ke liye ham loog async code likh dete hyn taaki blocking na ho and jab bhi answer aye hamara answer ke respect me chlny wala code chal jaye . 

//--------------------------------------------------------------------------------------


// async code ka main motive ye hota hy ke un cases me jin me code ka answer kitni der me ayega toh jab bhi asnwer aa jaye uske answer ke respect me koi particular code chal dena . 


// E.g Asynchronous 

console.log("Im First ...");
setTimeout(() => {
    
    console.log("Hello EveryBody . i am 3 seconds late");
}, 3000)
console.log("Im third ...");


// callback fun humesha async code me time answer any par chlta hy


// //////////////////////////////////////////////////////////////////////////////
// JS is not async asyncronous 
// //////////////////////////////////////////////////////////////////////////////

// async ka matlab hota hy do kam 1 sath hona lekin js doo kam 1 sath karti hi nhi hy
// js kabhi 2 kam 1 sath kar hi nhi skti multi threading hy hi nhi single thread hy .✅


// jo bhi main stack par hotaa hy wo output karta hy and jo bhi side stack par hota hy wo behind the scenes processing kar skta hy


// main stack matlab ke => execution
// syncronous code always move to main stack 

// jab main stack ka ececution ho jayega toh phir asynchronous ke side stack me jakar jo code hoga wo move main stack par ,,, 

// ye main stack or side stack ke beech me jo sari cheezen check kar rha hota hy ooor pooch rha hota ke ke main stack ko show karwana hy phir side stack me check karta hy ke kis kis ka async operation complete hogya hy is beech me jo pooch taach ka jo operation perform kar rha hota hy wo hota hy event loop.

// Event Looop
// event loop main stack me side stack sy cheezen lekar akar ata hy main stack khali ho gya hy ab le chaloo side stack sy is e.g cheez ko main stack par .

// console.log("Hey");
// console.log("Hey2");
// setTimeout(() => {
//     console.log("Hey3");
// } , 0)
// console.log("Hey4");

// ab ap poocho gy ke output Hey , Hey2 ,Hey4 , Hey3 esa kiun hua ham ny toh 0 sec dia tha toh hua ye ke pehly usny synchronous cheezen main stack me move karwaiin phr usny check kiya side stack me ke ye completee hoo gya ke k nhi usny dekha ke ye toh complete ho chuka hy phir usny wo ceehz main stack me le aya is wjha sy Hey3 ,,,, Hey4 ke baad chala .

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// Callbacks
// callbacks hamesha ek function hota hy , ye sirf jab chlta hy jab async code ka completion ho jata hy

// e.g
//setTimeout(() => {  callback func esa func hota hy jo async code ke completion hony par chlta hy  } , 10000)

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// var async =  fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(async);// esa nhi kar skty kiunky ye jo code run kar rhy ho aap woh hy synchronous lekin fetch kia hota hy wo toh async hota hy yani ke req bhej raha hy or hamen nhi pata ke us req ka data kab ayega.
// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// async code likhny ke liye
// fetch
// XMLHttpRequest
// axios
// promises
// setTimeout()
// setInterval()

// ye sary async ka code likh rhy hoo aap agar in me sy koi bhi use kar rhy hoto
// ye sary request ko bhejty hyn ab inka answer btata hun ke khan par ata hy wo yahan aata hy

// callbacks
// then catch
// async await


// Promises In JS
// Promise me 2 hi situation hoti hyn 1 hoti hy resolve or 2sri reject ,,,, or koi senario nhi hota hy ya
// toh promise complete hoga ya toh nhi hoga yani ke error ayega,,, kiunky ye future me comlpete hoga toh ham isy save kar lengy 1 variable me kiunky hamen nhi pata ke kab resolve hokar ye data layega. 
// IMPORTANT agr ye resolve state me hoga toh chlyga then or agar reject state me hoga toh chlyga catch 

// REAL LIFE : me bhi yhi hota hy ke promise karty hyn loog yatoh wo poora karty hyn ya toh wo poory nhi karty.
// 1.) Resolve  2.) Reject   3.) Pending  

// var ans =  new Promise(( res , rej) => {
//     if (true) {
//         return res();
//     }
//     else{
//         return rej() ;
//     }
// })

// ans.then(() => {
//     console.log("Resolve ho gya tha");
// })
// .catch(() => {
//     console.log("Reject hua tha");
// })



// // Make a progrma user will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject

// var newQues = new Promise((res , rej) => {
//     var randNum =  Math.floor(Math.random() * 10 )
//     console.log(randNum);

//     if (randNum < 5) {
//         return res() 
//     }
//     else {
//         return rej()
//     }
// })

// newQues.then(()=> {
//     console.log("Below");
// })
// .catch(() => {
//     console.log("above");
// })


// *******************************************************************************************************
// // ALL ABOUT PROMISES CHANING IN JS

// // sab sy pehly ghar par apoo
// // gate kholo or gate lagao 
// // khana pakaoo or kahan khaoo
// // incognito mode chaloo
// // sojaoo kiunky tum thak gaye hoo

// let antoherWork =  new Promise ((res , rej) => {

//     return res("sabsy pehly ghar par aoo")

// })

// let ques2 =  antoherWork.then((data) => {
//     console.log(data);
//     return   new Promise((res , rej) => {
//         return res("Gate kholo or gare lagaoo ...")
//     })
// })


// let ques3 = ques2.then((data) => {
//     console.log(data);
//     return new Promise((res , rej) => {
//         return res("khana pakaoo or kahan khaoo");
//     })
// })

// let ques4 =  ques3.then((data) => {
//     console.log(data);
//     return new Promise((res , rej) => {
//         return res("incognito mode chaloo");
//     })
// })

// let ques5 = ques4.then((data) => {
//     console.log(data);
//     return new Promise((res , rej) => {
//         return res("sojaoo kiunky tum thak gaye hoo") ;
//     })

// })
// ques5.then((data) => {
//     console.log(data);
// })



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Aync await in JS
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// koi bhi esa func jis me aap async code likengy , kiunky async code hy toh aap promises ka istemal kar skty hyn , jab uska answer ayega apko then lagana pare ga , us then ko lgany sy bachny ke liye , aap async await ka istemal kar skty hyn 


// // ❌❌❌❌❌❌❌ NOT RECOMMENDED !!!
// function abcd () {
//      fetch('https://randomuser.me/api/') 
//      .then((raw) => {
//         return raw.json()
//      })
//      .then((data) => {
//         console.log(data);
//      })
// }
// abcd()



// async function abcd () {
//     let getUserData =  await fetch('https://randomuser.me/api/') 
//     let dataIs = await getUserData.json();
//     console.log(dataIs);
// }
// abcd()

// dekho jab bhi koi code async hai toh apko uske lie wait karna padta hy kiunky hamen nhi pata ke uska answer kab ayega.

// Another fetch api E.g

// const jsonApi = async () => {
//     let getJsonApiData = await fetch('https://jsonplaceholder.typicode.com/todos');
//     let provideData = await getJsonApiData.json() ;
//     console.log(provideData);
// }

// jsonApi();



// 5 use cases 1 dam Real World waaly ...
// fetch
// settimeout
// setinterval

// [concept aside]
// concurrency and parallelism
// concurrency => js me sync code and asyn code 1 sath process ho rha tha ye hai concurrency 
// parallelism => focus ziada karta hy different processors and unke cores par kaam ko chalane par
// throttling => kisi code ko control karna number of executions