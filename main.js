let input = [1, 4, 6, 7];

let total = [];
const result = (input) => {
    for(let i = 0; i <= input.length; i++) {
        total = input[i] * 2;
    }
    return total;
}

console.log(total);