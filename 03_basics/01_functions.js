function sayMyName() {
  // console.log("s");
  // console.log("e");
  // console.log("e");
  // console.log("m");
  // console.log("a");
}
sayMyName();

function addTwoNumber(num1, num2) {
  // console.log(num1 + num2)
}
const result = addTwoNumber(5, 10);
// console.log("result is:" , result);

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

function loginUserMessage(username = "seema") {
  return `User logged in with the username ${username}`;
}
// console.log(loginUserMessage("anshi"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

//use when we dont knpw hw many object or data we get 
function calculatePrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculatePrice(100, 200, 300));
const user = {
  name: "seema",
  age: 22,
};
function userDetail(anyObject) {
  return `name is ${anyObject.name} and age is ${anyObject.age}`;
}
userDetail(user);
