function triangleArea(side1, side2, side3){
let perimeter = (side1+side2+side3)/2;
let area = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3));
console.log(area)
}
triangleArea(2,

    3.5,
    
    4)