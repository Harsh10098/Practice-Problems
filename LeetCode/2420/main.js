var goodIndices = function(num, k) {
    let res = [];
    for(let i=k;i<num.length-k;i++){
        let start = i-k+1;
        let end = i+k-1;
        let flag = true
        while(start<end){
            if(num[start]>num[start-1] || num[end]>num[end+1]){
                flag = false;
                break;
            }
            start++;
            end--;
        }
        if(flag){
            res.push(i)
        }
    }
    return res;
};