function gladiatorInventory(arr) {
let inventory = arr.shift().split(` `);

for (const element of arr) {
   let [command, equipment] = element.split(` `);
    switch (command) {
    case `Buy`:
        if (!inventory.includes(equipment)){
            inventory.push(equipment);
        }
            
            break;
    
    case `Trash`:
        if(inventory.includes(equipment)){
            let idx = inventory.indexOf(equipment);
            inventory.splice(idx,1)
        }
            
            break;

    case `Repair`:
        if(inventory.includes(equipment)){
            let idx = inventory.indexOf(equipment);
            let item =  inventory.splice(idx,1)[0];
            inventory.push(item)
           
        }
            
            break;

    case `Upgrade`:
    let [name, upgrade] = equipment.split(`-`);
    if (inventory.includes(name)){
        let idx = inventory.indexOf(name);
        inventory.splice(idx+1, 0,`${name}:${upgrade}`);
        
        }
        break;
    }
    
    
    
}
console.log(inventory.join(` `));




    
}
gladiatorInventory([`SWORD Shield Spear`,'Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel'])

//You may receive the following commands:

// · Buy {equipment}

// · Trash {equipment}

// · Repair {equipment}

// · Upgrade {equipment}-{upgrade}

// If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.

// If you receive the Trash command, delete the equipment if it exists.

// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.

// If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".