function fun(...input){
    let sum=0;
    for(let i of input) {
        sum+=i;
    }
    return sum;
}
console.log(fun(1,3,4,6));