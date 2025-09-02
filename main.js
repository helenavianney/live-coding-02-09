let input = [1, 4, 6, 7];

let total = [];

for(let i = 0; i < input.length; i++) {
    score = input[i] * 2;
    total.push(score);
}

let output = [];
for(let i = 0; i < total.length; i++) {
    const a = total[i];
    const b = total[i + 1];

    if(a > b) {
        output.push(a)
    }
}

console.log(output);