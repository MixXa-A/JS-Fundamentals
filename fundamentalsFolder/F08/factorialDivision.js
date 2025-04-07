function factorialDivision (numOne, numTwo){

    function calculateFactorial (num){
        let factorial = 1;
        for(let i = 2; i<=num;i++){
            factorial*= i

        }
        return factorial

    }
    const factorial1 = calculateFactorial(numOne);
    const factorial2 = calculateFactorial(numTwo);
    console.log((factorial1/factorial2).toFixed(2))

}
factorialDivision(5,2)