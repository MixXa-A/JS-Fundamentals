function inventory(arr){
let inventory = arr.shift().split(`, `)
 for (const element of arr) {
    let [action, item] = element.split(` - `);
    if (action ==='Craft!') {
        console.log(inventory.join(`, `));
        break;
    }else if(action ===`Drop`){
        let idx = inventory.indexOf(item);
        if(idx !== -1){
        inventory.splice(idx,1)
        }
    }else if(action ===`Renew`){
        let idx = inventory.indexOf(item);
        if(idx !== -1){
        let newItem = inventory.splice(idx,1)[0];
        inventory.push(newItem);
        }
    }else if(action ===`Combine Items`){
        item = item.split(`:`)
        let idx = inventory.indexOf(item[0]);
        if(idx !== -1){
         inventory.splice(idx+1,0,item[1]);
       
        }
    }else{
       
    let itemChecker = inventory.includes(item);
    if(!itemChecker){
        inventory.push(item)
    }

       
        
    }
    
 }
}
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]
)