function christmasTournament (input){
let index = 0;
let gameTours = Number(input[index]);
index++;



let totalMoney = 0;
let daysWinned = 0;
let daysLosed = 0;

for(let i = 1;i<=gameTours;i++){
let winedGames = 0;
let losedGames = 0;
let moneyWon = 0;

let gameBuffer = input[index]

while (gameBuffer !== `Finish`){
    index++
    let wOrL = input[index]
    
    if (wOrL === `win`){
        winedGames++
        moneyWon+=20
    }else{
        losedGames++
    }
    index++;
    gameBuffer = input[index];
            
   
}

if (winedGames>losedGames){
    moneyWon*=1.1;
    daysWinned++
    totalMoney+=moneyWon
}else{
    daysLosed++
    totalMoney+=moneyWon
}
index++
}

if(daysWinned>daysLosed){
    totalMoney*=1.2;
console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
}else{
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
}




}
christmasTournament([2,
    `volleyball`,
    `win`,
    `football`,
    `lose`,
    `basketball`,
    `win`,
    `Finish`,
    `golf`,
    `win`,
    `tennis`,
   `win`,
    `badminton`,
    `win`,
    `Finish`
    ])