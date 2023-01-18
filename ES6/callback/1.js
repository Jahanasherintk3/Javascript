//we are passing a function as a argument to another function
/*let calculate=(a,b,operation)=>{
    if(operation=="sum"){
        result=a+b
    }
    if(operation=="multi"){
        result=a*b
    }
    return result;

}
let r1=calculate(10,20,"sum")
let r2=calculate(10,20,"multi")
console.log(r1)
console.log(r2)*/
// this is the normal function

let sum=(a,b)=>{
    return a+b
}
let multi=(a,b)=>{
    return a*b
}
let calculate=(a,b,x)=>{
    return x(a,b)
}
let r1=calculate(10,20,sum)
console.log(r1)