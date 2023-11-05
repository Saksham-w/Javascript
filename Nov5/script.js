// arrays

// let arr = ['rijan', 'rojan', 'saksham', 1, 22, 87, 'hello', true, 4.5, '8.8']
// // console.log(arr)
// // let element = arr[6]
// // console.log(element)

// let a = [1, 2, 3, 4, 5]
// console.log('Original Array: ' + a)

// //push
// a.push(6)
// console.log('After push: ' + a)

// // pop
// a.pop()
// console.log('After pop: ' + a)

// // unshift
// a.unshift(0)
// console.log('After unshift: ' + a)

// // shift
// a.shift()
// console.log('After shift: ' + a)

// // slice
// let newarr = a.slice(2)
// console.log('After slice: ' + a)
// console.log('After slice new arr: ' + newarr)

// // length
// console.log('Length of array is: ' + a.length)

// objects
// they are basically key value pair
// exmaple

// let detailsArr = ['ram', 21, 'CS', 'ktm']
// console.log(detailsArr[0])
// let detailsObj = {
//   name: 'ram',
//   age: 21,
//   subject: 'CS undergrad',
//   male: true,
//   address: 'ktm',
// }
// // let ramkosubj = detailsObj.subject
// // console.log(ramkosubj)

// console.log(detailsObj)

// // Updating object properties
// detailsObj.name = 'ram sharma'
// detailsObj.age = 23
// detailsObj.subject = 'CS postgrad'

// console.log(detailsObj)

// properties vs methods
// let obj = {
//   class: 11,
//   section: 'D',
//   studentsNo: 50,
//   marksCalculator: function (a, b, c) {
//     let marks = a + b + c
//     return marks
//   },
// }
// // method is a object property that contains a function inside it

// let result = obj.marksCalculator(3, 5, 7)
// console.log('result is: ' + result)

// function
// THERE ARE TWO METHODS FOR FUNCTIONS
// METHOD 1: PRINTING BEFORE CALLING THE FUNCTION..ie:GIVING CONSOLE.LOG INSIDE FUNCTION ITSELF OR NO RETURN VALUE
let func1 = function (number) {
    // return number * number
    console.log('square of ' + number + ' is: ' + number*number)
  }
  
  func1(12)
//  METHOD 2: PRINTING AFTER CALLING FUNCTION..ie:GIVING RETURN VALUE INSIDE FUNCTION OR NO CONSOLE.LOG INSIDE FUNCTION
let func = function (number) {
    return number * number
  }
  
  let sqrofone = func(11)
  console.log(sqrofone)


  