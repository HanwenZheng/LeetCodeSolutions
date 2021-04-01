function multiply(a, b) {
    let ad = 0;
    let bd = 0;
    if (a.toString().indexOf('.') !== -1) {
        ad = a.toString().split('.')[1].length;
        console.log(ad)
    }
    if (b.toString().indexOf('.') !== -1) {
        bd = b.toString().split('.')[1].length;
        console.log(bd)
    }
    console.log(ad + bd);
    return (a * b).toFixed(ad + bd);
}

console.log(multiply(3, 0.1));