export default function evenOdd(x) {
    if (x % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

export function checkEligibility(age) {
    if (age > 18) {
        console.log("Eligible");
    }
    else if (age == 18) {
        console.log("Learning");
    }
    else {
        console.log("Not eligible");
    }
}

export function add(a,b){
    console.log(a+b);
}
export function sub(a,b){
    console.log(a-b);
}
export function mul(a,b){
    console.log(a*b);
}
export function div(a,b){
    console.log(a/b);
}
export function mod(a,b){
    console.log(a%b);
}
