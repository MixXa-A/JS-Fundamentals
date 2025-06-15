function bombNumbers (arr, arr2){
const bombNum = arr2.shift();
const bombPower = arr2.pop();

let indexOfBomb = arr.indexOf(bombNum);
while (indexOfBomb !== -1){
   
    let start = Math.max(0, indexOfBomb-bombPower);
    let end = Math.min(arr.length-1, indexOfBomb+bombPower)

 arr.splice(start, end-start+1);

 indexOfBomb = arr.indexOf(bombNum);

}

let result = arr.reduce((a,b)=> a+b,0);
console.log(result);

//* Златно правило:
//                      Формула	Какво брои
//                           еnd - start	            Елементите между start и end, без да брои end
//                         end - start + 1	            Елементите между start и end, включва end */
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1])