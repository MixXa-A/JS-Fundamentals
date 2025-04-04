function magicNum (input, magicNum){
    let sum = 0;

    for(let i = 0;i<input.length;i++){
        let currentNum = input[i];

        for(let j = i+1;j<input.length;j++){
            let nextNum = input[j];
            if (currentNum+nextNum === magicNum){
                console.log(currentNum,nextNum)
            }
        }
    }

}
magicNum([1, 7, 6, 2, 19, 23],

    8)