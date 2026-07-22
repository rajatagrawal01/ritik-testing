export default function evenOdd(x) {
    if (x % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

export function eligibilty(x) {
    if (x < 18) {
        console.log("Not eligible");
    }
    else if (x == 18) {
        console.log("Learning");
    }
    else {
        console.log("Eligible");
    }
}

export function add(x, y) {
    console.log(x + y);
}
export function sub(x, y) {
    console.log(x - y);
}
export function mul(x, y) {
    console.log(x * y);
}
export function div(x, y) {
    console.log(x / y);
}
export function mod(x, y) {
    console.log(x % y);
}