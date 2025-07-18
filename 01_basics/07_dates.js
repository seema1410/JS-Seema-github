let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate)

let mycreatedDate = new Date( 2025 , 1 , 1 , 1 , 13 , 3 )
console.log(mycreatedDate.toLocaleDateString);

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());

console.log(Math.floor(myTimeStamp / 1000));
  

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDate()); 
console.log(newDate.getDay()); 
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

