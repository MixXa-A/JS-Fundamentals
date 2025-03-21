/*function englishNameOfTheLastDigit (num){
let lastDigit = num % 10
let numberNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (let i = 0; i<=numberNames.length;i++){
    if (lastDigit === i){
        console.log(numberNames[i])
    }

}

}
englishNameOfTheLastDigit(523)*/

function englishNameOfTheLastDigit(num) {
    let lastDigit = Math.abs(num % 10); // Взимаме последната цифра (в случай че числото е отрицателно)
    let numberNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    console.log(numberNames[lastDigit]); // Директно извеждаме името на цифрата
}

// Примерни тестове
englishNameOfTheLastDigit(512); // "two"
englishNameOfTheLastDigit(-1643); // "three"
englishNameOfTheLastDigit(0); // "zero"