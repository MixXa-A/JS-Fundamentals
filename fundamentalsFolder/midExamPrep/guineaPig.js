function puppyFoodForMonth (input){
    let food = Number(input.shift())*1000;
    let hay = Number(input.shift())*1000;
    let cover = Number(input.shift())*1000;
    let puppyWeight = Number(input.shift())*1000;
    const DAYS_IN_MONTH = 30;
    for(let i = 1; i<=DAYS_IN_MONTH;i++){
        food-=300;
        if (i%2===0){
            hay-=food*0.05;
        }

        if (i%3===0){
            cover-=puppyWeight/3;
        }
        if (food<0 || cover<0 || hay<0){
            console.log("Merry must go to the pet store!");
            return;
        }

    }
console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`)
    
    
    
    

}
puppyFoodForMonth([10,5,5.2,1])