const pi= 3.14
const sumar=(num1, num2)=>{
    parseInt(num1);
    parseInt(num2);
    console.log(num1+num2)
}

const restar=(num1, num2)=>{
    parseInt(num1);
    parseInt(num2);
    console.log(num1-num2)
}
const sumarPi=(num1, num2)=>{
    parseInt(num1);
    parseInt(num2);
    console.log(num1+num2+pi)
}

const restarPi=(num1, num2)=>{
    parseInt(num1);
    parseInt(num2);
    console.log(num1-num2-pi)
}


export default {sumar, restar, sumarPi, restarPi}