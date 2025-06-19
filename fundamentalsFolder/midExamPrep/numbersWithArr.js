function numbers(arr) {
    let sum = arr.reduce((x, y) => x + y, 0);
    let averageSum = sum / arr.length;

    let filteredResult = arr
        .filter(x => x > averageSum)
        .sort((a, b) => b - a)
        .slice(0, 5); 
    if (filteredResult.length > 0) {
        console.log(filteredResult.join(' '));
    } else {
        console.log('No');
    }
}
