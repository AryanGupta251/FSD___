function aa(){
    console.log("first");
}
setTimeout(aa,2000);
// IIFE
// (function(){
// console.log("Second");
// })();
// let a=new Function(`console.log("constructor;")`);
// a()

// let b=()=>{
//     console.log("Third");
     
// }
function rollnumber(num, delay, nextroll){
    setTimeout(()=>{
        console.log("rollno is:",num);
        if(nextroll) nextroll();
    },delay)
}
rollnumber(2024,1000, ()=>{
    rollnumber(2025,2000, ()=>{
        rollnumber(2026,3000,()=>{
            rollnumber(2027,4000);
      })
  })
});
