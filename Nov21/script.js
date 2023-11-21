// **Asynchronous JS**

// - Promises - done yesterday
//   - A promise either get resolved or gets rejected or is still pending
// - then and catch - done yesterday
//   - then is run when the promise is resolved and catch is run when the promise is rejected
// - async await
//   - this was introduced to simplify the process of dealing with outputs of promises
// - few real examples
//   fetch, setTimeout, if third party is included it is async

// - other few concept: concurrency, parallalism, throttling
// - concurrency: ekachoti ma JS le async ra sync kam sangai garne
// - parallelsim: parallel ma 2 ota farak kam vairakhne, by using different cores of processor
// - throttling: process of controlling number of concurrent executions of a same piece of code

// Promise

// explanation 1
// let pr = new Promise(function(resolve, reject){
//     let x = 2 + 3 + 10
//     if(x===6){
//         return resolve('yes')
//     } else {
//         return reject('no')
//     }
// })

// pr.then(function(message){
//     console.log('resolve vo', message)
// }).catch(function(msg){
//     console.log('reject vo', msg)
// })

// explanation 2
// let prms = new Promise(function (res, rej) {
//   let x = 2 + 3 + 1
//   if (x == 6) {
//     return res()
//   } else {
//     return rej()
//   }
// })

// prms.then(function(){
//     console.log('oa resolve vayo')
// }).catch(function(){
//     console.log('oa reject vayo')
// })

// let x = fetch('https://fakestoreapi.com/products/1')
// x.then(function (data) {
//   return data.json()
// })
//   .then(function (result) {
//     console.log(result)
//   })
//   .catch(function (err) {
//     console.log('THis is error MessageChannel', err)
//   })

// async function getData() {
//   let x = await fetch('http://httpstat.us/404')
//   let data = await x.json()
//   console.log(data)
// }
// getData()

// after using try catch block on same code
// async function getData() {
//   let x = await fetch('http://httpstat.us/404')
//   let data = await x.json()
//   console.log(data)
//   try {
//     let data = await x.json()
//     console.log(data)
//   } catch(err) {
//     console.log(err)
//   }
// }
// getData()