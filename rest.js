function f1(x,y,...args){ //...args = rest params
    console.log(x,y, args)
}

f1(100,200,300,400,500,"sai","rahul",{name:"Batta Vinay"}); //any number of arguments we can pass 
//1st argument store in the 1st parameter