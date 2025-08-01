//Imediately invoke function expression(iife)

(function chai(){
    console.log(`DB CONNECTED`)
})();
//; it is important here tp run two iife in single place 
// ()()

( () =>{
    console.log("seema")
})();

((name) =>{
    console.log(`hello ${name}`)

})("khushi")