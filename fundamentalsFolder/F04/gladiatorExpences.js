function gladiatorExpences (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice ){
    let totalCost = 0;
    let currentGame = 0;
    let shieldBreaks = 0;
    
    for (let i = 1; i<=lostFightsCount;i++){
        currentGame++
        if (currentGame%2===0){
            totalCost+=helmetPrice;
        }
        if (currentGame%3===0)(
            totalCost+=swordPrice
        )
        if (currentGame%2===0&& currentGame%3===0){
            totalCost+=shieldPrice
            shieldBreaks++
            if (shieldBreaks%2===0){
                totalCost+=armorPrice
            }
        }
        
    }
console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}
gladiatorExpences(23,

    12.50,
    
    21.50,
    
    40,
    
    200)

/***
 * 9. *Gladiator Expenses

As a gladiator, Peter has to repair his broken equipment when he loses a fight.
 His equipment consists of a helmet, sword, shield, and armor. 
 You will receive Peter`s lost fights count.

· Every second lost game, his helmet is broken.

· Every third lost game, his sword is broken.

· When both his sword and helmet are broken in the same lost fight, his shield also breaks.

· Every second time, when his shield brakes, his armor also needs to be repaired.

You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.

Input / Constraints

You will receive 5 parameters to your function:

· The first parameter - lost fights count - is an integer in the range [0, 1000].

· The second parameter - helmet price - is the floating-point number in the range [0, 1000].

· The third parameter - sword price - is the floating-point number in the range [0, 1000].

· The fourth parameter - shield price - is the floating-point number in the range [0, 1000].

· The fifth parameter - armor price - is the floating-point number in the range [0, 1000].

Output

· As output you must print Peter`s total expenses for new equipment rounded to the second decimal point: "Gladiator expenses: {expenses} aureus"
 */