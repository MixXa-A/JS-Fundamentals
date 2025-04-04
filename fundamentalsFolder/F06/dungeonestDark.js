function dungeonestDark (arr){
let health = 100;
let coins = 0;
let textForSplitting = arr[0];
let rooms = textForSplitting.split(`|`);
let isGameWon = true;

for(let i = 0;i < rooms.length;i++){
let currentRoom = rooms[i];
let roomElements = currentRoom.split(` `);

for (let j = 0; j<roomElements.length;j++){
    let roomType = roomElements[j];
    let roomValue = Number(roomElements[j+1]);
    if (roomType === `potion`){
        health+=roomValue
       if (health>100){
        let diff = Math.abs((health-roomValue)-100);
        console.log(`You healed for ${diff} hp.`)
        health=100;
       }
       console.log(`You healed for ${roomValue} hp.`)
       console.log(`Current health: ${health} hp.`)
       break;
    }else if(roomType === `chest`) {
        coins+=roomValue
     console.log(`You found ${roomValue} coins.`)
     break;
    }else{
        health-=roomValue
        if (health>0){
            console.log(`You slayed ${roomType}.`);
            break;
        }else{
            isGameWon = false;
            console.log(`You died! Killed by ${roomType}.`);
            console.log(`Best room: ${i+1}.`);
            break;
        }
}

}
if (!isGameWon){
    break;
}
}
if (isGameWon){
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`)

}

}
dungeonestDark([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`])