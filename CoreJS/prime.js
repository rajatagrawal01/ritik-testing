var num = 13;

function Prime(num) {
  for (let i = 2; i < num; i++) {
    var result;
    if (num % i == 0) {
      result = "Not prime";
      break;
    }
    result = "Prime";
  }
  console.log(num," Is ",result);
}

Prime(13)
Prime(12)
Prime(57)



// for(let i=1;i<=10;i++){

//     if(i==5){
//         // break;
//         continue;
//     }
//     console.log(i);

// }
