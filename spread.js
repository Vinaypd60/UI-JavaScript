var obj1 = {
    name : "vinay",
    city : "Hyderabad",
    gender : "male",
};

var obj2 = {
    ...obj1, //spread operator
    id : 101,
    pin : 502032, //added the new prop
    city : "Delhi",
};

console.log(obj1);
console.log(obj2);