function arrManipulation (arr, commands) {
    let index = 0
    let command = commands[index];

    while(command !== `print`){
        let tokens = command.split(` `)
        let action = tokens[0];
        if (action === `add`){
            let index = Number(tokens[1]);
            let value = Number(tokens[2]);
            arr.splice(index, 0, value);
        }else if(action === `addMany`){
            let index = Number(tokens[1]);
          
            for (let i = 2; i < tokens.length; i++) {
                arr.splice(index,0,Number(tokens[i]));
                index++
            }
        }else if(action === `contains`){
            let el = Number(tokens[1]);
            let inx = arr.indexOf(el);
            console.log(inx);
            
        }else if(action ===`remove`){
             let index = Number(tokens[1]);
            arr.splice(index,1);

        }else if(action === `shift`){

      // let shiftingCount = Number(tokens[1]) % arr.length;
       // arr.push(...arr.splice(0, shiftingCount));

         let shiftingCount = Number(tokens[1]);
         for (let i = 0; i < shiftingCount; i++) {
            let shiftingNum = arr.shift()
            arr.push(shiftingNum)
            
         }
        }else if(action === `sumPairs`){
            let tempArr = [];
            let length = Math.ceil(arr.length/2)
            for (let i = 0; i < length; i++) {
                let firstNum = arr.shift()
                let secondNum = arr.shift()
                if (secondNum === undefined){
                    secondNum = 0;
                }
                tempArr.push(firstNum+secondNum)

//                 else if (action === 'sumPairs') {
//              let tempArr = [];
//        for (let i = 0; i < arr.length; i += 2) {
//           let firstNum = arr[i];
//           let secondNum = arr[i + 1] !== undefined ? arr[i + 1] : 0;
//            tempArr.push(firstNum + secondNum);
//     }
//        arr.length = 0;         // изпразваме масива
//        arr.push(...tempArr);   // слагаме новите елементи
// }

                 
            }
            arr = tempArr
        }
        
      index++
      command = commands[index]
    }
   
    console.log(`[ ${arr.join(`, `)} ]`);
    
}
arrManipulation([1, 2, 3, 4, 5],

[`sumPairs`,'addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',

'shift 1', 'print'])

/***·  <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).

· addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.

· contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.

· remove <index> – removes the element at the specified index.

· shift <positions> – shifts every element of the array the number of positions to the left (with rotation).

o For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]

· sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).

o For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].

· print – stop receiving more commands and print the last state of the array in the following format:

`[ {element1}, {element2}, …elementN} ]`

Note: The elements in the array must be joined by comma and space (, ). */