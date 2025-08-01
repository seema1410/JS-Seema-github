const arr = [1, 2, 3  ,4 ,5 ,6 ,7 ,8, 9, 10]
const ans = arr.map((num) => {
    return num+10;
})
//console.log(ans)

//chaining

const answer = arr
    .map((item) =>{
        return item+10
    }).map((item) =>{
        return item*10
    }).map((item) =>{
        return item*10
    }).filter((item) =>{
        return item+20
    })

console.log(answer)
  