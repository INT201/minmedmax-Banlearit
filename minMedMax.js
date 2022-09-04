const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
    let num = [n1, n2, n3];
    let sum;
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] > num[j]) {
                sum = num[i];
                num[i] = num[j];
                num[j] = sum;
            }
        }
    }
    return {min: num[0], mid: num[1], max: num[2]}
}
console.log(minMedMax(10,0,20));


module.exports = minMedMax
