function mToKm(meters){
    let kilometers = meters/1000
    let miles = (0.62137 * kilometers)


console.log(`${meters} meters is equal to ${kilometers} kilometers.`)
console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`)
}
mToKm(1852)