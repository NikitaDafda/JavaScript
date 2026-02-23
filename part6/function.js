function dice(){
    Math.floor(Math.random()*6)+1;
}

dice();

// function with argument

function printName(name,age){
    console.log(`${name}'s age isc${age}.`);
}
printName("nikita",19);