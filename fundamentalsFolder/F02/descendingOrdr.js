
    /*function sortNumbers(a, b, c) {
        if (a < b){ 
        let temp1 = a; a = b; b = temp1; }

        if (a < c) {
         let temp2 = a; a = c; c = temp2; }

        if (b < c) { 
        let temp3 = b; b = c; c = temp3; }
        
        console.log(a);
        console.log(b);
        console.log(c);
    }
sortNumbers(2,1,3)*/


    //Бележка до Миши в бъдещето. ЕХААААА баси логиката гръмна ти главата а а а ? Кратко е нали а а а?

    
function sortNumbers(a, b, c) {


if (a < b) [a, b] = [b, a];
if (a < c) [a, c] = [c, a];
if (b < c) [b, c] = [c, b];

console.log(a);
        console.log(b);
        console.log(c);
    }
sortNumbers(2,1,3)