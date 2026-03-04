let arr=[1,2,3,4,5];

function print(el){
    console.log(el);
}
arr.forEach(print);

//function inside foreach

arr.forEach(function print(el){
    console.log(el);
})

// using arrow function

arr.forEach((el)=>{
    console.log(el);
})

//using object

let array=[{
    name:"nikita",
    marks:80
},
{
    name:"yuvi",
    marks:70
},{
    name:"dofu",
    marks:90
}];

array.forEach((student)=>
{
    console.log(student.name);
})
