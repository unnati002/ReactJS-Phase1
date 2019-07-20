let a=['0','1','2','3','4','5','6','7','8','9'];
x=a[5];
console.log("\n Print 5th element:");
console.log(x);
console.log("\n Insert numbers 10 to 20:");
a=a.concat('10','11','12','13','14','15','16','17','18','19','20');
console.log(a);
console.log("\n Remove last element:");
a.pop();
console.log(a);
console.log("\n Remove first element:");
let[first,...rem]=a;
console.log(rem);
a.push("20");
a[0]="0";
console.log("\n add element at the start of an array");
console.log(a);
console.log("\n Index of number 17 in the array:");
const p=a.filter((value,index)=>{
    if(value==17)
    return index;
});
console.log(p);
console.log("\n Remove item at index 11:");
a.splice(11,1);
console.log(a);
console.log("\n Remove 5 items starting from index 4");
a.splice(4,5);
console.log(a);
console.log("\n Array b ,having multiplication of number and it's index:")
let b=a.map((value,index)=>
{
    return value*index;
});
console.log(b);
console.log("\n Extract number at index 7,8,9,10 from array a");
a.splice(7,4);
console.log(a);
console.log("\n Array c from b ,of numbers greater than 30");
let c=b.map((value)=>
{
    if(value>=30)
    return value;
    else
    return null;
});
console.log(c);
console.log("\n merge array a,b,c");
let s=[...a,...b,...c];
console.log(s);
