/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var temp1 = prices[0], temp2 = 0, count = 0;
    var temp = new Array();
    for(let i = 0; i < prices.length; i++){
        if ( prices[i] <= prices[i+1]){
            temp2 = prices[i+1];
        }else{
            if(temp2 - temp1 > 0 ){
                temp[count] = temp2 - temp1;}
            temp1 = prices[i+1];
            count++;
        }
    }
    if( temp == false){
        return 0;
    }
    if( temp.length == 1){
        return temp[0];
    }
    var min, max;
    if(temp[0] > temp[1]){
        max = temp[0];
        min = temp[1];
    }
    else{
        min = temp[0];
        max = temp[1];
    }
    for (let i =2; i < temp.length; i++){
        if (temp[i] > min && temp[i] <= max){
            min = temp[i+2];
        }
        if(temp[i] > max){
            min = max;
            max = temp[i];
        }
    }
    return [min + max];
};
var prices = [1];
console.log(maxProfit(prices));

//出错了，好难,