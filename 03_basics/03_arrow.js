const user={
    username : "seema",
    price : 999,
    welcomeMessage :function(){
        console.log(`Welcome ${this.username} your price is ${this.price}`);
        console.log(this);//output will be seema user objectand anshi user object details of the user object
    }
    

}
// user.welcomeMessage();
// user.username = "anshi";
// user.welcomeMessage();
//console.log(this)//output will be window object in browser(window) or global object in nodejs({})

// function chai(){
//     console.log(this)
//    const username = "seema"
//    console.log(this.user)
// }
// chai()

const chai = () =>  {
   // console.log(this)
   const username = "seema"
   //console.log(this)
}
chai()

//arrow function () =>

// const chaiTwo  = (num1 , num2 ) => {
//     return  num1+num2;

// }

//const chaiTwo  = (num1 , num2 ) => (num1 , num2)
    
const chaiTwo  = (num1 , num2 ) => ({username:"seema"})

console.log(chaiTwo(3,4));

