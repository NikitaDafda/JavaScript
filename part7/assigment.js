// arrow fun for even num

const isEven= (n)=>{
    return n%2==0; 
}

//guess output

let length=4;
function callback()
{
    console.log(this.length);
}

const object={
    length:5,
    method(callback)
    {
        callback();
    }
    
};

object.method(callback,1,2);