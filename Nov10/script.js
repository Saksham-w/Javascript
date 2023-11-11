// first class function

// setTimeout( function (){
//   console.log('2 second')
// } ,2000) // the function used here is called an anonymous function

// function game(initialScore, finalScore) {
//   var totalGainedScore = finalScore - initialScore
//   console.log('hi this is inside the game function')
//   console.log(totalGainedScore)
//   return totalGainedScore
// }
// function player(saksham) {
//   var init = 2
//   var final = 12
//   saksham(init, final)
// }
// player(game)

// Arrays
// let arr = [1, 2, 3]
// let obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   '-1': 0,
// }
// arr[-1] = 0
// console.log(arr)

// deleting object properties
// var student = {
//   name: 'ram',
//   age: 25,
//   school: 'gems',
//   address: 'Kathmandu',
// }
// student.name = 'rita'
// delete student.address
// console.log(student);


const btn1 = document.getElementById('btn')
btn1.addEventListener('click', function(){
  console.log('button clicked')
})