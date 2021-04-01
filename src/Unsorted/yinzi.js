let rl = require('readline').createInterface(process.stdin, process.stdout);

rl.on('line', line => {
    let aFactor = findFactor(parseInt(line.split(' ')[0]));
    let bFactor = findFactor(parseInt(line.split(' ')[1]));
    let arr = [];
    console.log(aFactor, bFactor)
    let aFactors = [...aFactor];
    for (let f of aFactors) {
        if (bFactor.includes(f)) {
            arr.push(f);
            aFactor.splice(aFactor.indexOf(f), 1);
            bFactor.splice(bFactor.indexOf(f), 1);
        } else {
            arr.push(f);
            aFactor.splice(aFactor.indexOf(f), 1);
        }
    }
    let bFactors = [...bFactor];
    for (let f of bFactors) {
        if (aFactor.includes(f)) {
            arr.push(f);
            aFactor.splice(aFactor.indexOf(f), 1);
            bFactor.splice(bFactor.indexOf(f), 1);
        } else {
            arr.push(f);
            bFactor.splice(bFactor.indexOf(f), 1);
        }
    }
    console.log(arr)
    console.log(arr.reduce((prev, cur) => {
        return prev * cur;
    },1))

})

function findFactor(num) {
    let arr = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            num = num / i;
            arr.push(i);
        }
    }
    return arr;
}
