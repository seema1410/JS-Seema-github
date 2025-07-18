const arr1= [ 0 , 1 , 2 , 3, 4 , 5]
const arr2 = [6 , 7 ,  8 , 9 , 10]

arr1.push(arr2)//adds arr2 to the end of arr1 and array in array
console.log(arr1);// [0, 1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

arr1.concat(arr2);// combines arr1 and arr2 but does not modify arr1
console.log(arr1);// [0, 1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

const arr3 = [...arr1,...arr2];// spreads arr1 and arr2 into a new array
console.log(arr3);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr4 = [0 , 1 , 2 , [3 , 4 , 5] , 6 , 7 ,[8 , 9 ,[10 , 11 ,[12 , 13 ]]]];
const arr5  = arr4.flat(Infinity)// flattens the array to any depth
console.log(arr5);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


