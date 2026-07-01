// const a=23;

// console.log(a+2);

let excelFile="city.xls"
console.log("Before scope value of a is: ", a);
{
    let excelFile = "state.xls";
    console.log("Inside scope value of a is: ", a);
}

console.log("After scope value of a is: ", a);


// var a=23
// console.log("Before scope value of a is: ", a);
// {
//     var a = 25;
//     console.log("Inside scope value of a is: ", a);
// }

// console.log("After scope value of a is: ", a);