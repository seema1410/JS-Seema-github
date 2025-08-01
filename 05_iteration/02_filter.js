const myarr = [1,2,3,4,5,6,7,8,9,10]
// const ans  = myarr.filter((item) => (item>4))//single line code dont need the scope or return 

const ans  = myarr.filter((item) => {
   return  item>4
})

//using for each

const answer = myarr.forEach((item) =>{
    if(item>4){
        ans.push(item)
    }

})
console.log(ans)

//if data is cmming from dratabase

const userinfo = book.filter((item) =>{
    return item.genre==="hisstory" && item.edition===2000
})

console.log(userinfo);