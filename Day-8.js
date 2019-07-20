const a=setTimeout(()=>{
    console.log("React is the best")},5000);


const b=setInterval(()=>{
    console.log("React is the best")},3000);

const c=setInterval(()=>{
    console.log("React is the best")},1000);
clearInterval(b);
setTimeout(()=>{
    clearInterval(c)},10000
);