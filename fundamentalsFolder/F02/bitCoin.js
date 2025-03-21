function bitCoin (input){
let priceFor1gGold = 67.51
let totalMoney = 0;
let bitCoinPrice = 11949.16
let bitCoins = 0;
let day = 0;
let firstBitCoinDay = 0;


for (let i = 0; i<input.length;i++){
    day++
    let currentDiggetGold = Number(input[i]);
    if(day % 3 === 0){
        currentDiggetGold*=0.7
    }
    totalMoney += currentDiggetGold*priceFor1gGold
   
    
   
    while(totalMoney>=bitCoinPrice){
      if (bitCoins<=0){
        firstBitCoinDay=day
      }
        bitCoins++
        totalMoney-=bitCoinPrice
    }
    
    
}
console.log(`Bought bitcoins: ${bitCoins}`);
if(bitCoins>0){
console.log(`Day of the first purchased bitcoin: ${firstBitCoinDay}`)
}
console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)



}
bitCoin([100, 200, 300])

/**
 * 1 Bitcoin 11949.16 lv.

  1 g of gold 67.51 lv.


Input

You will receive an array of numbers, representing your shift at the mine.

Output

Print on the console these lines in the following formats:

· First-line prints the total amount of bought bitcoins:

`Bought bitcoins: {count}`

· Second-line prints which day you bought your first bitcoin:

`Day of the first purchased bitcoin: {day}`

In case you did not purchase any bitcoins, do not print the second line.

· Third-line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:

`Left money: {money} lv.
 */