// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops

var i =1;

while(i <= 30){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
}
    else if(i%3==0){
        console.log("Fizz");
}
    else if(i%5==0){
    console.log("Buzz");
}
    else{
    console.log(i);
    }
    i++;
}