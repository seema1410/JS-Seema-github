// Array

const arr1 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

//console.log(arr1[8])

// Array methods

// arr1.push(10);
// arr1.push(11);
// arr1.pop()

// arr1.shift();// removes first element
// arr1.unshift(2);// adds element at the beginning
// console.log(arr1);


// const arr2 = arr1.join();// converts array to string
// console.log(arr2)
// console.log(typeof arr1)
// console.log(typeof arr2)

const arr3 = arr1.slice(2,5);// creates a new array from index 2 to 5 (exclusive)
console.log(arr3)// [2, 3, 4]
console.log(arr1)// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr4 = arr1.splice(2,6);// removes elements from index 2 to 6 (exclusive) and modifies the original array
console.log(arr4)// [2, 3, 4, 5, 6]
console.log(arr1)// [0, 1, 7, 8, 9]
