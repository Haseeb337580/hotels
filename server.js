//...........1st Function.........
// function add(a,b){
//     return a + b;
// };
// let rr = add(567,6);
// console.log(rr);

//............2nd Function........

// let t = function (a,b){
//     return a + b;
// }
// let g = t(34,6);
// console.log(g);

//............3rd Function........
// let f = (a,b)=>{
//     return a + b;
// }
// let r = f(34,6);
// console.log(r);

//............4th Function........

// let g = (a,h)=>a+h;
// let d = g(56,29);
// console.log(d);

//.............5th Function.....
// (function(a,b){
//     console.log('prince');
// })();

//........Call Back Function....

// function haseeb(){
//     console.log('haseeb');
// };

// function prince(a,b,haseeb){
//     let add = a+b;
//     console.log(add);
//     haseeb();
// }
// prince(67,66,haseeb);

//..........Node.js APIS.......

let br = require('fs');
// let gh = require('os');

// let user = gh.userInfo();
// let n = user.username;
// console.log(n);
// console.log(user);
// console.log(user.username);
// console.log(user.username);
// console.log("hello world");
// console.log("hello world");

// br.appendFile('greeting.txt', 'hi', + user.username + '!', () => {
//   console.log('file is created');
// });
// console.log(u);

// const fs = require('fs');
// const use = { username: 'exampleUser' }; // Define the user object for this example

// br.appendFile('greeting.txt', 'hi ' + use.username + '!', (err) => {
//   if (err) throw err;
//   console.log('File is created');
// });

let u = require('./notes.js');
let y = u.age;
console.log(u);