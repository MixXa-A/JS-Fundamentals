// function signCheck(numOne,numTwo,numThree){
//     let result = ``;
//     if (numOne<0){
//         result = `Negative`
//         if(numOne<0 && numTwo<0){
//             result = `Positive`
//         }
//         if (numOne<0 && numTwo<0 && numThree<0){
//             result = `Negative`
//         }
//         return result;
//     } else if (numTwo<0){
//          result = `Negative`
//         if(numTwo<0 && numThree<0){
//             result = `Positive`
//         }
    
//         return result;
//     } else if (numThree<0){
//         result = `Negative`
//         return result;
//     }else{
//         result = `Positive`
//         return result;
//     }

//     }
//      const invokeMyFunction = signCheck(-1,-2,-3);
//      console.log(invokeMyFunction)

// A lot better version .... down there

function signCheck(numOne, numTwo, numThree) {
    let negatives = 0;

    if (numOne < 0) negatives++;
    if (numTwo < 0) negatives++;
    if (numThree < 0) negatives++;

    if (negatives % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
signCheck(-1,5,-2)