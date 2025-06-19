function arrModifier (arr){
    let manipulationArr = arr.shift().split(` `).map(Number);

    let index = 0;
    let command = arr[index];
    while(command!==`end`){
     let tokens = command.split(` `)
     let action = tokens[0];
     if(action === `swap`){
        let idx1 = Number(tokens[1]);
        let idx2 = Number(tokens[2]); 
      let temp = manipulationArr[idx1]
      manipulationArr[idx1] = manipulationArr[idx2]
      manipulationArr[idx2] = temp
     }else if(action === `multiply`){
      let idx1 = Number(tokens[1]);
      let idx2 = Number(tokens[2]);  
       let firstNum = manipulationArr[idx1];
       let secondNum = manipulationArr[idx2];
       let result = firstNum*secondNum;
       manipulationArr.splice(idx1,1,result)
       
     }else {
        for (let i = 0; i < manipulationArr.length; i++) {
            manipulationArr[i]-=1
            
        }
     }

        index++
        command = arr[index]
    }
    console.log(manipulationArr.join(`, `));
    

}
arrModifier( [
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]
)