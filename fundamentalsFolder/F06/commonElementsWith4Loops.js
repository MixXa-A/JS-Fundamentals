function commonElementsBeta (input1, input2){


    for(let i = 0; i<input1.length;i++){
        let currentEl = input1[i];
        for(let j = 0; j<input1.length;j++){
            let comparisonEl = input2[j];
            if(currentEl===comparisonEl){
                console.log(currentEl)
            }
        }

    }

}
commonElementsBeta(['Hey', 'hello', 2, 4, 'Peter', 'e'],

    ['Petar', 10, 'hey', 4, 'hello', '2'])