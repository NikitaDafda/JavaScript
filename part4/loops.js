//loops with arrays

let fruits=["apple",'mango','cherry',"banana"];
for(let i=0;i<=fruits.length;i++){
    console.log(fruits[i]);
}


//nested loop with nested arrays

 let marks=[["nikita",90.5],["sapna",50],["priya",90]];
 for(let i=0; i<marks.length; i++){
    console.log(`info of student #${i+1}`)
    for(let j=0; j<marks[i].length; j++){
    console.log(marks[i][j]);
     }
 }

