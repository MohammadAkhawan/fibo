function fibs(num) {
    let result = [];
    if (num === 0) return [0];
    if (num === 1) return [0, 1];
    result = [0, 1];
    for (let i = 2; i < num; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
}

const numFibs = fibs(8);
console.log(numFibs);
