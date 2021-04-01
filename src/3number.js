function captureThreeNumbers(str) {
    let patt = /\d/;
    if (/\d{3}/.test(str)){
        for (let i in str){
            i = parseInt(i);
            if (patt.test(str[i]) && patt.test(str[i+1]) && patt.test(str[i+2])){
                return str.slice(i,i+3);
            }
        }
    }
    return false;
}

console.log(captureThreeNumbers('abc123'));
