function oreders (typeOfOrder, quantity){
    let totalSum = 0;
    switch(typeOfOrder){
        case `coffee`:
            totalSum+=1.5*quantity;
            break;
        case `water`:
            totalSum+=1*quantity;
            break;
        case `coke`:
            totalSum+=1.4*quantity;
            break;
        case `snacks`:
            totalSum+=2*quantity;
            break;

    }

    return totalSum.toFixed(2);

}
const myBill = oreders(`coffee`,5);
console.log(myBill)

/**
 * coffee - 1.50

· water - 1.00

· coke - 1.40

· snacks - 2.00
 */