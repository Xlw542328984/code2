// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

//法一
// var isPalindrome = function(x) {
//     if(x < 0)
//         return false;
//     if(x == 0)
//         return true;
//     x = x.toString();
//     var n = x.length;
//     for(let i = 0;i < n/2 ; i++){
//         if(x[i] != x[n-1-i]){
//             console.log(x[i]);
//             console.log(x[n-1-i]);
//             return false;
//         }
//     }
//     return true;
// };
//进阶
var isPalindrome = function(x) {
    var n = 0;
    var y = x;
    while(y >= 1){
        y = y/10;
        console.log(y);
        n++;
    }
    console.log(n);
    for(let i = 1;i < n;i++){
    }
};
console.log(isPalindrome(1234567887654321));

// var a = 121;
// b = "121";
// b = b.length;
// console.log(b);
// a=a.toString();
// console.log(a[1]);
// a = a.length;
// console.log(a);