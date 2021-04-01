function getUrlParam(sUrl, sKey) {
    let li = sUrl.split('?')[1].split('#')[0].split('&');
    let ans = [];
    if (sKey){
        for (let pair in li) {
            if (li[pair].split('=')[0] === sKey){
                ans.push(li[pair].split('=')[1]);
            }
        }
    } else if (li.length>0){
        for (let pair in li) {
            ans.push(li[pair].split('=')[1]);
        }
    }
    return ans;
}

console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe", "test1"));