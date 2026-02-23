const sum=(a,b)=>{
    console.log(a+b);
}; //sum(2,3)

const power=n =>{
    return Math.pow(n,2);
}; //power(3)

//time out function


let id = setInterval( ()=>{console.log("hello")},2000);

setTimeout( ()=>{
    clearInterval(id);
},1000);