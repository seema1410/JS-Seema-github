const obj = new Object();//singleton object and can be used to create an object
obj.name = "seema"
obj.id = 1234
obj.email = "seema@google.coom"
obj.isLoggedIn = true

console.log(obj);

const obj2 = {
    fullname: {
        userfullname:{
            firstName: "seema",
            lastName: "dwivedi"
        }

    },
    id: 1235,
    email: "reema@google.com",
    isLoggedIn: false,
}

console.log(obj2.fullname.userfullname.lastName);
console.log(obj2.fullname?.userfullname.lastName);

const obj3 = {1:"a" , 2:"b", 3:"c"};// keys can be numbers
const obj4 = {4:"d" , 5:"e", 6:"f"};
const obj5 = {obj3 , obj4};// creates an object with obj3 and obj4 as properties
const obj6 = {...obj3,...obj4};// spread operator to merge objects
const obj7 = Object.assign({}, obj3, obj4);// merges objects using Object.assign
console.log(obj5);
console.log(obj6);
console.log(obj7);

console.log(Object.keys(obj));// returns an array of keys
console.log(Object.values(obj));// returns an array of values
console.log(Object.entries(obj));// returns an array of key-value pairs

