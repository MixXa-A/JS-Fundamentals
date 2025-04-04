function dungeonestDark (arr){
    let currentRoom = 0;
    let health = 100;
    let coins = 0;
    let textForSplitting = arr[0];
    let rooms = textForSplitting.split(`|`);
    let isGameWon = true;
    
    for(let room of rooms){
     
     let roomElements = room.split(` `);

        let roomType = roomElements[0];
        let roomValue = Number(roomElements[1]);
        currentRoom++
        if (roomType === `potion`){
            health+=roomValue
           if (health>100){
            let diff = Math.abs((health-roomValue)-100);
            console.log(`You healed for ${diff} hp.`)
            health=100;
           }
           console.log(`You healed for ${roomValue} hp.`)
           console.log(`Current health: ${health} hp.`)
           
        }else if(roomType === `chest`) {
            coins+=roomValue
         console.log(`You found ${roomValue} coins.`)
         
        }else{
            let monsterName = roomType;
            let monsterAttack = roomValue;
            health-=monsterAttack;
            if (health>0){
                console.log(`You slayed ${monsterName}.`);
                
            }else{
                isGameWon = false;
                console.log(`You died! Killed by ${monsterName}}.`);
                console.log(`Best room: ${currentRoom}.`);
                break;
            }
    }
    
    }

    
    if (isGameWon){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    
    }
    
}
    dungeonestDark([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`])