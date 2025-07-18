//object literals


const sym = Symbol("key1");// using Symbol to create a unique key

const user = {
    name : "seema",
    "full name": "seema dwivedi",
    [sym]: "value",//[] to use symbol as key
    email:"seema@google.com",
    age : 22,
    location:"india",
    isLoggedIn : false 
}
console.log(user.email);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[sym]);

user.email= "seema@chatgpt.com"
//Object.freeze(user);// prevents modification of the object
user.email = "seema@microsoft.com";
console.log(user);

user.greeting = function(){// this is a method
    console.log("hii whats up");
}

user.greetingTwo = function(){
    console.log(`hello to kesi h aap ${this.name}`);// using this keyword to access the object property
}
console.log(user.greeting());
console.log(user.greetingTwo());