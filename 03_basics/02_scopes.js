// This code demonstrates the use of different variable scopes in JavaScript.
 
if(true){
    let a = 10;
    const b = 20
    var c = 30;
 
}

// console.log(a);// a is not defined here because it is block scoped
// console.log(b);// b is not defined here because it is block scoped
// console.log(c);// c is defined here because it is function scoped


function one(){

    const username = "seema"
    function two(){
        const website = "javascript"
        console.log(username); // username is accessible here because it is in the outer function scope
    }
    two();
   // console.log(website);// website is not accessible here because it is in the inner function scope
}  
//one();
//console.log(username); // username is not accessible here because it is in the local scope of function one


if(true){
    const username = "deeshi"
    if(true){
        const website = "instagram"
       // console.log(username+website)
    }
    //console.log(website)

}
//console.log(username)



//++++++++++++++++++++++++++ interesting part +++++++++++++++++++++++++


onenum(11)//no error here because we are calling the function before it is defined
function onenum(num){
    return num+10;
}

console.log(onenum(11))
//onenum(10)//we will not get value here because we are not console logging it

//twonum(10, 20)//cannot call this function because it is not defined yet
const twonum = function (num1 , num2){
    return num1 + num2;
}
twonum(10, 20)//ok but not give output because we are not console logging it