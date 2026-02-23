// function to find avg from 3 num

function avg(a,b,c){
    sum=a+b+c;
    console.log(sum/3);
}

//avg(3,6,9);

// print table

function table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
//table(2);

// sum of n numbers


function getsum(n){
    sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
       // console.log(sum);
    }
    return sum;
}
getsum(5);


// joint string from array

let str=["hello","hii","how","are","you","?"];

function concat(str){
    let result="";
    for(let i=0;i<=str.length;i++){
        result+=str[i];
    }
    return result;
}