// FUNCTION SCOPED
// function f1() {
//   var a = 1
//   function f2() {
//     var b = 2
//     console.log(a)
//   }
//   f2()
//   console.log(a)
//   console.log(b)
// }
// f1()

// PRIMITIVE TYPE OF JS
// var a = 1
// var b = a
// b = b + 1
// console.log(b)
// console.log(a)

// COPYING REFERENCE VALUE USING SPREAD OPERATOR
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var arr2 = [...arr1]
// arr2.pop()
// arr1.shift()
// console.log(arr2)
// console.log(arr1)

// var obj1 = {
//   sub: 'CS',
//   marks: 33,
//   students: 50,
// }
// var obj2 = { ...obj1 }
// obj2.sub = 'BCA'
// console.log(obj2)
// console.log(obj1)


// TRUTHY AND FALSY
let a = null
if (document.all) {
  console.log('true')
} else {
  console.log('false')
}