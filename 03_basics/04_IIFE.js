// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log('COnnection DB Established');
})();

(()=>{
    console.log('Second Connection started');
})();

((user)=>{
    console.log(`${user} has connected`);
})('KUber')