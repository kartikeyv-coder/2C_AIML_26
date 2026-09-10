//rest operator
function restEx(...elems){
    console.log(elems)
}

restEx('a','b','c');

//spread operator
function spreadEx(el1,el2,el3){
    console.log(el1,el2,el3);
}

spreadEx(...'abc');

let arr =  [10,20,30];
let arr1 = [40,50,60]
let new_arr = [...arr,...arr1];

console.log(new_arr);