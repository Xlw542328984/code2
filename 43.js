let num1 = "2", num2 = "3";
    let len1 = num1.length, len2 = num2.length;
    let allArr = new Array(len1 + len2).fill(0)
    for(let i = len1 - 1; i >= 0; i--) {
      let str1 = 0 + num1[i]
      for(let j = len2 - 1; j >= 0; j--) {
        let str2 = 0 + num2[j]
        let multiNum = str1 * str2
        let sum = allArr[i + j + 1] + multiNum
  
        allArr[i + j + 1] = sum % 10
        allArr[i + j] += sum / 10 | 0
      }
    }
    while(allArr[0] == 0) {
      allArr.shift()
    }

  console.log(allArr.length ? allArr.join('') : '0');
  