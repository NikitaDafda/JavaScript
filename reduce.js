let arr=[1,2,3,4,5];

let finalVal= arr.reduce( (res,ele)=> {
    return res+ele;
})

let mul= arr.reduce( (res,ele)=> {
    return res*ele;
})


let array=[1,4,3,7,9,6];

let max=array.reduce((max,ele)=>
{
    if(ele>max){
        return ele;
    }
    else{
        return max;
    }
})

console.log(max);