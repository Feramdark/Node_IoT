const leer = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

console.log("escribe");

leer.on("line",(message,me,men)=>{
    if(message != null && me != null && men != null){
        console.log(message+me+me);
    }
});

