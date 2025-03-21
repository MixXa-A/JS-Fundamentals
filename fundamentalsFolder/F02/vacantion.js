function vacantion (groupCount, groupType, day){
let price = 0;

switch (groupType){
    case`Students`:
    if (day === `Friday`){
        price = 8.45
    }else if (day === `Saturday`){
        price = 9.8
    }else if (day === `Sunday`)
        price = 10.46
    break;
    case`Business`:
    if (day === `Friday`){
        price = 10.9
    }else if (day === `Saturday`){
        price = 15.6
    }else if (day === `Sunday`)
        price = 16
    break;
    case`Regular`:
    if (day === `Friday`){
        price = 15
    }else if (day === `Saturday`){
        price = 20
    }else if (day === `Sunday`)
        price = 22.5
    break;
}
 
let totalPrice = price * groupCount;

if (groupType === `Students` && groupCount>=30){
    totalPrice*=0.85
}else if(groupType === `Business` && groupCount>=100){
    totalPrice-= price * 10
}else if(groupType === `Regular` && (groupCount>=10 && groupCount<=20)){
    totalPrice*=0.95
}

console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacantion(30,

    "Students",
    
    "Sunday")
    /**
     * There are also discounts based on some conditions:

· Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%

· Business – if the group is bigger than or equal to 100 people 10 of them can stay for free

· Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%



The output should look like that:
 `Total price: {price}`. 
 The price should be formatted to the second decimal point.
     */