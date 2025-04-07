function palindromeIntegers (arr){

    function palindromFinder (num){
        let numAsStr = num+``;
        let numBackwards = ``;
        for(let i = numAsStr.length-1; i>=0;i--){
            numBackwards+=numAsStr[i];
        }
        return numAsStr === numBackwards;
    }
    
    for (let currentNum of arr){
        const palindromeOrNot = palindromFinder(currentNum);
        console.log(palindromeOrNot)
    }

}
palindromeIntegers([123,323,421,121])