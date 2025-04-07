function addAndSubtract(numOne,numTwo,numThree){

    const sum = (x,y)=> x+y;
    const subtract = (x,y)=>x-y;

    const summingResult = sum(numOne,numTwo);
    const subtractResult = subtract(summingResult,numThree)
    console.log(subtractResult)
    
}
addAndSubtract(23,

    6,
    
    10)