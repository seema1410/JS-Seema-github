// iteration

// 1. for loop
// 2.while loop
// 3. do while loop





// high order loop
// 1. for of loop
//different approch for objects 

// syntax
// for(const iteration of Object){
// }
// example

const arr = [1, 2, 3, 4, 5]
for(const i of arr){
    //console.log(i)
}

const map = new Map();
map.set('IN',"INDIA")
map.set('US',"UNITED STATE")
map.set('FAR',"FARNCE")
map.set('IN',"INDIA")
for(const [key,value] of map){
   // console.log(`${key} is ${value}`)
}

//for in loop is use for array every thing is rest is sme




//forEach 

const coding = ["js, java, cpp , python, c"];
coding.forEach(function (item){
    //console.log(item);
})

const myarr=[
    {
        languagename:"javascript",
        languagefile:"js"
    },
     {
        languagename:"python",
        languagefile:"py"
    },
     {
        languagename:"java",
        languagefile:"java"
    }
]
myarr.forEach((item) => {
    console.log(item.languagename);

})