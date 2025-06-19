function counterStrike(arr){
let power = Number(arr.shift())
let wonBattles = 0;
for (let attack of arr) {
    if(attack === "End of battle"){
      console.log(`Won battles: ${wonBattles}. Energy left: ${power}`); 
    break;
}
   attack = Number(attack);
    if(power-attack<0){
  console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${power} energy`);
  break;

  }else{
    wonBattles++
    if(wonBattles%3===0){
        power+=wonBattles
    }
    power-=attack
}

}

}
counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
)