function train (input){
    let trainWagons = input.shift().split(` `).map(Number);
    const maxCapacity = Number(input.shift());
    
    for(let command of input){
    let tokens = command.split(` `);
    let token = tokens[0]
    
    if (token === `Add`){
        let passengers = Number(tokens[1]);
        trainWagons.push(passengers);
    }else{
        let passengers = Number(token);
        for(let i = 0;i<trainWagons.length;i++){
            if (trainWagons[i]+passengers<=maxCapacity){
                trainWagons[i]=trainWagons[i]+passengers;
                break;
            }
        }
    }
        
    }
    console.log(trainWagons.join(` `))
    

}
train(['32 54 21 12 4 0 23',

    '75',
    
    'Add 10',
    
    'Add 0',
    
    '30',
    
    '10',
    
    '75'])