var city = "hyderabad";
let unername = "xyz";

function f1(){
    var price = 111 //function scope
    function f2(){ // inside the f1 function(function scope)

    }
    console.log(f1);
    if (true){
        console.log(city);
    }
}