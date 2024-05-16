var obj1 = {
    c:100,
};
var obj2 = {
    c:500,
};
var obj3 = {
    c:700,
};
function add(a,b){
    var result;
    result = a + b + obj1.c
     // result = a + b + this.c; 10 + 10 + undefined(NAN)
    console.log(result)
}
add(10,10); //120
add(20,20); //140

add.call(obj1, 10, 10); // 120
add.call(obj2, 10, 10); //520

add.apply(obj1,[20,20]); //140
add.apply(obj2,[50,60]); //610

var x = add.bind(obj3);
x(40,50); //1090
 
var x = add.bind(obj3,100,100);//1200

add.bind(obj2,10,10)();//520
add.bind(obj2)(10,20); //520
