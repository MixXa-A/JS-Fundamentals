function repeatString (string, timesToRepeat){

let repeatedString = ``;
    for (let i = 0; i < timesToRepeat; i++){
        repeatedString+=string
    }
   return repeatedString;
}



const invokeMyFunction = repeatString("abc", 3);

console.log(invokeMyFunction);