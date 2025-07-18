let name  = "seemadwivedi"
let count = 60
console.log(`hello my name is ${name} and my count is ${count}`)
// console.log("hello my name is " + name + " and my count is " + count);
//the above code is a template literal in JavaScript, which allows for easier string interpolation and multi-line strings.

let gameName = new String ('rajiv dwivedi')
console.log(gameName[3]);
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('i'))


let newName = gameName.substring(0,4)
console.log(newName) 

let anotherName = gameName.slice(0,5)
console.log(anotherName)

let anotherName2 = gameName.slice(-5,10)
console.log(anotherName2)

const str1 = "       seema    "
console.log(str1); 
console.log(str1.trim()); // removes whitespace from both ends of a string

const url = "https://seema.com//seema%20dwivedi"
console.log(url.replace('%20', '-')); // replaces the first occurrence of '%20' with '-' 