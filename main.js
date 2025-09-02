let input = [1, 4, 6, 7];

let total = [];
const result = (n) => {
    for(let i = 0; i < n.length; i++) {
        score = n[i] * 2;
        total.push(score);
    }
}

// let output = result(input);

console.log(total);