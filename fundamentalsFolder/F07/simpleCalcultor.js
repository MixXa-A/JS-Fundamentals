function simpleCalc(numOne, numTwo, operator){
let result = 0;
    const multiply = (numOne, numTwo) => numOne * numTwo;
    
    const devide = (numOne, numTwo) => numOne / numTwo;
    
    const add = (numOne, numTwo) => numOne + numTwo;
    
    const subtract = (numOne, numTwo) => numOne - numTwo;


    //   Better version here!

    // switch(operator){
    //     case `multiply`:
    //         console.log(multiply(numOne,numTwo));
    //         break;
    //     case `divide`:     
    //         console.log(devide(numOne,numTwo));
    //         break;
    //   ...         
    // By this way we don`t need extra variable and we print result directly.

    switch(operator){
        case `multiply`:
            result = multiply(numOne,numTwo);
            break;
        case `divide`:
            result = devide(numOne,numTwo);
            break;
        case `add`:
            result = add(numOne,numTwo);
            break;
        case `subtract`:
            result = subtract(numOne,numTwo);
            break;

    }
    console.log(result)

}
simpleCalc(5,

    5,
    
    'multiply')