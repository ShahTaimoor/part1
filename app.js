// -- Accesing The Globel Object

// console.log(global);

// Accesing the globel object

// global.myGlobal = "Hi From Globel Object"

// console.log(global.myGlobal);

// To check our variable is truly global

// console.log(__dirname);
// console.log(__filename);


// ! using setInterval and ClearInterval

// let count = 0;
// const interval = setInterval(()=>{
//     console.log("Hello World");
//     count++
//     if(count === 5){
//         clearInterval(interval)
//     }
// },1000)

//  SetTimout

setTimeout(()=>{
console.log("This will be deleted by five second");
},5000)