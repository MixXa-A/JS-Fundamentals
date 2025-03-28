function charsToStr (ch1,ch2,ch3){

let temp = ``
   temp = ch1;
   ch1 = ch3;
   ch3 = temp;
const allChars = ch1+ch2+ch3;

console.log(allChars)
console.log(ch1.charCodeAt(0),ch2.charCodeAt(0),ch3.charCodeAt(0))
}

charsToStr('a','b','c')