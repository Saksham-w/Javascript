/* 1.Write a JavaScript function to add an item to the end of an array. Use the array [1, 2, 3] and add 4 to it. */
function addItemToEnd(array, item) {
    array.push(item);
    return array;
  }
  
  let myArray1 = [1, 2, 3];
  addItemToEnd(myArray1, 4);
  
  console.log(myArray1); // Output: [1, 2, 3, 4]

// 2.How do you find the length of the array [10, 20, 30, 40, 50] in JavaScript?
function getArrayLengthUsingForEach(array) {
    let length = 0;
  
    array.forEach(function(element) {
      length++;
    });
  
    return length;
  }
  
  let myArray2 = [10, 20, 30, 40, 50];
  let arrayLength = getArrayLengthUsingForEach(myArray2);
  
  console.log(arrayLength);

// 3. Write a JavaScript function to remove the first element of the array [1, 2, 3] and return the new array.
function removeFirstElement(array) {
    array.shift();
    return array;
  }
  
  
  let myArray3 = [1, 2, 3];
  let newArray = removeFirstElement(myArray3);

  console.log(newArray); 

// 4.Create a JavaScript function that reverses the array [1, 2, 3, 4, 5].
function reverseArrayUsingForEach(originalArray) {
    let reversedArray = [];
  
    originalArray.forEach(function(element) {
      reversedArray.unshift(element);
    });
  
    return reversedArray;
  }
  
  let myArray4 = [1, 2, 3, 4, 5];
  let reversedArray = reverseArrayUsingForEach(myArray4);
  
  console.log(reversedArray); 

// 5.Write a JavaScript function to check if an element exists in the array [1, 2, 3, 4, 5]. Check for the element 3.

function doesElementExist(array, element) {
    return array.includes(element);
  }
  
  let myArray5 = [1, 2, 3, 4, 5];
  let elementToCheck = 3;
  
  if (doesElementExist(myArray5, elementToCheck)) {
    console.log(`${elementToCheck} exists in the array.`);
  } else {
    console.log(`${elementToCheck} does not exist in the array.`);
  }


//  6. How do you access the value of the property age in the object {name: 'Alice', age: 25}?
  let person = {name: 'Alice', age: 25};

  let ageValue = person.age;
  
  console.log(ageValue);

//  7.Add a property country with the value USA to the object {name: 'John', age: 30}.
let person1 = {name: 'John', age: 30};

person1.country = 'USA';

console.log(person1);

// 8.Check if a key  named 'email' exists in the object {name: 'Sarah', email: 'sarah@example.com'}.
let personn1 = {name: 'sarah', email:'sarah@example.com'}
function checkKey(key , object){
  return key in object
}

let checkKey1= checkKey('email',personn1)
console.log('key exists in object' ,checkKey1)

// check if given value exists in given object
let personn2 = {name: 'saksham', address:'kathmandu'}
function checkvalue(value , object){
  let check=false
  for(key in object){
   if(value==object[key]){
    check=true
   }
  }
  return check
}
 
let checkvalue1= checkvalue('kathmandu',personn2)
console.log('value exists in object' ,checkvalue1)

// 9.Reverse a string
let string ='saksham'
function reversingString(str) {
        
  const arrayStrings = str.split("");
         
  const reversingArray = arrayStrings.reverse();
       
  const joinArray = reversingArray.join("");
          
  return joinArray;
}
        
const result = reversingString(string);
console.log(result);
