// **Async JS**

// - Promises
//   - A promise either get resolved or gets rejected or is still pending
// - then and catch

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

let x = fetch('https://fakestoreapi.com/products/1')
x.then(function (data) {
  return data.json()
})
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.log(error)
  })