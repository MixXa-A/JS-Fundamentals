function solve(input) {
    let arr = input.split(' ').map(Number);

    let sum = arr.reduce((a, b) => a + b, 0);
    let average = sum / arr.length;

    let result = arr
        .filter(x => x > average)
        .sort((a, b) => b - a)
        .slice(0, 5);

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('No');
    }
}
solve([10, 20, 30, 40, 50])